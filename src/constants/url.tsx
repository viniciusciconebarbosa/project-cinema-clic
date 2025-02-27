import { config } from "../config/env";

const API_KEY = config.TMDB_API_KEY;

export const trend = `${config.BASE_URL}/trending/all/day?api_key=${API_KEY}`;
export const findMovie = `${config.BASE_URL}/search/movie?api_key=${API_KEY}`;
export const discover = `${config.BASE_URL}/discover/movie?api_key=${API_KEY}`;
export const detalhe = `${config.BASE_URL}/movie/`;
export const detalheTV = `${config.BASE_URL}/tv/`;

export const actorsList = `${config.BASE_URL}/movie`;

export const actorsListTV = `${config.BASE_URL}/tv`;

export const video = `${config.BASE_URL}/movie/`;

export const image = {
  grande: "https://image.tmdb.org/t/p/original/",

  media: "https://image.tmdb.org/t/p/original/",

  pequena: "https://image.tmdb.org/t/p/w500/",
};
