import React from "react"
import styled from "styled-components"

const WelcomeText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
const WelcomeHeader = ({ type }) => {
  if (type === "about") {
    return <WelcomeText>remontlazienki.eu</WelcomeText>
  } else if (type === "service") {
    return <WelcomeText>nasze usługi</WelcomeText>
  } else if (type === "gallery") {
    return <WelcomeText>nasza galeria</WelcomeText>
  } else if (type === "contact") {
    return <WelcomeText>kontakt z nami</WelcomeText>
  } else {
    return <WelcomeText>łazienek</WelcomeText>
  }
}

export default WelcomeHeader
