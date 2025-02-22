"use client";

import { Movie } from './types';
import { Card, DivImage, Image, InfoCard, Data } from '../app/styled';
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface ClientComponentProps {
  movies: Movie[];
}

export default function ClientComponent({ movies }: ClientComponentProps) {
  const router = useRouter();

  const handleNavigate = (movie: Movie): void => {
    if (movie.media_type === 'tv') {
      router.push(`/tv/${movie.id}`);
    } else {
      router.push(`/movie/${movie.id}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      {movies.map((movie, key) => (
        <Card key={key}>
          <DivImage>
            <Image
              alt="filme"
              onClick={() => handleNavigate(movie)}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            />
            <Link
              href={movie.media_type === 'tv' ? `/tv/${movie.id}` : `/movie/${movie.id}`}
            >
              Ir para a Página de Detalhes
            </Link>
          </DivImage>
          <InfoCard>
            {movie.title === undefined ? movie.name : movie.title}
          </InfoCard>
          <Data>
            {movie.release_date === undefined ? movie.first_air_date : movie.release_date}
          </Data>
        </Card>
      ))}
    </>
  );
}