// app/components/SearchForm.tsx
"use client";

import {
  TextField,
  SelectChangeEvent,
  Skeleton,
  InputLabel,
  FormControl,
  Stack,
  InputAdornment,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useMovieContext } from "@/context/MovieContext";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';

function SearchForm() {
  const { genre, query, setGenre, setQuery, setPage } = useMovieContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const handleGenreChange = (event: SelectChangeEvent) => {
    setQuery("");
    setGenre(event.target.value);
    setPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre("");
    setQuery(event.target.value);
  };

  if (loading) {
    return (
      <Stack spacing={2} sx={{ width: '100%', maxWidth: '800px', mx: 'auto' }}>
        <Skeleton variant="rectangular" height={56} />
        <Skeleton variant="rectangular" height={56} />
      </Stack>
    );
  }

  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: '800px', mx: 'auto' }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="genre-select-label">Gênero</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          onChange={handleGenreChange}
          label="Gênero"
          startAdornment={
            <InputAdornment position="start">
              <MovieIcon sx={{ color: '#835d10' }} />
            </InputAdornment>
          }
          sx={{
            bgcolor: 'background.paper',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          }}
        >
          <MenuItem value="">Todos os Gêneros</MenuItem>
          <MenuItem value="28">Ação</MenuItem>
          <MenuItem value="12">Aventura</MenuItem>
          <MenuItem value="16">Animação</MenuItem>
          <MenuItem value="35">Comédia</MenuItem>
          <MenuItem value="80">Crime</MenuItem>
          <MenuItem value="99">Documentário</MenuItem>
          <MenuItem value="18">Drama</MenuItem>
          <MenuItem value="10751">Família</MenuItem>
          <MenuItem value="14">Fantasia</MenuItem>
          <MenuItem value="36">História</MenuItem>
          <MenuItem value="27">Terror</MenuItem>
          <MenuItem value="10402">Música</MenuItem>
          <MenuItem value="9648">Mistério</MenuItem>
          <MenuItem value="10749">Romance</MenuItem>
          <MenuItem value="878">Ficção científica</MenuItem>
          <MenuItem value="10770">TV</MenuItem>
          <MenuItem value="53">Thriller</MenuItem>
          <MenuItem value="10752">Guerra</MenuItem>
          <MenuItem value="37">Ocidental</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        value={query}
        onChange={handleSearchChange}
        label="Buscar filmes e séries"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#835d10' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          bgcolor: 'background.paper',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'text.secondary',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main',
          },
        }}
      />
    </Stack>
  );
}

export default SearchForm;
