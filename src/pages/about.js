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

const GalleryWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  width: 50%;
`
const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 60%;
  margin: 20px 0;
  width: 100%;
`

const ButtonGallery = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey50};
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
const AboutPage = () => {
  const [counter, setCounter] = useState(0)
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
        {counter > 11 || counter < 0 ? (
          <Image
            image={data.allGalleryYaml.nodes[0].images[0].image.publicURL}
            alt="hero"
          >
            <CrossDecoration type="right-top-fix" />
            <CrossDecoration type="right-bottom-fix" />
            <ButtonGallery prev onClick={() => setCounter(11)}>
              &#10094;
            </ButtonGallery>
            <ButtonGallery onClick={() => setCounter(1)}>
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
        )}

        <LinkNavigation type="gallery" />
      </GalleryWrapper>
    </Main>
  )
}

export default AboutPage
