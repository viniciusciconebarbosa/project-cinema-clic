// app/context/MovieContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { trend, findMovie, discover } from '@/constants/url';
import { Movie } from '@/components/types';


interface MovieContextProps {
  genre: string;
  query: string;
  movies: Movie[];
  totalPages: number;
  setGenre: (genre: string) => void;
  setQuery: (query: string) => void;
  fetchMovies: (page?: number) => Promise<void>;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [genre, setGenre] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page: number = 1) => {
    const url = `${
      query.length === 0 ? discover : findMovie
    }&with_genres=${genre}&page=${page}&query=${query}&language=pt-BR&region=BR`;

    const response = await axios.get(url);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
   
  };


  // Busca os filmes sempre que genre, query ou page mudar
  useEffect(() => {
    fetchMovies();
  }, [genre, query]);

  return (
    <MovieContext.Provider value={{ genre, query, movies, totalPages, setGenre, setQuery, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};