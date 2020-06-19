import React from "react"
import Header from "../components/Header/Header"
import GlobalStyle from "../styles/globalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
  </>
)

export default Layout
