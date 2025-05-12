"use client";
import React, { useEffect, useState } from "react";
import { getMovieDetails, getMovieImages, getMovieVideos, getTVDetails, getTVImages, getTVVideos } from "@/lib/api";
import DetailPage from "../../../components/DetailPage";

interface Params {
  id: string;
}

interface MovieDetails {
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
}

interface DetailPageWrapperProps {
  params: Promise<Params>; // Agora `params` é uma Promise
}

async function fetchMovieData(id: string): Promise<DataType> {
  const details = await getMovieDetails(id);
  const images = await getMovieImages(id);
  const videos = await getMovieVideos(id);
  return { details, images, videos };
}

async function fetchTVData(id: string): Promise<DataType> {
  const details = await getTVDetails(id);
  const images = await getTVImages(id);
  const videos = await getTVVideos(id);
  return { details, images, videos };
}

export default function DetailPageWrapper({ params }: DetailPageWrapperProps) {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = await params; // Resolve a Promise `params`
        setData(await fetchMovieData(id));
      } catch (error) {
        try {
          const { id } = await params; // Resolve a Promise `params`
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

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Dados não encontrados.</div>; // Verifica se data não é null

  return <DetailPage details={data.details} images={data.images} videos={data.videos} />;
}
