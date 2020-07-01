import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import LinkNavigation from "../components/linkNavigation"
import { useStaticQuery, graphql } from "gatsby"

const ImageWrapper = styled.div`
  align-items: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.grey100};
  display: flex;
  flex-direction: column;
  height: 355px;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
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
  min-height: 600px;
  position: relative;
  transition: background-color 0.5s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey50};
  }

  & > span {
    transition: transform 0.3s ease-in-out;
  }

  &:hover > span {
    transform: rotate(90deg);
  }

  ul {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontFamily.open};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    list-style: none;
    margin-left: 10px;
    padding: 0;

    li {
      align-items: center;
      display: flex;
    }

    img {
      margin-right: 10px;
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

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allServicesYaml {
        nodes {
          image {
            relativePath
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
          {data.allServicesYaml.nodes.map(item => (
            <ArticleCard>
              <CrossDecoration type="left-top" />
              <CrossDecoration type="right-top" />
              <CrossDecoration type="left-bottom" />
              <CrossDecoration type="right-bottom" />
              <ArticleImage
                image={item.image.relativePath}
                alt="hero"
              ></ArticleImage>
              <ArticleHeader>{item.title}</ArticleHeader>
              <ul>
                {item.services.map(service => (
                  <li>
                    <img
                      src={data.allFile.edges.map(file => file.node.publicURL)}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </ArticleCard>
          ))}
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
          <LinkNavigation type="contact-form" />
        </ContactBox>
      </ActionBox>
    </Main>
  )
}

export default ServicesPage
