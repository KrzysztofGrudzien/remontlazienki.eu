import React from "react"
import styled from "styled-components"

const WelcomeText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const WelcomeHeader = ({ type }) => {
  if (type === "about") {
    return <WelcomeText>remontlazienek.eu</WelcomeText>
  } else {
    return <WelcomeText>łazienek</WelcomeText>
  }
}

export default WelcomeHeader
