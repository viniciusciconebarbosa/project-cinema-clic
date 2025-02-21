import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL
});


export const movieService = {
  getTrending: () => api.get(`/trending/all/day?api_key=${API_KEY}`),
  getMovieDetails: (id) => api.get(`/movie/${id}?api_key=${API_KEY}&language=pt-BR`),
  getMovieCast: (id) => api.get(`/movie/${id}/credits?api_key=${API_KEY}`)
};