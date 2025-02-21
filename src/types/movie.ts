export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}
