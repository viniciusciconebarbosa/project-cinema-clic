import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata: Metadata = {
  title: "Movies and TV shows for everyone",
  description: `Descubra análises, notícias e curiosidades do mundo do cinema. 
  Tudo sobre filmes, atores e lançamentos, com críticas detalhadas e 
  recomendações exclusivas.`,
};

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
  });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
      <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {children}
           </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
