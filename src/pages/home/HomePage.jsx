import { trend, findMovie,discover } from '../../constants/url'
import { useRequestData } from '../../hook/useRequestData'
import { Card, ContainerCheck, ContainerSection2, Data, DivImage, Footer, Header, Image, input, InfoCard, Main, Section1, Section2, Section3, SenctionFind, Checks } from './styled'
import { BasicPag } from '../../components/pag'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { goToDetailsPageMovie, goToDetailsPageTV } from '../../router/cordinate'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const HomePage = () => {
   const navigate = useNavigate()
   const [page, setPage] = useState(1);
   const [state, setState] = useState('')
   const [textfield, setTextfield] = useState('')
   const [ pageURL, setPageURL ] = useState(trend)
   const [findMovie1, setFindmovie1] = useRequestData(`${textfield.length === 0 ? pageURL : findMovie}&with_genres=${state}&page=${page}&query=${textfield}&language=pt-BR&region=BR`)


   const handleChange = (event, value) => {
      setPage(value);
      window.scrollTo(0, 0);
   };

   const onChangeSearchMovie = (event) => {
      setTextfield(event.target.value)
   };

   const pafhVerify = (movie) => {

      if (movie.media_type === 'tv') {
         goToDetailsPageTV(navigate, movie.id)
         window.scrollTo(0, 0)

      } else {
         goToDetailsPageMovie(navigate, movie.id)
         window.scrollTo(0, 0)
      }
   }

   const handleChange1 = (event) => {
     setState(event.target.value);

     if(event.target.value === 'not') {
         return setPageURL(trend)
     }
     setPageURL(discover)

   };


   const movies = findMovie1 && findMovie1.results.map((movie, key) => {

      return (

         <Card key={key}>
            <DivImage>
               <Image onClick={() => pafhVerify(movie)} type="image" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}></Image>
            </DivImage>
            <InfoCard>
               {movie.title === undefined ? movie.name : movie.title}
            </InfoCard>
            <Data>{movie.release_date === undefined ? movie.first_air_date : movie.release_date}</Data>

         </Card>
      )
   })

   return (
      <>
         <Header>Filmes TMDB</Header>
         <Main>
            <Section1>
                  <h4>Escolha o genero do filme !</h4>
               <Checks>

                  <FormControl fullWidth>
                     <InputLabel  id="demo-simple-select-label">Genero</InputLabel>
                     <Select
                        sx={{width: '75vw', bgcolor: '#40658a60', color: 'black'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="Genero"
                        onChange={handleChange1}
                     >
                        <MenuItem value={'not'}>Nenhum</MenuItem>
                        <MenuItem value={'28'}>Açao</MenuItem>
                        <MenuItem value={'12'}>Adventura</MenuItem>
                        <MenuItem value={'16'}>Animaçao</MenuItem>
                        <MenuItem value={'35'}>Comedia</MenuItem>
                        <MenuItem value={'80'}>Crime</MenuItem>
                        <MenuItem value={'99'}>Documentario</MenuItem>
                        <MenuItem value={'18'}>Drama</MenuItem>
                        <MenuItem value={'10751'}>Familia</MenuItem>
                        <MenuItem value={'14'}>Fantasia</MenuItem>
                        <MenuItem value={'36'}>Historia</MenuItem>
                        <MenuItem value={'27'}>Terror</MenuItem>
                        <MenuItem value={'10402'}>Musica</MenuItem>
                        <MenuItem value={'9648'}>Misterio</MenuItem>
                        <MenuItem value={'10749'}>Romance</MenuItem>
                        <MenuItem value={'878'}>Ficção científica</MenuItem>
                        <MenuItem value={'10770'}>TV</MenuItem>
                        <MenuItem value={'53'}>Thriller</MenuItem>
                        <MenuItem value={'10752'}>Guerra</MenuItem>
                        <MenuItem value={'37'}>Ocidental</MenuItem>

                     </Select>
                  </FormControl>

               </Checks>
               <SenctionFind>
                  <TextField sx={input} id="filled-basic"
                     onChange={onChangeSearchMovie}
                     value={textfield}
                     label="Busque seu filme favorito aqui ! :D" variant="filled" />
               </SenctionFind>
            </Section1>

            <Section2>
               <ContainerSection2>
                  {movies}
               </ContainerSection2>
            </Section2>

            <Section3>
               <BasicPag
                  color="primary"
                  onChange={handleChange}
                  count={findMovie1 ? findMovie1.total_pages : 1}
               ></BasicPag>
            </Section3>
         </Main>

         <Footer>
            Todos os direitos reservados !
         </Footer>
      </>
   )
}
