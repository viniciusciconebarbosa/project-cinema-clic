import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  
  const addFavorite = (movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites(prev => prev.filter(m => m.id !== movieId));
  };

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
