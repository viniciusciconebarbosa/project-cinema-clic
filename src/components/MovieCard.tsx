import { Card, CardMedia, Typography } from "@mui/material";
import { Console } from "console";

interface Movie {
  id: number;
  poster_path?: string; // poster_path agora é opcional
  title?: string;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/path/to/fallback/image.jpg'; // Imagem de fallback

  return (
    <Card onClick={() => console.log(movie.title)}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={movie.title}
      />
      <Typography variant="h6">{movie.title}</Typography>
    </Card>
  );
};