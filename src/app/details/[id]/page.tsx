"use client";
import React, { useEffect, useState } from "react";
import { 
  getMovieDetails, 
  getMovieImages, 
  getMovieVideos, 
  getTVDetails, 
  getTVImages, 
  getTVVideos,
  getMovieReviews,
  getTVReviews
} from "@/lib/api";
import DetailPage from "../../../components/DetailPage";
import LoadingComponent from "@/components/Loading/LoadingComponent";
import Header from "@/components/Header/Header";
import { Box } from "@mui/material";
import FooterComponent from "@/components/Footer/FooterComponent";

interface Params {
  id: string;
}

interface MovieDetails {
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
  status?: string;
  production_companies?: Array<{ name: string }>;
}

interface MovieImages {
  backdrops: Array<{
    file_path: string;
  }>;
}

interface MovieVideos {
  results: Array<{
    key: string;
    name: string;
    type: string;
  }>;
}

interface DataType {
  details: MovieDetails;
  images: MovieImages;
  videos: MovieVideos;
  reviews: {
    results: Array<{
      author: string;
      author_details: {
        avatar_path: string | null;
        rating: number;
      };
      content: string;
      created_at: string;
    }>;
  };
}

interface DetailPageWrapperProps {
  params: Promise<Params>; // Agora `params` é uma Promise
}

async function fetchMovieData(id: string): Promise<DataType> {
  const details = await getMovieDetails(id);
  const images = await getMovieImages(id);
  const videos = await getMovieVideos(id);
  const reviews = await getMovieReviews(id);
  return { details, images, videos, reviews };
}

async function fetchTVData(id: string): Promise<DataType> {
  const details = await getTVDetails(id);
  const images = await getTVImages(id);
  const videos = await getTVVideos(id);
  const reviews = await getTVReviews(id);
  return { details, images, videos, reviews };
}

export default function DetailPageWrapper({ params }: DetailPageWrapperProps) {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = await params;
        setData(await fetchMovieData(id));
      } catch (error) {
        try {
          const { id } = await params;
          setData(await fetchTVData(id));
        } catch (tvError) {
          console.error("Erro ao buscar dados:", tvError);
          setError("Erro ao buscar dados.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  if (loading) return <LoadingComponent />;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Dados não encontrados.</div>;

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DetailPage 
          details={data.details} 
          images={data.images} 
          videos={data.videos} 
          reviews={data.reviews}
        />
      </Box>
      <FooterComponent />
    </Box>
  );
}
