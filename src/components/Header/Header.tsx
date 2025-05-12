"use client";
import React, { useState } from "react";
import styles from "./Header.module.css"; // Importar o módulo CSS
import logo from "../../assets/logoSmall.png";
import Image from "next/image";
import { Skeleton } from "@mui/material";
import Link from 'next/link';
import LocalMovies from '@mui/icons-material/LocalMovies';
import { Typography, Box } from "@mui/material";

const Header = () => {
  setTimeout(() => {
    setLoading(false);
  }, 300);

  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleOverlayClick = () => {
    setIsActive(false);
  };

  return (
    <header>
      <div
        className={`${styles.overlay} ${isActive ? styles.active : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <LocalMovies sx={{ fontSize: 40 }} />
          <Typography variant="h6" component="h1">
            MovieDB
          </Typography>
        </Link>

        {loading ? (
          <Skeleton
            variant="rectangular"
            width="30vw"
            height={50}
            sx={{ mb: 2 }}
          />
        ) : (
          <div className={styles.logoContainer}>
            <Image
              src={logo.src}
              alt="logo site"
              width={110}
              height={60}
              quality={100}
              loading="eager"
            />
          </div>
        )}
        <div
          className={`${styles.mobileMenu} ${isActive ? styles.active : ""}`}
          onClick={handleClick}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={`${styles.navList} ${isActive ? styles.active : ""}`}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
