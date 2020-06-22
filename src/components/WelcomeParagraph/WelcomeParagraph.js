import React from "react"
import styled from "styled-components"

const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mml};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 0;
`
const WelcomeParagraph = ({ type }) => {
  if (type === "about") {
    return <WelcomeText>witaj na naszej stronie</WelcomeText>
  } else {
    return <WelcomeText>aranżacja i wykończenie</WelcomeText>
  }
}

export default WelcomeParagraph
