import styled from "styled-components"
import bgMobile from "../images/bg-hero-mobile.svg"

export const MainHeader = styled.header`
  width: 100%;
  background: transparent;
  overflow: hidden;
  position: absolute;
  top: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 72px;
  padding: 0 20px;

  img {
    width: 110px;
  }

  a {
    width: 110px;
    padding: 6px 0;
    text-align: center;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    color: hsl(192, 100%, 9%);
    box-shadow: 0 0.05rem 0.08rem hsl(208, 11%, 55%);
    transition: 0.2s;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 680px;
  background-image: url(${bgMobile});
  background-color: hsl(193, 100%, 96%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: hsl(192, 100%, 9%);
  line-height: 1.4;

  h1 {
    width: 70%;
    margin-top: 100px;
    font-size: 1.5rem;
  }

  p {
    width: 83%;
    font-size: 1rem;
  }

  a {
    width: 60%;
    padding: 10px 0;
    text-align: center;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 700;
    background-color: hsl(322, 100%, 66%);
    color: hsl(193, 100%, 96%);
    transition: 0.2s;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }

  img {
    max-width: 300px;
  }
`;
