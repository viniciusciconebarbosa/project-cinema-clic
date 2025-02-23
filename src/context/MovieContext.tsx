"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieContextProps {
  genre: string;
  query: string;
  setGenre: (genre: string) => void;
  setQuery: (query: string) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [genre, setGenre] = useState('');
  const [query, setQuery] = useState('');

  return (
    <MovieContext.Provider value={{ genre, query, setGenre, setQuery }}>
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
