// app/components/ClientComponent.tsx
"use client";

import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import BasicPag from "./pag";
import { useMovieContext } from "@/context/MovieContext";
import { Card, DivImage, Image, InfoCard, Data, ContainerSection2, Section2, Section3 } from "../app/styled";
import Link from "next/link";
import styles from "../app/page.module.css";
import { Movie } from "./types";

interface ClientComponentProps {
  initialMovies: Movie[];
}

export default function ClientComponent({ initialMovies }: ClientComponentProps) {
  const { movies, totalPages , setGenre, setQuery, fetchMovies } = useMovieContext();
  const [page, setPage] = useState(1);

  // Atualiza a lista de filmes quando a página muda
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Section2>
        <ContainerSection2>
          {/* Lista de filmes */}
          {movies.map((movie, key) => (
            <Card key={key}>
              <DivImage>
                <Image
                  alt="filme"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                />
              </DivImage>
              <Link href="/series" className={styles.primary}>
                Ir para a Página da série.
              </Link>
              <InfoCard>
                {movie.title === undefined ? movie.name : movie.title}
              </InfoCard>
              <Data>
                {movie.release_date === undefined
                  ? movie.first_air_date
                  : movie.release_date}
              </Data>
            </Card>
          ))}
        </ContainerSection2>
      </Section2>
      <Section3>
        <BasicPag
          color="primary"
          count={totalPages}
          onChange={handlePageChange}
        />
      </Section3>
    </>
  );
}
/* 
"use client";

import { useRouter } from "next/navigation";
import { goToDetailsPageMovie, goToDetailsPageTV } from '../router/cordinate';
import { Movie } from '../components/types';
import { Card, DivImage, Image, InfoCard, Data } from '../app/styled';
import Link from "next/link";
import styles from "../app/page.module.css";

interface ClientComponentProps {
  movies: Movie[];
}

const ClientComponent: React.FC<ClientComponentProps> = ({ movies }) => {
  const navigate = useRouter();

  const pafhVerify = (movie: Movie): void => {
    if (movie.media_type === 'tv') {
      goToDetailsPageTV(navigate, movie.id);
      window.scrollTo(0, 0);
    } else {
      goToDetailsPageMovie(navigate, movie.id);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {movies.map((movie, key) => (
        <Card key={key}>
          <DivImage>
            <Image
              alt="filme"
              onClick={() => pafhVerify(movie)}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            />
            <Link href="/series" className={styles.primary}>
              Ir para a Página da serie.
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
};

export default ClientComponent;



 */
