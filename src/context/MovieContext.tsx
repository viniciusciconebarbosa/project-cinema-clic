import { createContext, FC, ReactNode, useState } from 'react';
import { Movie } from '../types/movie.types';

interface MovieContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextType>({} as MovieContextType);

export const MovieProvider: FC<MovieProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  
  // Provider implementation
};
