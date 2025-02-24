// app/page.tsx

import { trend, findMovie } from "../constants/url";
import { FindMovieData, Movie } from "../components/types"; // Importando as interfaces
import axios from "axios";
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/SearchForm";
import { Footer, Header, Main, Section1 } from "./styled";
import { MovieProvider } from "../context/MovieContext";

const HomeContent = async () => {
  return (
    <>
      <Header>Filmes e series</Header>
      <Main>
        <Section1>
          <h5>
            Descubra análises, notícias e curiosidades do mundo do cinema. Tudo<br></br>
            sobre filmes, atores e lançamentos, com críticas detalhadas e
            recomendações exclusivas.
          </h5>
          <SearchForm />
        </Section1>

        {/* Passa os filmes iniciais e a função de busca para o ClientComponent */}
        <ClientComponent />
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
