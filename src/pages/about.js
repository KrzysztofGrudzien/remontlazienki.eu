import React from "react"
import Main from "../components/Main/Main"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import Article from "../components/Article/Article"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import ArticleParagraph from "../components/ArticleParagraph/ArticleParagraph"
import CrossDecoration from "../components/CrossDecoration/CrossDecoration"

const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 50%;
`
const AboutPage = ({ data }) => (
  <Main color>
    <Article>
      <CrossDecoration type="left-top" />
      <CrossDecoration type="right-top" />
      <CrossDecoration type="right-bottom" />
      <CrossDecoration type="left-bottom" />
      <WelcomeParagraph type="about" />
      <WelcomeHeader type="about" />
      <ArticleParagraph type="about" />
      <Button />
    </Article>
    <Image image={data.file.publicURL} alt="hero">
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="right-bottom-fix" />
    </Image>
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
