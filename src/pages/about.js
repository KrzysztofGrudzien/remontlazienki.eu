import React, { useState } from "react"
import Main from "../components/main"
import styled, { css } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import LinkNavigation from "../components/linkNavigation"
import Article from "../components/article"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import ArticleParagraph from "../components/articleParagraph"
import CrossDecoration from "../components/crossDecoration"
import ImgSlider from "../components/imgSlider"

const GalleryWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 20px;
  width: 50%;
`
const Image = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey50};
  display: flex;
  height: 60vh;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  .slide {
    height: 100%;
    min-width: 100%;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
`

const ButtonGallery = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey50};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.mml};
  height: 50px;
  position: absolute;
  transition: background-color 0.3s linear;
  right: 25px;
  width: 50px;

  &:hover {
    background-color: rgba(250, 250, 250, 0.2);
  }

  ${({ prev }) =>
    prev &&
    css`
      left: 25px;
    `}
`
const AboutPage = () => {
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

  const sliderImages = [
    ...data.allGalleryYaml.nodes[0].images.map(item => {
      return <ImgSlider src={item.image.publicURL} />
    }),
  ]
  const [posX, setPosX] = useState(0)

  const slideLeft = () => {
    posX === 0 ? setPosX(-100 * (sliderImages.length - 1)) : setPosX(posX + 100)
    console.log(posX)
  }

  const slideRight = () => {
    posX === -100 * (sliderImages.length - 1) ? setPosX(0) : setPosX(posX - 100)
    console.log(posX)
  }

  return (
    <Main color>
      <Article>
        <CrossDecoration type="left-top" />
        <CrossDecoration type="right-top" />
        <CrossDecoration type="right-bottom" />
        <CrossDecoration type="left-bottom" />
        <WelcomeParagraph type="about" />
        <WelcomeHeader type="about" />
        <ArticleParagraph type="about" />
        <LinkNavigation type="service" />
      </Article>
      <GalleryWrapper>
        <CrossDecoration type="right-top-fix" />
        <CrossDecoration type="right-bottom-fix" />
        <Image>
          {sliderImages.map((slide, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${posX}%) ` }}
              >
                {slide}
              </div>
            )
          })}
          <ButtonGallery prev onClick={slideLeft}>
            &#10094;
          </ButtonGallery>
          <ButtonGallery onClick={slideRight}>&#10095;</ButtonGallery>
        </Image>
        <LinkNavigation type="gallery" />
      </GalleryWrapper>
    </Main>
  )
}

export default AboutPage
