import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import { useStaticQuery, graphql } from "gatsby"
import LinkNavigation from "../components/linkNavigation"
import ActionBox from "../components/actionBox"
import { motion } from "framer-motion"

const ImageWrapper = styled.div`
  align-items: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.grey100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 355px;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  @media (max-width: 850px) {
    height: 255px;
  }
`

const GalleryWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  width: 100%;

  .container {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey50};
    display: flex;
    justify-content: center;
    height: 80px;
    margin: 40px 0 0 0;
  }
`

const GalleryCards = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 20px;
  z-index: 100;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const GalleryCard = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  filter: grayscale();
  position: relative;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }

  & > span {
    transition: transform 0.3s ease-in-out;
  }

  &:hover > span {
    transform: rotate(90deg);
  }
`

const GalleryPage = () => {
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
      file(name: { eq: "bricks" }) {
        publicURL
      }
    }
  `)

  const randomNumber = Math.floor(
    Math.random() * data.allGalleryYaml.nodes[0].images.length
  )

  const animateProps = {
    visible: { opacity: 1, x: 0 },
    visibleTop: { opacity: 1, y: 0 },
    hidden: { opacity: 0, x: -200 },
    hiddenTop: { opacity: 0, y: -200 },
  }
  return (
    <Main>
      <ImageWrapper
        image={
          data.allGalleryYaml.nodes[0].images[randomNumber].image.publicURL
        }
        alt="hero"
      >
        <motion.div
          animate="visibleTop"
          initial="hiddenTop"
          variants={animateProps}
          transition={{ duration: 0.7, times: [0, 0.2, 1] }}
        >
          <WelcomeHeader type="about" />
          <WelcomeParagraph type="about-more" />
        </motion.div>
        <CrossDecoration type="left-top" />
        <CrossDecoration type="center-bottom" />
        <CrossDecoration type="right-top-fix" />
        <CrossDecoration type="left-bottom" />
        <CrossDecoration type="center-top" />
        <CrossDecoration type="right-bottom-fix" />
      </ImageWrapper>
      <GalleryWrapper>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={animateProps}
          transition={{ duration: 0.7, times: [0, 0.2, 1] }}
        >
          <WelcomeParagraph type="gallery" />
          <WelcomeHeader type="gallery" />
        </motion.div>
        <GalleryCards>
          {data.allGalleryYaml.nodes[0].images.map(item => (
            <GalleryCard image={item.image.publicURL}>
              <CrossDecoration type="left-top" />
              <CrossDecoration type="right-top" />
              <CrossDecoration type="left-bottom" />
              <CrossDecoration type="right-bottom" />
            </GalleryCard>
          ))}
        </GalleryCards>
        <div className="container">
          <LinkNavigation type="load-more" />
        </div>
      </GalleryWrapper>
      <ActionBox />
    </Main>
  )
}

export default GalleryPage
