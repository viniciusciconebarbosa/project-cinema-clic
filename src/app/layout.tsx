import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
            <ThemeProvider theme={theme}>
              {children}
+           </ThemeProvider>
      </body>
    </html>
  );
}
