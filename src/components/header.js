import React from "react"
import { Link } from "gatsby"

import { MainHeader, HeaderContent } from "../styles"

import logo from "../images/logo.svg"

const Header = () => {
  return (
    <MainHeader>
      <HeaderContent>
        <img src={logo} alt="Brand"/>
        <Link to="#!">Try It Free</Link>
      </HeaderContent>
    </MainHeader>
  )
}

export default Header
