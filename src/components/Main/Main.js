import React from "react"
import styled, { css } from "styled-components"

const MainContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 206px);

  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => theme.colors.grey100};
    `}
`
const Main = ({ children, color }) => (
  <>
    {color ? (
      <MainContent color>{children}</MainContent>
    ) : (
      <MainContent>{children}</MainContent>
    )}
  </>
)

export default Main
