import React from "react"
import styled from "styled-components"

const ArticleDescription = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.open};
  padding: 20px;
  position: relative;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }

  a {
    @media (max-width: 850px) {
      align-self: flex-end;
    }
  }

  h2 {
    @media (max-width: 850px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`
const Article = ({ children }) => (
  <ArticleDescription>{children}</ArticleDescription>
)

export default Article
