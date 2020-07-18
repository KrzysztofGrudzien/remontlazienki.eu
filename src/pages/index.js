import React from "react"
import Main from "../components/main"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
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
  height: calc(100% - 206px);
  min-height: calc(100vh - 206px);
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allGalleryYaml {
        nodes {
          images {
            image {
              publicURL
            }
          }
        }
      }
    }
  `)

  const animateProps = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  }

  const randomNumber = Math.floor(
    Math.random() * data.allGalleryYaml.nodes[0].images.length
  )

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
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
          <ImageWrapper
            image={
              data.allGalleryYaml.nodes[0].images[randomNumber].image.publicURL
            }
            alt="hero image"
          >
            <CrossDecoration type="right-top-fix" />
            <CrossDecoration type="right-bottom-fix" />
          </ImageWrapper>
        </BoxWrapper>
      </Main>
    </motion.div>
  )
}

export default IndexPage
