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
      <Header><div>Filmes e series</div></Header>
      <Main>
        <Section1>
          <h5>
          
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
