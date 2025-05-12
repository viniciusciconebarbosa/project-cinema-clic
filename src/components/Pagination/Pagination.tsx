// app/components/pag.tsx
"use client";

import { Pagination as MuiPagination, Stack } from "@mui/material";
import { memo } from "react";

interface PaginationProps {
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  color?: "primary" | "secondary" | "standard";
}

const Pagination: React.FC<PaginationProps> = ({ count, onChange, color = "primary" }) => {
  return (
    <Stack spacing={2}>
      <MuiPagination 
        count={count} 
        onChange={onChange} 
        color={color}
        size="medium"
        siblingCount={3}
      />
    </Stack>
  );
};

export default memo(Pagination);
