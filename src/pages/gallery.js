import React from "react"
import Main from "../components/Main/Main"
import WelcomeParagraph from "../components/WelcomeParagraph/WelcomeParagraph"
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/CrossDecoration/CrossDecoration"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"

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
  background-color: ${({ theme }) => theme.colors.white};
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
const GalleryPage = ({ data }) => (
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

export default GalleryPage
