import React from "react"
import styled from "styled-components"

const MainContent = styled.main`
  display: flex;
  width: 100%;
  height: 700px;
  background-color: #efefef;
`
const Main = ({ children }) => (
  <>
    <MainContent>{children}</MainContent>
  </>
)

export default Main
