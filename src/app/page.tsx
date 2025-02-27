// app/page.tsx
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/SearchForm";
import { Main, Section1 } from "./styled";
import { MovieProvider } from "../context/MovieContext";
import HeaderComponent from "@/components/HeaderComponent";
import { FC, ReactElement } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";

const HomeContent: FC = (): ReactElement => {
  return (
    <>
      <HeaderComponent/>
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
