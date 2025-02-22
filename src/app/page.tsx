// app/page.tsx
import { trend, findMovie } from '../constants/url';
import { FindMovieData, Movie } from '../components/types'; // Importando as interfaces
import axios from 'axios';
import ClientComponent from '../components/ClientComponent';
import SearchForm from '../components/SearchForm';
import { Card, ContainerCheck, ContainerSection2, Data, DivImage, Footer, Header, Image, input, InfoCard, Main, Section1, Section2, Section3, SenctionFind, Checks } from './styled';
import BasicPag from '../components/pag';



async function fetchMovies(url: string): Promise<FindMovieData> {
  const response = await axios.get(url);
  return response.data;
}

export default async function Home() {
  const page = 1;
  const state = '';
  const textfield = '';
  const pageURL = trend;

  const findMovie1 = await fetchMovies(
    `${textfield.length === 0 ? pageURL : findMovie}&with_genres=${state}&page=${page}&query=${textfield}&language=pt-BR&region=BR`
  );

  return (
    <>
      <Header>Filmes TMDB</Header>
      <Main>
        <Section1>
          <h4>Escolha o gênero do filme!</h4>
          <SearchForm
            initialState={state}
            initialQuery={textfield}  
          >
          </SearchForm>
          
          

          
        </Section1>




        <Section2>
          <ContainerSection2>
          <ClientComponent movies={findMovie1.results} />
          </ContainerSection2>
        </Section2>

        <Section3>
        <BasicPag
            color="primary"
            count={findMovie1 ? findMovie1.total_pages : 1}
          />
        </Section3>

      </Main>

      <Footer>Todos os direitos reservados!</Footer>

    </>
  );
}