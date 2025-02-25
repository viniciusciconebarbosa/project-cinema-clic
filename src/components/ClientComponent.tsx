// app/components/ClientComponent.tsx
"use client";

import BasicPag from "./pag";
import { useMovieContext } from "@/context/MovieContext";
import { Card, DivImage, Image, InfoCard, Data, ContainerSection2, Section2, Section3 } from "../app/styled";
import { useEffect } from "react";



export default function ClientComponent() {
  const { movies, totalPages , fetchMovies, page, setPage } = useMovieContext();


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
          {movies.map((movie, key) => (
            <Card key={key}>
              <DivImage>
                <Image
                  alt="filme"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
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
        <BasicPag
          key={`${totalPages}`}
          color="primary"
          count={totalPages > 500 ? 500 : totalPages}
          onChange={handlePageChange}
        />
      </Section3>
    </>
  );
}

