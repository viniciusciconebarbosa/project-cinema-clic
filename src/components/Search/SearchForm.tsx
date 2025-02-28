// app/components/SearchForm.tsx
"use client";

import {
  TextField,
  SelectChangeEvent,
  Skeleton,
  InputLabel,
  FormControl,
  FilledInput,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useMovieContext } from "@/context/MovieContext";
import { useState } from "react";

function SearchForm() {
  setTimeout(() => {
    setLoading(false);
  }, 500);
  const { genre, query, setGenre, setQuery, setPage } = useMovieContext();
  const [loading, setLoading] = useState(true);

  const handleGenreChange = (event: SelectChangeEvent) => {
    setQuery("");
    setGenre(event.target.value);
    setPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre("");
    setQuery(event.target.value);
  };

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
        <>
          <FormControl
            variant="filled"
            sx={{
              width: "75vw",
              bgcolor: "#40658a60",
              "& .MuiFilledInput-root:after": {
                borderBottomColor: "white", // barra
                fontWeight: '100',
              },
              "& .MuiInputLabel-root": {
                fontWeight: '100',
                color: "white", // label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // label focado
                fontWeight: '100',
              },
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{ color: "white",fontSize: "0.7rem", }} // Cor do label quando está parado
            >
              Escolha o gênero
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genre}
              onChange={handleGenreChange}
              input={<FilledInput />}
              sx={{
                fontSize: "0.7rem",
                color: "white", // Cor do texto selecionado
              }}
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
          </FormControl>
        </>
      )}

      {loading ? (
        <Skeleton
          variant="rectangular"
          width="75vw"
          height={56}
          sx={{ mb: 2 }}
        />
      ) : (
        <TextField
          sx={{
            width: "75vw",
            bgcolor: "#40658a60",
            color: "white",
            "& .MuiInputLabel-root": {
              fontWeight: '100',
              fontSize: "0.7rem",
              color: "white", // label parado
            },
            "& .MuiFilledInput-root:after": {

              borderBottomColor: "white", // barra abaixo
            },
            "& .MuiInputLabel-root.Mui-focused": {
              fontWeight: '100',
              color: "white", // label focado
            },
          }}
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

export default SearchForm;
