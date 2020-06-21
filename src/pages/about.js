import React from "react"
import Main from "../components/Main/Main"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

const ArticleDescription = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  padding: 20px;
  width: 50%;
`

const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 100%;
`

const WelcomeText = styled.p`
  font-size: 35px;
  font-weight: 600;
`

const WelcomeHeader = styled.h2`
  font-size: 52px;
  font-weight: 800;
`

const ArticleParagraph = styled.p`
  color: #8a8a8a;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
`

const InternalLink = styled(Link)`
  color: #8a8a8a;
  text-decoration: none;
  display: inline-block;
  padding: 10px 40px;
  width: 150px;
  text-align: center;
  border: solid 1px #8a8a8a;
  position: relative;
  transition: all 0.3s linear;

  &::before {
    position: absolute;
    content: "";
    width: 80%;
    height: 1px;
    right: -80px;
    top: 50%;
    background-color: #8a8a8a;
    transition: all 0.3s linear;
  }

  &:hover::before {
    width: 0;
    right: 0;
  }

  :hover {
    background-color: #8a8a8a;
    color: #f9f9f9;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  }
`

const AboutPage = ({ data }) => (
  <Main>
    <ArticleDescription>
      <WelcomeText>witaj na naszej stronie</WelcomeText>
      <WelcomeHeader>remontlazienki.eu</WelcomeHeader>
      <ArticleParagraph>
        Oferujemy usługi wykończeniowe łazienek. Idziemy z duchem czasu i wiemy,
        że od kilku lat nastał trend na tworzenie łazienek o nietuzinkowym
        wyglądzie, gdzie inwestor może stworzyć niesamowite i efektowne wnętrze
        sam czy korzystając z usług projektantów. W tak małych pomieszczeniach
        skupia się tak wiele detali, które tworzą piękną całość. Dlatego my
        wychodzimy naprzeciw potrzebom klienta. Jesteśmy w stanie wykonać każdą
        łazienkę. Współpracujemy z profesjonalnym projektantem, co umożliwia
        wizualizację projektu na życzenie klienta. Służymy pomocą w doborze,
        transporcie oraz wniesieniu materiałów. Liczne grono zadowolonych
        klientów to nasza najlepsza rekomendacja. Dokonujemy pomiarów i wycen
        gratis. Przedstawiamy portfolio na pierwszym spotkaniu żeby nie być
        gołosłownym. Jesteśmy fachowcami. Zapraszamy do współpracy!
      </ArticleParagraph>
      <InternalLink to="/services">usługi</InternalLink>
    </ArticleDescription>
    <Image image={data.file.publicURL} alt="hero" />
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
