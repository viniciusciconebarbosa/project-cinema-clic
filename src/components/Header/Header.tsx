"use client";
import React, { useState } from "react";
import styles from "./header.module.css"; // Importar o módulo CSS
import logo from "../../assets/logoSmall.png";
import Image from "next/image";
import { Skeleton } from "@mui/material";

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
        <a className={styles.logo} href="/">
          Home
        </a>

        {loading ? (
          <Skeleton
            variant="rectangular"
            width="30vw"
            height={50}
            sx={{ mb: 2 }}
          />
        ) : (
          <Image
            src={logo.src}
            alt="logo site"
            width={110}
            height={60}
            quality={100}
            loading="eager"
            // ou "intrinsic"
          />
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
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <li>
            <a href="/">Projetos</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
