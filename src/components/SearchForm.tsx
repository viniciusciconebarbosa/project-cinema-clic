// app/components/SearchForm.tsx
"use client";

import { TextField, SelectChangeEvent, Skeleton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useMovieContext } from "@/context/MovieContext";



import { useCallback, useEffect, useState, memo } from "react";

function SearchForm() {
  setTimeout(() => {setLoading(false);}, 500);
  const { genre, query, setGenre, setQuery, setPage } = useMovieContext();
  const [loading, setLoading] = useState(true);
  const handleGenreChange = useCallback((event: SelectChangeEvent) => {
    setQuery("");
    setGenre(event.target.value);
    setPage(1);
  }, []);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre("");
    setQuery(event.target.value);
  },[]);

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="75vw"
          height={56}
          sx={{ mb: 2 }}
        />
      ) : (
        <Select
          sx={{ width: "75vw", bgcolor: "#40658a60", color: "black" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          variant="filled"
          onChange={handleGenreChange}
        >
          <MenuItem value={""}>Nenhum</MenuItem>
          <MenuItem value={"28"}>Ação</MenuItem>
          <MenuItem value={"12"}>Aventura</MenuItem>
          <MenuItem value={"16"}>Animação</MenuItem>
          <MenuItem value={"35"}>Comédia</MenuItem>
          <MenuItem value={"80"}>Crime</MenuItem>
          <MenuItem value={"99"}>Documentário</MenuItem>
          <MenuItem value={"18"}>Drama</MenuItem>
          <MenuItem value={"10751"}>Família</MenuItem>
          <MenuItem value={"14"}>Fantasia</MenuItem>
          <MenuItem value={"36"}>História</MenuItem>
          <MenuItem value={"27"}>Terror</MenuItem>
          <MenuItem value={"10402"}>Música</MenuItem>
          <MenuItem value={"9648"}>Mistério</MenuItem>
          <MenuItem value={"10749"}>Romance</MenuItem>
          <MenuItem value={"878"}>Ficção científica</MenuItem>
          <MenuItem value={"10770"}>TV</MenuItem>
          <MenuItem value={"53"}>Thriller</MenuItem>
          <MenuItem value={"10752"}>Guerra</MenuItem>
          <MenuItem value={"37"}>Ocidental</MenuItem>
        </Select>
      )}

      {loading ? (
        <Skeleton variant="rectangular" width="75vw" height={56} />
      ) : (
        <TextField
          sx={{ width: "75vw", bgcolor: "#40658a60", color: "black" }}
          id="filled-basic"
          value={query}
          onChange={handleSearchChange}
          label="Busque seu filme ou serie."
          variant="filled"
        />
      )}
    </>
  );
}

export default memo(SearchForm);
