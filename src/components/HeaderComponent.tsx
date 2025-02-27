"use client";
import React, { FC, memo, ReactElement, useState } from "react";
import Image from "next/image";
import { Header } from "@/app/styled";
import { Skeleton } from "@mui/material";
import logo from "../assets/logoSmall.jpg";

const HeaderComponent: FC = (): ReactElement => {
  setTimeout(() => {
    setLoading(false);
  }, 300);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width="80vw"
            height={50}
            sx={{ mb: 2 }}
          />
        ) : (
          <Image
            src={logo}
            alt="logo site"
            width={200}
            height={50}
            quality={100}
            loading="eager"
            layout="fixed" // ou "intrinsic"
          />
        )}
      </Header>
    </>
  );
};
export default memo(HeaderComponent);
