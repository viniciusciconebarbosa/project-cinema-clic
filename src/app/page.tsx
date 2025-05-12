// app/page.tsx
"use client"

import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import ClientComponent from "../components/ClientComponent";
import SearchForm from "../components/Search/SearchForm";
import { MovieProvider, useMovieContext } from "../context/MovieContext";
import { FC, ReactElement } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";
import Header from "@/components/Header/Header";
import FeaturedSlider from "@/components/FeaturedSlider";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import UpdateIcon from '@mui/icons-material/Update';
import { GoldGradient, goldIconStyle, featureCardStyle } from '@/components/GradientIcons/GoldGradient';

const HomeContent: FC = (): ReactElement => {
  const { featuredItems } = useMovieContext()
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main" sx={{ 
        flexGrow: 1, 
        width: '100%',
        background: 'linear-gradient(180deg, #e3f2fd 0%, #f5f5f5 100%)',
      }}>
        <Box sx={{ mb: 6}}>
          <FeaturedSlider featuredItems={featuredItems} />
        </Box>

        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 6, marginBottom: '200px' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                marginTop: '100px',
                fontFamily: 'Poppins',
                fontWeight: 600,
                color: 'black',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: "#a4600c" ,
                  borderRadius: '2px',
                }
              }}
            >
              Bem-vindo ao Seu Portal de Filmes
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins',
                color: 'text.secondary',
                maxWidth: '800px',
                margin: '2rem auto',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 400,
              }}
            >
              Explore uma vasta coleção de filmes e séries, desde os clássicos atemporais até os 
              lançamentos mais recentes. Descubra novas histórias, gêneros diversos e mantenha-se 
              atualizado com as últimas novidades do mundo do entretenimento.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 6, mb: 8, justifyContent: 'center' }}>
              <GoldGradient />
              <Grid item xs={12} md={4}>
                <Box sx={featureCardStyle}>
                  <LocalMoviesIcon sx={goldIconStyle} />
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Catálogo Extenso
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Milhares de títulos para você escolher, incluindo filmes premiados e séries aclamadas.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={featureCardStyle}>
                  <WhatshotIcon sx={goldIconStyle} />
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Lançamentos
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Fique por dentro dos últimos lançamentos e novidades do cinema mundial.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={featureCardStyle}>
                  <UpdateIcon sx={goldIconStyle} />
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Atualizações Diárias
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Conteúdo atualizado diariamente com as últimas informações do mundo do cinema.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Paper 
            elevation={2}
            sx={{
              p: 4,
              mb: 6,
              background: '#ffffff',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(to right, #835d10, #f5d742)',
              }
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{ 
                color: 'black',
                textAlign: 'center',
                fontWeight: 600,
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #835d10, #f5d742)',
                }
              }}
            >
              Descubra Novos Filmes
            </Typography>
            <SearchForm />
          </Paper>

          <Box sx={{ mt: 4 }}>
            <ClientComponent />
          </Box>
        </Container>
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default function Home() {
  return (
    <MovieProvider>
      <HomeContent />
    </MovieProvider>
  );
}
