import React from "react"
import styled from "styled-components"

const ArticleText = styled.p`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.8;
`
const ArticleParagraph = ({ type }) => {
  if (type === "about") {
    return (
      <ArticleText>
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
      </ArticleText>
    )
  } else {
    return (
      <ArticleText>
        Oferujemy usługi wykończeniowe łazienek. Idziemy z duchem czasu i wiemy,
        że od kilku lat nastał trend na tworzenie łazienek o nietuzinkowym
        wyglądzie, gdzie inwestor może stworzyć niesamowite i efektowne wnętrze
        sam czy korzystając z usług projektantów.
      </ArticleText>
    )
  }
}

export default ArticleParagraph
