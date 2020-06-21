import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../styles/globalStyles"
import { theme } from "../styles/themeStyles"
import { ThemeProvider } from "styled-components"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  </>
)

export default Layout
