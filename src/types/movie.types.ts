export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
