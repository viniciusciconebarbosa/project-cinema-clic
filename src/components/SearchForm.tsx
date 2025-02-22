// app/components/SearchForm.tsx
"use client";

import { useState } from 'react';
import { TextField, SelectChangeEvent } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checks } from '@/app/styled';

interface SearchFormProps {
  initialState: string;
  initialQuery: string;
}

export default function SearchForm({ initialState, initialQuery }: SearchFormProps) {
  const [state, setState] = useState(initialState);
  const [textfield1, set1Textfield] = useState(initialQuery);

  const handleGenreChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
    // Aqui você pode fazer uma nova requisição ou atualizar o estado global
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    set1Textfield(event.target.value);
    // Aqui você pode fazer uma nova requisição ou atualizar o estado global
  };

  return (
    <>
   
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
        <Select
          sx={{ width: '75vw', bgcolor: '#40658a60', color: 'black' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
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
        value={textfield1}
        onChange={handleSearchChange}
        label="Busque seu filme favorito aqui! :D"
        variant="filled"
      />
    
    </>
  );
}