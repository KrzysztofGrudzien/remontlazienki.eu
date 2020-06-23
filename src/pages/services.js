import React from "react"
import Main from "../components/Main/Main"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/CrossDecoration/CrossDecoration"

const ImageWrapper = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 355px;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`

const ArticleCards = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 20px;
`

const ArticleCard = styled.article`
  border: solid 1px ${({ theme }) => theme.colors.grey100};
  width: 100%;
  height: 534px;
  position: relative;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`

const ArticleImage = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 234px;
  width: 100%;
`

const ArticleHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 10px;
`

const ServicesPage = ({ data }) => (
  <Main>
    <ImageWrapper image={data.file.publicURL} alt="hero">
      <CrossDecoration type="left-top" />
      <CrossDecoration type="center-bottom" />
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="left-bottom" />
      <CrossDecoration type="center-top" />
      <CrossDecoration type="right-bottom-fix" />
    </ImageWrapper>
    <Article>
      <WelcomeParagraph type="gallery" />
      <WelcomeHeader type="gallery" />
      <ArticleCards>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
        <ArticleCard>
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
        </ArticleCard>
      </ArticleCards>
    </Article>
  </Main>
)

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      publicURL
    }
  }
`

export default ServicesPage
