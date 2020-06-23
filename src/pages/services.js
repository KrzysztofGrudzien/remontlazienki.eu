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
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 20px;
`

const ArticleCard = styled.article`
  border: solid 1px ${({ theme }) => theme.colors.grey100};
  width: 100%;
  min-height: 600px;
  position: relative;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey100};
  }

  ul {
    list-style: none;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontFamily.open};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    li {
      background-image: url("../images/tick-icon.svg");
    }
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
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>glazura i terakota</ArticleHeader>
          <ul>
            <li>szlifowanie narozników</li>
            <li>układanie glazury i terakoty</li>
            <li>układanie gresu</li>
          </ul>
        </ArticleCard>
        <ArticleCard>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>prace wykończeniowe</ArticleHeader>
          <ul>
            <li>układanie paneli podłogowych</li>
            <li>malowanie</li>
            <li>montaż armatury wykończeniowej</li>
            <li>zabudowa karton-gips</li>
            <li>zabezpieczenie miejsc pracy</li>
          </ul>
        </ArticleCard>
        <ArticleCard>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>armatura łazienkowa</ArticleHeader>
          <ul>
            <li>montaż armatury łazienkowej</li>
            <li>dobór materiałów</li>
            <li>profesjonalne doradztwo</li>
          </ul>
        </ArticleCard>
        <ArticleCard>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>aranżacja projektu</ArticleHeader>
          <ul>
            <li>prace pod projekt</li>
            <li>współpraca z biurem projektowym</li>
            <li>profesjonalne doradztwo w doborze materiałów</li>
          </ul>
        </ArticleCard>
        <ArticleCard>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>elektryka i oświetlenie</ArticleHeader>
          <ul>
            <li>montaż skrzyń bezpiecznikowych</li>
            <li>montaż oświetlenia</li>
            <li>profesjonalne doradztwo w doborze materiałów</li>
          </ul>
        </ArticleCard>
        <ArticleCard>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="right-top" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="right-bottom" />
          <ArticleImage image={data.file.publicURL} alt="hero"></ArticleImage>
          <ArticleHeader>prace hydrauliczne</ArticleHeader>
          <ul>
            <li>podłączanie rur wodno-kanalizacyjnych</li>
            <li>wykuwanie bruzd i punktów</li>
            <li>inne prace hydrauliczne</li>
          </ul>
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
