"use client"

import { createContext, useContext, useState, type ReactNode, useEffect, useCallback } from "react"
import axios from "axios"
import { findMovie, discover, trend } from "@/constants/url"
import { Movie } from "@/components/types"


interface MovieContextProps {
  genre: string
  query: string
  movies: Movie[]
  totalPages: number
  featuredItems: Movie[]
  setGenre: (genre: string) => void
  setQuery: (query: string) => void
  fetchMovies: (page?: number) => Promise<void>
  fetchFeaturedItems: () => Promise<void>
  setMovies: (movies: Movie[]) => void
  setTotalPages: (totalPages: number) => void
  page: number
  setPage: (page: number) => void
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined)

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [featuredItems, setFeaturedItems] = useState<Movie[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [genre, setGenre] = useState("")
  const [query, setQuery] = useState("")

  const fetchMovies = useCallback(
    async (page = 1) => {
      const url =
        `${query.length === 0 && genre.length === 0 ? trend : query.length === 0 ? discover : findMovie}` +
        `&with_genres=${genre}` +
        `&page=${page}` +
        `&query=${query || ""}` +
        `&language=pt-BR` +
        `&region=BR`

      try {
        const response = await axios.get(url)
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
      } catch (error) {
        console.error("Error fetching movies:", error)
        setMovies([])
        setTotalPages(0)
      }
    },
    [genre, query],
  )

  const fetchFeaturedItems = useCallback(async () => {
    try {
      const response = await axios.get(`${trend}&language=pt-BR&region=BR`)
      setFeaturedItems(response.data.results.slice(0, 15))
    } catch (error) {
      console.error("Error fetching featured items:", error)
      setFeaturedItems([])
    }
  }, [])

  useEffect(() => {
    fetchMovies()
    fetchFeaturedItems()
  }, [fetchMovies, fetchFeaturedItems])

  return (
    <MovieContext.Provider
      value={{
        page,
        setPage,
        setTotalPages,
        setMovies,
        genre,
        query,
        movies,
        totalPages,
        featuredItems,
        setGenre,
        setQuery,
        fetchMovies,
        fetchFeaturedItems,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider")
  }
  return context
}

