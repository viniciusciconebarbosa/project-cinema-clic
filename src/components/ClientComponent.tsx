"use client";

import Pag from "./Pagination";
import { useMovieContext } from "@/context/MovieContext";
import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { SectionMovies, Data, InfoCard, Card } from "./styled";
import alt from "../assets/altmovie.jpg";
import { Skeleton } from "@mui/material";

function ClientComponent() {
  const { movies, totalPages, fetchMovies, page, setPage } = useMovieContext();
  const [loading, setLoading] = useState(true);

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );
  useEffect(() => {
    fetchMovies(page).then(() => setLoading(false));
  }, [page]);

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="80vw"
          height="80vh"
          sx={{ mb: 2 }}
        />
      ) : (
        <SectionMovies>
          {movies.map((movie, key) => (
            <Card key={key}>
              <Image
                quality={50}
                loading="eager"
                width={220} // Defina a largura fixa
                height={330}
                className={styles.imagecard}
                alt="filme"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`
                    : alt
                }
              />

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
        </SectionMovies>
      )}
      <Pag
        key={`${totalPages}`}
        color="primary"
        count={totalPages > 500 ? 500 : totalPages}
        onChange={handlePageChange}
      />
    </>
  );
}

export default memo(ClientComponent);
