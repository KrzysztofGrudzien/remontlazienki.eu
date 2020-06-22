import React from "react"
import Main from "../components/Main/Main"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/Button/Button"
import Article from "../components/Article/Article"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import ArticleParagraph from "../components/ArticleParagraph/ArticleParagraph"

const Image = styled(Img)`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 50%;
  height: 100%;
`
const IndexPage = ({ data }) => (
  <Main>
    <Article>
      <WelcomeParagraph />
      <WelcomeHeader />
      <ArticleParagraph />
      <Button />
    </Article>
    <Image fluid={data.file.childImageSharp.fluid} alt="zdjęcie łazienki" />
  </Main>
)

export default IndexPage

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
