import React from "react"
import styled, { css } from "styled-components"

const MainContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 206px);
  min-height: calc(100vh - 206px);
  @media (max-width: 850px) {
    height: 100%;
  }
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => theme.colors.grey100};
    `};
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
