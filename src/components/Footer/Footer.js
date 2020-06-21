import React from "react"
import styled from "styled-components"

const FooterDescription = styled.footer`
  color: #b6b6b6;
  width: 100%;
  height: 103px;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  padding-top: 90px;
`

const Footer = () => (
  <FooterDescription>
    Wszelkie prawa zastrzeżone przez RemontLazienki.eu 2020©
  </FooterDescription>
)

export default Footer
