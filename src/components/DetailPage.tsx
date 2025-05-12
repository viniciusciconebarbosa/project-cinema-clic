"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Rating,
  Chip,
  Divider,
  Skeleton,
  LinearProgress,
  Stack
} from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LanguageIcon from '@mui/icons-material/Language'
import MoneyIcon from '@mui/icons-material/Money'
import StarIcon from '@mui/icons-material/Star'
import styles from "./DetailPage.module.css"
import ReviewsComponent from './Reviews/ReviewsComponent'
import { getMovieReviews, getTVReviews } from "@/lib/api"

interface Review {
  author: string;
  author_details: {
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
}

interface Reviews {
  results: Review[];
}

interface DetailPageProps {
  details: {
    id: number;
    title?: string;
    name?: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    genres: Array<{ id: number; name: string }>;
    credits: {
      cast: Array<{
        id: number;
        name: string;
        character: string;
        profile_path: string | null;
      }>;
    };
    similar: {
      results: Array<{
        id: number;
        title?: string;
        name?: string;
        poster_path: string | null;
      }>;
    };
    release_date?: string;
    first_air_date?: string;
    runtime?: number;
    original_language?: string;
    budget?: number;
    status?: string;
    production_companies?: Array<{ name: string }>;
  };
  images: {
    backdrops: Array<{
      file_path: string;
    }>;
  };
  videos: {
    results: Array<{
      key: string;
      name: string;
      type: string;
    }>;
  };
  reviews: Reviews;
}

const DetailPage: React.FC<DetailPageProps> = ({ details, images, videos, reviews: initialReviews }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [reviews, setReviews] = useState<Reviews>(initialReviews);

  const isMovie = details.title !== undefined

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }

  const handleLanguageChange = async (language: string) => {
    setSelectedLanguage(language);
    try {
      const newReviews = await getMovieReviews(details.id.toString(), language);
      setReviews(newReviews);
    } catch (error) {
      console.error('Erro ao buscar reviews:', error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, mt: 13 }}>
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, #001e3c 0%, #0a1929 100%)',
          color: 'white',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={4}>
          {/* Poster e Informações Principais */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.4)' }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${details.poster_path || ''}`}
                alt={details.title || details.name || ''}
                width={500}
                height={750}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </Box>
            
            {/* Informações Rápidas */}
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon />
                <Typography>
                  {details.release_date || details.first_air_date}
                </Typography>
              </Box>
              
              {isMovie && details.runtime && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon />
                  <Typography>
                    {Math.floor(details.runtime / 60)}h {details.runtime % 60}min
                  </Typography>
                </Box>
              )}

