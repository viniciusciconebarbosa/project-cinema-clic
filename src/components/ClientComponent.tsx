"use client";
import Pag from "./Pagination/Pagination";
import { useMovieContext } from "@/context/MovieContext";
import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { SectionMovies, Data, InfoCard, Card } from "./styled";
import alt from "../assets/altmovie.jpg";
import { Skeleton, Box } from "@mui/material";
import Link from "next/link";

function ClientComponent() {
  const { movies, totalPages, fetchMovies, page, setPage } = useMovieContext();
  const [loading, setLoading] = useState(true);

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      const element = document.querySelector('.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.mui-qbng18-MuiPaper-root');
      if (element) {
        const position = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: position, behavior: "smooth" });
      }
    },
    []
  );
  useEffect(() => {
    fetchMovies(page).then(() => setLoading(false));
  }, [page]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
            <Link href={`/details/${movie.id}`} key={key}>
              <Card key={key}>
                <Image
                  quality={90}
                  loading="eager"
                  width={220}
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
            </Link>
          ))}
        </SectionMovies>
      )}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Pag
          key={`${totalPages}`}
          color="primary"
          count={totalPages > 500 ? 500 : totalPages}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

export default memo(ClientComponent);
