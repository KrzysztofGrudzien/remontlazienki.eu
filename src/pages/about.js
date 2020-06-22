import React from "react"
import Main from "../components/Main/Main"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import Article from "../components/Article/Article"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import ArticleParagraph from "../components/ArticleParagraph/ArticleParagraph"

const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 100%;
`
const AboutPage = ({ data }) => (
  <Main>
    <Article>
      <WelcomeParagraph type="about" />
      <WelcomeHeader type="about" />
      <ArticleParagraph type="about" />
      <Button />
    </Article>
    <Image image={data.file.publicURL} alt="hero" />
  </Main>
)

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      publicURL
    }
  }
`

export default AboutPage
