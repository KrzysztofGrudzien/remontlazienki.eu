import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import ActionBox from "../components/actionBox"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

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
  @media (max-width: 850px) {
    height: 255px;
  }
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
  @media (max-width: 1200px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

const ServicesPage = () => {
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

  const animateProps = {
    visible: { opacity: 1, x: 0 },
    visibleTop: { opacity: 1, y: 0 },
    hidden: { opacity: 0, x: -200 },
    hiddenTop: { opacity: 0, y: -200 },
  }
  return (
    <Main>
      <ImageWrapper image={data.file.publicURL} alt="hero">
        <motion.div
          animate="visibleTop"
          initial="hiddenTop"
          variants={animateProps}
          transition={{ duration: 0.7, times: [0, 0.2, 1] }}
        >
          <WelcomeHeader type="about" />
          <WelcomeParagraph type="about-more" />
        </motion.div>
        <CrossDecoration type="left-top" />
        <CrossDecoration type="center-bottom" />
        <CrossDecoration type="right-top-fix" />
        <CrossDecoration type="left-bottom" />
        <CrossDecoration type="center-top" />
        <CrossDecoration type="right-bottom-fix" />
      </ImageWrapper>
      <Article>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={animateProps}
          transition={{ duration: 0.7, times: [0, 0.2, 1] }}
        >
          <WelcomeParagraph type="service" />
          <WelcomeHeader type="service" />
        </motion.div>
        <ArticleCards>
          {data.allServicesYaml.nodes.map(item => (
            <ArticleCard>
              <CrossDecoration type="left-top" />
              <CrossDecoration type="right-top" />
              <CrossDecoration type="left-bottom" />
              <CrossDecoration type="right-bottom" />
              <ArticleImage image={item.image.publicURL} alt="hero" />
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
      <ActionBox />
    </Main>
  )
}

export default ServicesPage
