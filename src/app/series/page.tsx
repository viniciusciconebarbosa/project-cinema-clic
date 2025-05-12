"use client"

import { Box } from '@mui/material';
import ClientComponent from "@/components/ClientComponent";
import { MovieProvider } from "@/context/MovieContext";
import Header from "@/components/Header/Header";
import FooterComponent from "@/components/Footer/FooterComponent";

export default function SeriesPage() {
  return (
    <MovieProvider>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Header />
        <Box component="main" sx={{ 
          flexGrow: 1, 
          width: '100%',
          background: 'linear-gradient(180deg, #e3f2fd 0%, #f5f5f5 100%)',
          pt: 2
        }}>
          <ClientComponent />
        </Box>
        <FooterComponent />
      </Box>
    </MovieProvider>
  );
}