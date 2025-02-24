// app/page.tsx

import { trend, findMovie } from "../constants/url";
import { FindMovieData, Movie } from "../components/types"; // Importando as interfaces
import axios from "axios";
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/SearchForm";
import {
  Card,
  ContainerCheck,
  ContainerSection2,
  Data,
  DivImage,
  Footer,
  Header,
  Image,
  input,
  InfoCard,
  Main,
  Section1,
  Section2,
  Section3,
  SenctionFind,
  Checks,
} from "./styled";
import BasicPag from "../components/pag";
import { MovieProvider } from "../context/MovieContext";

async function fetchMovies(url: string): Promise<FindMovieData> {
  const response = await axios.get(url);
  return response.data;
}

const HomeContent = async () => {
  const genre = "";
  const query = "";
  const pageURL = trend;
  const findMovie1 = await fetchMovies(
    `${query.length === 0 ? pageURL : findMovie}&with_genres=${genre}&page=1&query=${query}
    &language=pt-BR&region=BR`
  );

  const movies = findMovie1.results;
  const totalPages = findMovie1.total_pages;
  console.log(`${query.length === 0 ? pageURL : findMovie}&with_genres=${genre}&page=1&query=${query}
    &language=pt-BR&region=BR`);

  return (
    <>
      
      <Header>Filmes TMDB

      </Header>
      <Main>
        <Section1>
          <h4>Escolha o gênero do filme!</h4>
          <SearchForm />
        </Section1>

        {/* Passa os filmes iniciais e a função de busca para o ClientComponent */}
        <ClientComponent initialMovies={movies} />
      </Main>

      <Footer>Todos os direitos reservados!</Footer>
    </>
  );
};

export default function Home() {
  return (
    <MovieProvider>
      <HomeContent />
    </MovieProvider>
  );
}
