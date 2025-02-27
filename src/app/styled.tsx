"use client";
import styled from "styled-components";
import sheBackGround from "../assets/2sheBackGround.jpg";

export const Header = styled.header`
  text-align: center;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001e3c;
  align-content: center;
  box-shadow: inset 0 0 0.5em black;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #79bcff;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;
export const SenctionFind = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
export const input = {
  width: "95%",
  height: "80%",
  margin: "10px",
  color: "primary.main",
  bgcolor: "#40658a60",
  textColor: "white",
};

export const Section1 = styled.section`
  color: #64859e;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-position: fixed;
  background-size: cover; /* Garante que a imagem cubra todo o fundo */
  position: relative; /* Necessário para o pseudo-elemento */

  /* Adiciona um pseudo-elemento para o efeito de blur */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${sheBackGround.src});
    background-position: fixed;
    background-size: cover;
    z-index: -1; /* Coloca o pseudo-elemento atrás do conteúdo */
  }

  div {
    margin: 5px 0;
    padding: auto;
    border-radius: 4px;
    
    div {
      
      height: 60px;
      margin: 1px 0;
    }
  }

  h4 {
    margin: 6px;
  }
`;