              {details.original_language && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LanguageIcon />
                  <Typography>
                    {new Intl.DisplayNames(['pt'], { type: 'language' }).of(details.original_language)}
                  </Typography>
                </Box>
              )}

              {details.budget && details.budget > 0 && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MoneyIcon />
                  <Typography>
                    Orçamento: {formatCurrency(details.budget)}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>

          {/* Conteúdo Principal */}
          <Grid item xs={12} md={8}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontFamily: 'Poppins',
                fontWeight: 600,
                background: 'linear-gradient(to right, #CB9B51, #F6E27A)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                mb: 2
              }}
            >
              {details.title || details.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Rating
                value={details.vote_average / 2}
                precision={0.5}
                readOnly
                icon={<StarIcon sx={{ color: '#F6E27A' }} />}
                emptyIcon={<StarIcon sx={{ color: 'grey.500' }} />}
              />
              <Typography variant="body1">
                {details.vote_average.toFixed(1)}/10 ({details.vote_count} votos)
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              {details.genres.map((genre: any) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  sx={{
                    m: 0.5,
                    background: 'linear-gradient(to right, #CB9B51, #F6E27A)',
                    color: '#000',
                    fontWeight: 500
                  }}
                />
              ))}
            </Box>

            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                color: '#F6E27A',
                fontFamily: 'Poppins',
                mb: 2 
              }}
            >
              Sinopse
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'grey.100'
              }}
            >
              {details.overview || "Sinopse não disponível."}
            </Typography>

            {/* Status e Informações Adicionais */}
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  color: '#F6E27A',
                  fontFamily: 'Poppins',
                  mb: 2 
                }}
              >
                Informações Adicionais
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
                    <Typography variant="subtitle2" color="grey.400">
                      Status
                    </Typography>
                    <Typography variant="body1">
                      {details.status}
                    </Typography>
                  </Paper>
                </Grid>
                {details.production_companies && details.production_companies.length > 0 && (
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
                      <Typography variant="subtitle2" color="grey.400">
                        Produtoras
                      </Typography>
                      <Typography variant="body1">
                        {details.production_companies.map((company: any) => company.name).join(", ")}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Elenco */}
        <Box sx={{ mt: 6 }}>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              color: '#F6E27A',
              fontFamily: 'Poppins',
              mb: 3 
            }}
          >
            Elenco Principal
          </Typography>
          <Grid container spacing={2}>
            {details.credits.cast.slice(0, 6).map((actor: any) => (
              <Grid item xs={6} sm={4} md={2} key={actor.id}>
                <Paper 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Image
                    src={actor.profile_path 
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : "/placeholder.svg"
                    }
                    alt={actor.name}
                    width={185}
                    height={278}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Box sx={{ p: 1 }}>
                    <Typography variant="subtitle2" noWrap>
                      {actor.name}
                    </Typography>
                    <Typography variant="caption" color="grey.400" noWrap>
                      {actor.character}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Galeria */}
        {images.backdrops.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                color: '#F6E27A',
                fontFamily: 'Poppins',
                mb: 3 
              }}
            >
              Galeria
            </Typography>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              swipeable={true}
              dynamicHeight={false}
              className="presentation-mode"
            >
              {images.backdrops.slice(0, 10).map((image: any, index: number) => (
                <div key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                    alt={`Imagem ${index + 1}`}
                    width={1920}
                    height={1080}
                    style={{ width: '100%', height: 'auto' }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </Carousel>
          </Box>
        )}

        {/* Trailers */}
        {videos.results.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                color: '#F6E27A',
                fontFamily: 'Poppins',
                mb: 3 
              }}
            >
              Trailers e Vídeos
            </Typography>
            <Grid container spacing={2}>
              {videos.results.slice(0, 3).map((video: any) => (
                <Grid item xs={12} md={4} key={video.key}>
                  <Paper 
                    sx={{ 
                      position: 'relative',
                      paddingTop: '56.25%', // 16:9 Aspect Ratio
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderRadius: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0
                      }}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Filmes/Séries Relacionados */}
        {details.similar.results.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                color: '#F6E27A',
                fontFamily: 'Poppins',
                mb: 3 
              }}
            >
              {isMovie ? "Filmes Relacionados" : "Séries Relacionadas"}
            </Typography>
            <Grid container spacing={2}>
              {details.similar.results.slice(0, 6).map((item: any) => (
                <Grid item xs={6} sm={4} md={2} key={item.id}>
                  <Link href={`/details/${item.id}`} style={{ textDecoration: 'none' }}>
                    <Paper
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        overflow: 'hidden',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Image
                        src={item.poster_path 
                          ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
                          : "/placeholder.svg"
                        }
                        alt={item.title || item.name}
                        width={220}
                        height={330}
                        className={styles.imagecard}
                      />
                      <Box sx={{ p: 1 }}>
                        <Typography 
                          variant="subtitle2"
                          sx={{ 
                            color: 'white',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {item.title || item.name}
                        </Typography>
                      </Box>
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Reviews */}
        <div className={styles.reviewsSection}>
          <div className={styles.reviewsHeader}>
            <h2>Comentários</h2>
            <select 
              value={selectedLanguage} 
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={styles.languageSelect}
            >
              <option value="">Todos os idiomas</option>
              <option value="pt-BR">Português</option>
              <option value="en-US">Inglês</option>
              <option value="es-ES">Espanhol</option>
              <option value="fr-FR">Francês</option>
              <option value="de-DE">Alemão</option>
              <option value="it-IT">Italiano</option>
              <option value="ja-JP">Japonês</option>
              <option value="ko-KR">Coreano</option>
              <option value="zh-CN">Chinês</option>
            </select>
          </div>
          <ReviewsComponent reviews={reviews.results} />
        </div>
      </Paper>
    </Container>
  )
}

export default DetailPage