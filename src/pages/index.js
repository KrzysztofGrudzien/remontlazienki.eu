import React from "react"
import Main from "../components/main"
import styled from "styled-components"
import { graphql } from "gatsby"
import LinkNavigation from "../components/linkNavigation"
import Article from "../components/article"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import ArticleParagraph from "../components/articleParagraph"
import CrossDecoration from "../components/crossDecoration"
import { motion } from "framer-motion"

const ImageWrapper = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  position: relative;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
  height: 100%;
  width: 100%;
`

const IndexPage = ({ data }) => {
  const animateProps = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  }
  return (
    <Main color>
      <BoxWrapper>
        <Article>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="right-bottom" />
          <CrossDecoration type="left-bottom" />
          <motion.div
            animate="visible"
            initial="hidden"
            variants={animateProps}
            transition={{ duration: 0.7, times: [0, 0.2, 1] }}
          >
            <WelcomeParagraph />
            <WelcomeHeader />
            <ArticleParagraph />
            <LinkNavigation />
          </motion.div>
        </Article>
        <ImageWrapper image={data.file.publicURL} alt="hero">
          <CrossDecoration type="right-top-fix" />
          <CrossDecoration type="right-bottom-fix" />
        </ImageWrapper>
      </BoxWrapper>
    </Main>
  )
}

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      publicURL
    }
  }
`

export default IndexPage
