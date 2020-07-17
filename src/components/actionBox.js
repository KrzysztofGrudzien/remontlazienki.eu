import React from "react"
import LinkNavigation from "../components/linkNavigation"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import { useStaticQuery, graphql } from "gatsby"

const CallAction = styled.div`
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
const ActionBox = () => {
  const data = useStaticQuery(graphql`
    {
      allServicesYaml {
        nodes {
          image {
            publicURL
          }
          title
          services
        }
      }
      file(name: { eq: "bricks" }) {
        publicURL
      }
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <CallAction>
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
    </CallAction>
  )
}

export default ActionBox
