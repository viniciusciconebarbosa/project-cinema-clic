"use client";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 0vw;
  font-weight: 400;
  transition: transform 0.5s;
  img {
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const SectionMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  justify-content: center;
  
  @media (min-width: 368px) {
    grid-template-columns: repeat(2, minmax(auto, 220px));
  }
  
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, minmax(auto, 220px));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(auto, 220px));
  }
`;

export const Data = styled.div`
  font-weight: 400;
  font-size: 2.5vw;
  border-bottom: 1px solid #d3d3d3;
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
  font-size: "0.5rem";
  border-bottom: 1px solid #d3d3d3;
  @media (min-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    font-weight: 400;
    fontSize: "0.7rem",
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    font-size: 1.0vw;
    font-size: "0.5rem";
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
