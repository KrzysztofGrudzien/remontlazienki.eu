import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import GlobalStyle from "../styles/globalStyles"
import { theme } from "../styles/themeStyles"
import styled, { ThemeProvider } from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-rows: 103px 1fr 103px;
  grid-template-columns: 1fr;
`
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  </>
)

export default Layout
