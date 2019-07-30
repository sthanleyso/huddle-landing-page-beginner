import styled from "styled-components"

import bgMobile from "../images/bg-hero-mobile.svg"

export const MainHeader = styled.header`
  width: 100%;
  background: transparent;
  overflow: hidden;
  position: absolute;
  top: 0;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 72px;
  padding: 0 20px;

  img {
    width: 100px;
  }

  a {
    width: 110px;
    padding: 6px 0;
    text-align: center;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    color: hsl(192, 100%, 9%);
    box-shadow: 0 8px 12px 0 hsla(180, 5%, 92%, 0.16),
      0 2px 8px 0 hsla(0, 0%, 0%, 0.08);
    transition: 0.2s;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 0;
  width: 100%;
  padding: 32px 24px;
  background-image: url(${bgMobile});
  background-color: hsl(193, 100%, 96%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: hsl(192, 100%, 9%);
  line-height: 1.4;

  h1 {
    margin-top: 124px;
    margin-bottom: 24px;
    font-size: 1.5rem;
  }

  p {
    padding: 0 8px;
    margin-bottom: 32px;
    font-size: 1rem;
  }

  a {
    width: 232px;
    padding: 11px 0;
    margin-bottom: 48px;
    text-align: center;
    border-radius: 20px;
    font-size: 0.75rem;
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
    max-width: 360px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2rem;
      padding: 0 24px;
    }

    p {
      font-size: 1.2rem;
    }

    img {
      max-width: 480px;
    }
  }
`

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-basis: 0;
  margin-top: 50px;
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 0;
  width: 90%;
  margin-bottom: 30px;
  padding: 42px 32px;
  box-shadow: 0 8px 12px 0 hsla(180, 5%, 92%, 0.16),
    0 2px 8px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 12px;
  line-height: 1.4;

  img {
    max-width: 480px;
    margin-bottom: 42px;
  }

  h2 {
    font-size: 1.2rem;
    color: hsl(192, 100%, 9%);
    margin-bottom: 14px;
  }

  p {
    font-size: 0.9rem;
    color: hsl(208, 11%, 55%);
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`

export const Box = styled(Card)`
  width: 95%;
  margin-bottom: 0;
  padding: 42px 0;
  background-color: #ffffff;
  box-shadow: 0 -8px 12px 0 hsla(180, 5%, 92%, 0.16),
    0 -2px 8px 0 hsla(0, 0%, 0%, 0.08);
  -moz-transform: translate(0px, 60px);
  -webkit-transform: translate(0px, 60px);
  -o-transform: translate(0px, 60px);
  -ms-transform: translate(0px, 60px);
  transform: translate(0px, 60px);

  h2 {
    font-size: 1rem;
    margin-bottom: 24px;
  }

  a {
    width: 210px;
    padding: 12px 0;
    border-radius: 20px;
    font-size: 0.6rem;
    font-weight: 700;
    background-color: hsl(322, 100%, 66%);
    color: hsl(193, 100%, 96%);
    transition: 0.2s;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }

  @media (min-width: 480px) {
    max-width: 500px;

    h2 {
      font-size: 1.2rem;
    }

    a {
      width: 256px;
      padding: 16px 0;
      font-size: 0.65rem;
      border-radius: 24px;
    }
  }
`

export const ContactSection = styled(CardSection)`
  align-items: flex-start;
  background-color: hsl(192, 100%, 9%);
  color: hsl(193, 100%, 96%);
  margin-top: 0;
  padding: 120px 10px 50px 10px;
  text-align: left;

  img {
    width: 156px;
    margin-bottom: 20px;
  }

  > p {
    align-self: center;
    font-size: 0.65rem;
    font-family: var(--poppins);
  }

  a {
    color: #ffffff;
  }
`

export const ContactBox = styled.article`
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-basis: 0;
    margin-bottom: 20px;

    img {
      width: 18px;
      margin-right: 16px;
      margin-bottom: 0;
    }

    p {
      flex: 1;
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }

  div:last-child > img {
    margin-top: 4px;
  }
`

export const Menu = styled.nav`
  margin-bottom: 40px;

  li {
    margin-bottom: 20px;

    a {
      font-size: 1rem;
    }
  }
`

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;

  li:nth-child(1) {
    padding: 10px 13px;
  }

  li:nth-child(3) {
    padding: 10px 11px;
  }

  li {
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 50%;
  }
`
