import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actorsList, detalhe, video } from "../../constants/url";
import { useRequestData } from "../../hook/useRequestData";
import { goToDetailsPageMovie } from "../../router/cordinate";
import {
  ContainerSection2,
  Info,
  Image,
  DivImage,
  DivOverview,
  Footer,
  Header,
  Main,
  Section1,
  Section2,
  Section3,
  Person,
  DivImagePerson,
  ContainerSection3,
} from "./styled";

interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  title: string;
}

interface Cast {
   profile_path: string | null;
   name: string;
   character: string;
 }


interface VideoResponse {
  results: { key: string }[];
}

interface Crew {
   department: string;
   name: string;
 }
 
 interface CastResponse {
   cast: Cast[];
   crew: Crew[];
 }

interface SimilarResponse {
  results: Movie[];
}

export const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
   
  // Definindo tipos para os estados
  const [movie] = useRequestData(
    `${detalhe}${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos&language=pt-BR`
  );

  const [castFull] = useRequestData(
   `${actorsList}/${id}/casts?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
 );

  const [trailers] = useRequestData(
    `${video}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`
  );

  const [related] = useRequestData(
    `${actorsList}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`
  );

  // Filtrando atores e diretores
  const cast = castFull?.cast || [];
  const director = castFull?.crew?.find((member: Crew) => member.department === "Directing");

  // Mapeando atores
  const actors = cast.map((actor: Cast, key: number) => (
    <Person key={key}>
      <a target="_blank" href={`https://google.com/search?q=${actor.name}`} rel="noreferrer">
        <DivImagePerson>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${actor.profile_path}`}
            alt={actor.name}
          />
          {actor.name} como<br />
          <strong>{actor.character}</strong>
        </DivImagePerson>
      </a>
    </Person>
  ));

  // Função para navegar para a página de detalhes de um filme relacionado
  const pafhVerify = (movie: Movie) => {
    goToDetailsPageMovie(navigate, movie.id);
    window.scrollTo(0, 0);
  };

  // Mapeando filmes relacionados
  const related1 = related?.results.map((similar: Movie) => (
    <Person key={similar.id}>
      <DivImagePerson onClick={() => pafhVerify(similar)}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${similar.backdrop_path}`}
          alt={similar.title}
        />
        <strong>{similar.title}</strong>
      </DivImagePerson>
    </Person>
  ));

  return (
    <>
      <Header>Filmes TMDB</Header>
      <Main>
        <Section1 image1={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}>
          <DivImage>
            <Image>
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
                alt={movie?.title}
              />
            </Image>
            <Info>
              <div>Diretor {director && director.name}</div>
              <br />
              <div>Lançamento: {movie?.release_date}</div>
              <div>Imdb: {movie?.vote_average}</div>
            </Info>
          </DivImage>
          <DivOverview>
            Sinopse<br />
            {movie?.overview}
          </DivOverview>
        </Section1>

        <Section2>
          <strong>Principais atores</strong>
          <ContainerSection2>{actors}</ContainerSection2>
          <strong>Trailer</strong>
          <ContainerSection3>
            <iframe
              width="1000"
              height="700"
              src={`https://www.youtube.com/embed/${
                trailers?.results?.[0]?.key || ""
              }`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ContainerSection3>
        </Section2>

        <Section3>
          <strong>Relacionados</strong>
          <ContainerSection2>{related1}</ContainerSection2>
        </Section3>
      </Main>

      <Footer>Todos os direitos reservados!</Footer>
    </>
  );
};