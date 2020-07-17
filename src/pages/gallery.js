import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import { useStaticQuery, graphql } from "gatsby"
import LinkNavigation from "../components/linkNavigation"

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

const ActionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  min-height: 260px;
  margin: 20px 0;
  position: relative;
  width: 100%;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const QuestionBox = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

const ContactBox = styled.article`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey50};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  @media (max-width: 850px) {
    padding-bottom: 10px;
    width: 100%;
  }
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
  return (
    <Main>
      <ImageWrapper
        image={
          data.allGalleryYaml.nodes[0].images[randomNumber].image.publicURL
        }
        alt="hero"
      >
        <WelcomeHeader type="about" />
        <WelcomeParagraph type="about-more" />
        <CrossDecoration type="left-top" />
        <CrossDecoration type="center-bottom" />
        <CrossDecoration type="right-top-fix" />
        <CrossDecoration type="left-bottom" />
        <CrossDecoration type="center-top" />
        <CrossDecoration type="right-bottom-fix" />
      </ImageWrapper>
      <GalleryWrapper>
        <WelcomeParagraph type="gallery" />
        <WelcomeHeader type="gallery" />
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
          <LinkNavigation type="contact-form" />
        </ContactBox>
      </ActionBox>
    </Main>
  )
}

export default GalleryPage
