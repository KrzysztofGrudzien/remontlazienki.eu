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
import img1 from "../assets/images/hero.jpg"
import img2 from "../assets/images/hero2.jpg"

const GalleryWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
  width: 50%;
`
const Image = styled.div`
align-items: center;
  /* background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; */
  background-color: ${({ theme }) => theme.colors.grey50};
  display: flex;
  height: 60%;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  
  .slide {
    height: 100%;
    min-width: 100%;
    transition: all .3s ease-in-out;  
  }
`

const ButtonGallery = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey200};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.mml};
  height: 50px;
  position: absolute;
  top: calc(50% - 50px);
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
function Img({ src }) {
  let imgStyles = {
    width: "auto",
    height: 100 + "%",
  }
  return <img src={src} alt="slide image" style={imgStyles} />
}
const AboutPage = () => {
  const sliders = [
    <Img src={img1} />,
    <Img src={img2} />,
    <Img src={img1} />,
    <Img src={img2} />,
    <Img src={img1} />,
  ]
  const [posX, setPosX] = useState(0)

  const slideLeft = () => {
    posX === 0 ? setPosX(-100 * (sliders.length - 1)) : setPosX(posX + 100)
    console.log(posX)
  }

  const slideRight = () => {
    posX === -100 * (sliders.length - 1) ? setPosX(0) : setPosX(posX - 100)
    console.log(posX)
  }

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
        <Image>
          {sliders.map((slide, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${posX}%) ` }}
              >
                {" "}
                {slide}
              </div>
            )
          })}

          {/* {counter > 11 || counter < 0 ? (
          <Image
            image={data.allGalleryYaml.nodes[0].images[0].image.publicURL}
            alt="hero"
          >
            <CrossDecoration type="right-top-fix" />
            <CrossDecoration type="right-bottom-fix" />
            <ButtonGallery prev onClick={() => setCounter(11)}>
              &#10094;
            </ButtonGallery>
            <ButtonGallery onClick={() => setCounter(0)}>
              &#10095;
            </ButtonGallery>
          </Image>
        ) : (
          <Image
            image={data.allGalleryYaml.nodes[0].images[counter].image.publicURL}
            alt="hero"
          >
            <CrossDecoration type="right-top-fix" />
            <CrossDecoration type="right-bottom-fix" />
            <ButtonGallery prev onClick={() => setCounter(counter - 1)}>
              &#10094;
            </ButtonGallery>
            <ButtonGallery onClick={() => setCounter(counter + 1)}>
              &#10095;
            </ButtonGallery>
          </Image>
        )} */}
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
