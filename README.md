# Projeto em react

# Introdução

 LINK: https://celebrated-dusk-9c8c58.netlify.app/

Instalaçao
node.js/npm e requerido.

Voce pode optar por baixar esse projeto em seu computador e testar por si mesmo as funcionalidades.

* Clone o repo: (https://github.com/viniciuscicone/project-themoviedb.git)
* cd /project-themoviedb
* Instale packages: npm install
* npm run start
* Abra em seu navegador: http://localhost:3000

# Introdução

Tecnologias ultilizadas : 

* React
* Styled-components
* Material ui
* Axios
* React Router Dom


## O desafio

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint  [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada.

Siga o [layout do figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End) sugerido. Não há necessidade de ser pixel perfect mas respeite a composição, fontes e cores.

## Requisitos funcionais

* [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

* [x] O usuário deve conseguir paginar a lista para encontrar novos filmes

* [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

* [x] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa


## Requisitos não funcionais

* [x] O app deverá ser criado usando [React](https://reactjs.org/)

* [x] Na raiz do projeto, será necessário incluir um arquivo `README.md` com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

* [x] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

* [x] O app deverá ser responsivo

## Extras

Temos insights que nos levam a acreditar que os usuários dessa lista costumam ter uma experiência melhor se conseguirem criar um filtro usando seus gêneros favoritos. Portanto, você também poderá criar filtros de filmes por gênero nessa listagem. Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list).

* [ ] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
* [ ] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
* [ ] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

A terminar funcionalidade de filtros
