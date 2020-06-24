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
import CrossDecoration from "../components/CrossDecoration/CrossDecoration"

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`

const Image = styled(Img)`
  height: 100%;
`
const IndexPage = ({ data }) => (
  <Main color>
    <Article>
      <CrossDecoration type="left-top" />
      <CrossDecoration type="right-top" />
      <CrossDecoration type="right-bottom" />
      <CrossDecoration type="left-bottom" />
      <WelcomeParagraph />
      <WelcomeHeader />
      <ArticleParagraph />
      <Button />
    </Article>
    <ImageWrapper>
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="right-bottom-fix" />
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="zdjęcie łazienki"
      ></Image>
    </ImageWrapper>
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
