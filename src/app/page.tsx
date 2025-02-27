// app/page.tsx
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/SearchForm";
import { Footer, Header, Main, Section1 } from "./styled";
import { MovieProvider } from "../context/MovieContext";

const HomeContent = () => {
  return (
    <>
      <Header>Filmes e series</Header>
      <Main>
        <Section1>
          <SearchForm />
        </Section1>
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
