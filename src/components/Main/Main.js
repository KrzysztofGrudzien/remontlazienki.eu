import React from "react"
import styled from "styled-components"

const MainContent = styled.main`
  background-color: ${({ theme }) => theme.colors.grey100};
  display: flex;
  height: calc(100vh - 206px);
`
const Main = ({ children }) => (
  <>
    <MainContent>{children}</MainContent>
  </>
)

export default Main
