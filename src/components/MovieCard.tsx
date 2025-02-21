import { Card, Image } from './styled';

export const MovieCard = ({ movie, onClick }) => {
  return (
    <Card onClick={() => onClick(movie.id)}>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </Card>
  );
};
