import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../styles/globalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
