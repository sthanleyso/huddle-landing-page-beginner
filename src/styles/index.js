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
    box-shadow: 0 8px 12px 0 hsla(180,5%,92%,.16),0 2px 8px 0 hsla(0,0%,0%,.08);
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
    margin: 0 auto;
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

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 90%;
  margin-bottom: 30px;
  padding: 24px;
  box-shadow: 0 8px 12px 0 hsla(180,5%,92%,.16),0 2px 8px 0 hsla(0,0%,0%,.08);
  border-radius: 12px;
  line-height: 1.4;

  h2 {
    font-size: 1.2rem;
    color: hsl(192, 100%, 9%);
    margin-bottom: 14px;
  }

  p {
    font-size: 0.9rem;
    color: hsl(208, 11%, 55%);
  }
`;

export const Box = styled(Card)`
  width: 95%;
  height: 160px;
  margin-bottom: 0;
  padding: 26px 0;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0 -8px 12px 0 hsla(180,5%,92%,.16),0 -2px 8px 0 hsla(0,0%,0%,.08);
  -moz-transform: translate(0px, 60px);
  -webkit-transform: translate(0px, 60px);
  -o-transform: translate(0px, 60px);
  -ms-transform: translate(0px, 60px);
  transform: translate(0px, 60px);

  a {
    width: 60%;
    padding: 12px 0;
    margin: 0 auto;
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
`;

export const ContactSection = styled(CardSection)`
  background-color: hsl(192, 100%, 9%);
  color: hsl(193, 100%, 96%);
  text-align: left;
  margin-top: 0;
  padding: 0 10px;
  padding-top: 100px;
  

  img {
    width: 110px;
  }
`;
