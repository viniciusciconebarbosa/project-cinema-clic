// app/components/pag.tsx
'use client';
import { Pagination, Stack } from "@mui/material";

export const BasicPag = ({ color, count, onChange }) => {
  return (
    <Stack spacing={1}>
      <Pagination color={color} count={count} onChange={onChange} 
      size="small" 
      siblingCount={5}
      />
    </Stack>
  );
};

export default BasicPag;