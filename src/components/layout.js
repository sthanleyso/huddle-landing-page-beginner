import React from "react"

import Header from "./header"

import { Reset } from "../styles/reset"
import { Elements } from "../styles/elements"
import { MainContent } from "../styles"

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <Elements />
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout
