// app/page.tsx
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/Search/SearchForm";
import { Main, Section1 } from "./styled";
import { MovieProvider } from "../context/MovieContext";
import { FC, ReactElement } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";
import Header from "@/components/Header/Header";

const HomeContent: FC = (): ReactElement => {
  
  return (
    <>
      <Header/>
      <Main>
        <Section1>
          <SearchForm/>
        </Section1>
        <ClientComponent/>
      </Main>
      <FooterComponent/>
    </>
  );
};

export default function Home() {
  return (
    <MovieProvider>
      <HomeContent/>
    </MovieProvider>
  );
}
