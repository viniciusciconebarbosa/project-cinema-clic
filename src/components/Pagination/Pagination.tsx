// app/components/pag.tsx
"use client";

import { Pagination, Stack } from "@mui/material";
import { memo } from "react";

export const Pag = ({
  color,
  count,
  onChange,
}: {
  color?: "primary" | "secondary" | "standard";
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}) => {
  return ( 
    <Stack spacing={1}  sx={{ margin: "30px", ul: { display: "flex", justifyContent: "center" } }}>
      <Pagination
        count={count}
        onChange={onChange}
        size="medium"
        siblingCount={3}
      />
    </Stack>
  );
};
export default memo(Pag);
