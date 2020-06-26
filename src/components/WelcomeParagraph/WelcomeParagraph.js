import React from "react"
import styled from "styled-components"

const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mml};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontFamily.open};
  line-height: 0;
`
const WelcomeParagraph = ({ type }) => {
  if (type === "about") {
    return <WelcomeText>witaj na naszej stronie</WelcomeText>
  } else if (type === "service") {
    return <WelcomeText>co możemy dla państwa zrobić?</WelcomeText>
  } else if (type === "gallery") {
    return <WelcomeText>ostatnio zrealizowane projekty</WelcomeText>
  } else if (type === "about-more") {
    return <WelcomeText>aranżacja i wykończenie łazienek</WelcomeText>
  } else if (type === "contact") {
    return <WelcomeText>wypełnij formularz kontaktowy</WelcomeText>
  } else if (type === "company-desc") {
    return <WelcomeText>usługi remontowo-wykończeniowe łazienek</WelcomeText>
  } else if (type === "author") {
    return <WelcomeText>główny wykonawca</WelcomeText>
  } else {
    return <WelcomeText>aranżacja i wykończenie</WelcomeText>
  }
}

export default WelcomeParagraph
