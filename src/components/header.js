import React from "react"

import { MainHeader, HeaderContent } from "../styles"

import logo from "../images/logo.svg"

const Header = () => {
  return (
    <MainHeader>
      <HeaderContent>
        <img src={logo} alt="Brand"/>
        <a href="#!">Try It Free</a>
      </HeaderContent>
    </MainHeader>
  )
}

export default Header
