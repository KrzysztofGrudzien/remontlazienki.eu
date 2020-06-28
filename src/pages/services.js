import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import Button from "../components/button"
import { graphql } from "gatsby"

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
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 600px;
  position: relative;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey50};
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

const ActionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 260px;
  margin: 20px 0;
  position: relative;
  width: 100%;
`

const QuestionBox = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 50%;
`

const ContactBox = styled.article`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey50};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`

const QuestionBoxTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 45px;
  padding-top: 60px;
  text-transform: uppercase;
  text-align: center;
`

const ContactBoxTitle = styled(QuestionBoxTitle)`
  color: ${({ theme }) => theme.colors.primary};
`

const ServicesPage = ({ data }) => (
  <Main>
    <ImageWrapper image={data.file.publicURL} alt="hero">
      <WelcomeHeader type="about" />
      <WelcomeParagraph type="about-more" />
      <CrossDecoration type="left-top" />
      <CrossDecoration type="center-bottom" />
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="left-bottom" />
      <CrossDecoration type="center-top" />
      <CrossDecoration type="right-bottom-fix" />
    </ImageWrapper>
    <Article>
      <WelcomeParagraph type="service" />
      <WelcomeHeader type="service" />
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
    <ActionBox>
      <CrossDecoration type="left-top" />
      <CrossDecoration type="center-bottom" />
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="left-bottom" />
      <CrossDecoration type="center-top" />
      <CrossDecoration type="right-bottom-fix" />
      <QuestionBox image={data.file.publicURL} alt="hero">
        <QuestionBoxTitle>
          Jesteś zainteresowany <br />
          współpracą?
        </QuestionBoxTitle>
      </QuestionBox>
      <ContactBox>
        <ContactBoxTitle>
          skontaktuj się <br /> z nami
        </ContactBoxTitle>
        <Button type="contact-form" />
      </ContactBox>
    </ActionBox>
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
