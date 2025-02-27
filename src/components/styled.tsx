"use client";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 0vw;
  font-weight: 400;
  border-radius: 0 0 10px 10px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SectionMovies = styled.div`
  text-align: center;
  padding: 8.5vh 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: normal;

  @media (min-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    width: 70%;
  }
`;

export const Data = styled.div`
  font-weight: 400;
  font-size: 2.5vw;

  @media (min-width: 368px) {
    font-weight: 300;
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 1vw;
    font-weight: 200;
  }
`;

export const InfoCard = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 10px;
  font-weight: 400;
  font-size: 2.5vw;

  @media (min-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    font-weight: 400;
    font-size: 10px;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    font-size: 1.0vw;
    font-weight: 400;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  background-color: #001e3c;
  color: white;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
