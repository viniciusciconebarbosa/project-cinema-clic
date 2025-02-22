
// types.ts
export interface Movie {
    id: number;
    media_type?: string;
    poster_path?: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    overview?: string; // Adicione mais campos conforme necessário
  }
  
  export interface FindMovieData {
    results: Movie[];
    total_pages: number;
    total_results: number;
    page: number;
  }
  
  export interface SearchFormProps {
    initialState: string;
    initialQuery: string;
  }
  
  export interface ClientComponentProps {
    movies: Movie[];
  }