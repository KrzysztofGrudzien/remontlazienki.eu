import React from "react"
import Main from "../components/Main/Main"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import Article from "../components/Article/Article"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import ArticleParagraph from "../components/ArticleParagraph/ArticleParagraph"
import CrossDecoration from "../components/CrossDecoration/CrossDecoration"

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
    <GalleryWrapper>
      <Image image={data.file.publicURL} alt="hero">
        <CrossDecoration type="right-top-fix" />
        <CrossDecoration type="right-bottom-fix" />
        <ButtonGallery prev>&#10094;</ButtonGallery>
        <ButtonGallery>&#10095;</ButtonGallery>
      </Image>
      <Button type="gallery" />
    </GalleryWrapper>
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
