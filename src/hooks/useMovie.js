import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useMovie = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const [movieData, castData] = await Promise.all([
          movieService.getMovieDetails(movieId),
          movieService.getMovieCast(movieId)
        ]);
        setMovie(movieData.data);
        setCast(castData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovie();
  }, [movieId]);

  return { movie, cast, loading, error };
};
