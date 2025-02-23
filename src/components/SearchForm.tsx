// app/components/SearchForm.tsx
"use client";

import { useState } from 'react';
import { TextField, SelectChangeEvent } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useMovieContext } from '@/context/MovieContext';

export default function SearchForm() {
  const { genre, query, setGenre, setQuery } = useMovieContext();

  const handleGenreChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
        <Select
          sx={{ width: '75vw', bgcolor: '#40658a60', color: 'black' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Gênero"
          onChange={handleGenreChange}
        >
          <MenuItem value={'not'}>Nenhum</MenuItem>
          <MenuItem value={'28'}>Ação</MenuItem>
          <MenuItem value={'12'}>Aventura</MenuItem>
          <MenuItem value={'16'}>Animação</MenuItem>
          <MenuItem value={'35'}>Comédia</MenuItem>
          <MenuItem value={'80'}>Crime</MenuItem>
          <MenuItem value={'99'}>Documentário</MenuItem>
          <MenuItem value={'18'}>Drama</MenuItem>
          <MenuItem value={'10751'}>Família</MenuItem>
          <MenuItem value={'14'}>Fantasia</MenuItem>
          <MenuItem value={'36'}>História</MenuItem>
          <MenuItem value={'27'}>Terror</MenuItem>
          <MenuItem value={'10402'}>Música</MenuItem>
          <MenuItem value={'9648'}>Mistério</MenuItem>
          <MenuItem value={'10749'}>Romance</MenuItem>
          <MenuItem value={'878'}>Ficção científica</MenuItem>
          <MenuItem value={'10770'}>TV</MenuItem>
          <MenuItem value={'53'}>Thriller</MenuItem>
          <MenuItem value={'10752'}>Guerra</MenuItem>
          <MenuItem value={'37'}>Ocidental</MenuItem>
        </Select>
      </FormControl>

      <TextField
        sx={{ width: '75vw', bgcolor: '#40658a60', color: 'black' }}
        id="filled-basic"
        value={query}
        onChange={handleSearchChange}
        label="Busque seu filme favorito aqui! :D"
        variant="filled"
      />
    </>
  );
}