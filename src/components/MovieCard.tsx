
import { Card, CardMedia, Typography } from "@mui/material";

export const MovieCard = ({ movie, onClick }: { movie: { id: number; poster_path: string; title: string }, onClick: (id: number) => void }) => {
  return (
    <Card onClick={() => onClick(movie.id)}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Typography variant="h6">{movie.title}</Typography>
    </Card>
  );
};
