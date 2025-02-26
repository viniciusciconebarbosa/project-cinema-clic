"use client";

import Pag from "./Pagination";
import { useMovieContext } from "@/context/MovieContext";
import { memo, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { ContainerSection2, Data,  InfoCard, DivImage, Card, Section2, Section3 } from "./styled";
import alt from "../assets/altmovie.jpg";

function ClientComponent() {
  const { movies, totalPages, fetchMovies, page, setPage } = useMovieContext();

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <Section2>
        <ContainerSection2>
          {movies.map((movie, key) => (
            <Card key={key}>
              <DivImage>
                <Image
              
                  quality={50}
                  loading="lazy"
                  width={100}
                  height={100}
                  className={styles.imagecard}
                  alt="filme"
                  src={movie.poster_path ?
                    `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}` :
                    alt
                  }
                />
              </DivImage>
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
        <Pag
          key={`${totalPages}`}
          color="primary"
          count={totalPages > 500 ? 500 : totalPages}
          onChange={handlePageChange}
        />
      </Section3>
    </>
  );
}

export default memo(ClientComponent);