import { FC } from 'react';
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
  ContainerSection3 
} from "./styled";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  videos: {
    results: Array<{
      key: string;
      type: string;
    }>;
  };
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface CastResponse {
  cast: CastMember[];
  crew: Array<{
    department: string;
    name: string;
  }>;
}

interface SimilarMovie {
  id: number;
  title: string;
  poster_path: string;
}

interface SimilarResponse {
  results: SimilarMovie[];
}

export const MovieDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [movie] = useRequestData(`${detalhe}${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos&language=pt-BR`);
  const [castFull] = useRequestData(`${actorsList}/${id}/casts?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
  const [trailers] = useRequestData(`${video}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`);
  const [related] = useRequestData(`${actorsList}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`);

  const atc = castFull.cast.filter(x => x.profile_path !== null);
  const director = castFull?.crew.filter(x => x.department === 'Directing');

  const handleMovieClick = (movie: SimilarMovie): void => {
    goToDetailsPageMovie(navigate, movie.id);
    window.scrollTo(0, 0);
  };

  const renderActors = () => {
    return atc?.map((actor, key) => (
      <Person key={key}>
        <a target="_blank" href={`https://google.com/search?q=${actor.name}`} rel="noopener noreferrer">
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
  };

  const renderRelatedMovies = () => {
    return related?.results.map((similar) => (
      <Person key={similar.id}>
        <DivImagePerson onClick={() => handleMovieClick(similar)}>
          <img 
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${similar.poster_path}`} 
            alt={similar.title}
          />
          {similar.title}
        </DivImagePerson>
      </Person>
    ));
  };

  return (
    <>
      <Header>{movie?.title}</Header>
      <Main>
        <Section1 backGround={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}>
          <DivImage>
            <Image>
              <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            </Image>
            <Info>
              <div>
                <h2>{movie?.title}</h2>
                <p>Lançamento: {movie?.release_date}</p>
                <p>Duração: {movie?.runtime} min</p>
                <p>Avaliação: {movie?.vote_average}</p>
              </div>
            </Info>
          </DivImage>
          <DivOverview>
            <h3>Sinopse</h3>
            <p>{movie?.overview}</p>
          </DivOverview>
        </Section1>
        <Section2>
          <ContainerSection2>
            {renderActors()}
          </ContainerSection2>
        </Section2>
        <Section3>
          <ContainerSection3>
            {renderRelatedMovies()}
          </ContainerSection3>
        </Section3>
      </Main>
    </>
  );
};