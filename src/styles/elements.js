import { createGlobalStyle } from "styled-components"

export const Elements = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:600&display=swap");

  :root {
    --poppins: 'Poppins', sans-serif;
    --open-sans: 'Open Sans', sans-serif;
    --pink: hsl(322, 100%, 66%);
    --very-pale-cyan: hsl(193, 100%, 96%);
    --very-dark-cyan: hsl(192, 100%, 9%);
    --grayish-blue: hsl(208, 11%, 55%);
  }
  
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  nav,
  ul,
  li {
    list-style: none;
  }

  html,
  body {
    height: 100%;
    font-family: var(--open-sans);
    font-size: 18px;
    -webkit-font-smoothing: antialiased !important;
  }

  h1,
  h2 {
    font-family: var(--poppins);
    font-weight: 600;
  }

  img {
    width: 100%;
  }
`
