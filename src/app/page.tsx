// app/page.tsx
"use client"

import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/Search/SearchForm";
import { Main, Section1 } from "./styled";
import { MovieProvider, useMovieContext } from "../context/MovieContext";
import { FC, ReactElement } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";
import Header from "@/components/Header/Header";
import FeaturedSlider from "@/components/FeaturedSlider";

const HomeContent: FC = (): ReactElement => {
  const { featuredItems } = useMovieContext()
  return (
    <>
      <Header/>
      <Main>
      <FeaturedSlider featuredItems={featuredItems} />
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
