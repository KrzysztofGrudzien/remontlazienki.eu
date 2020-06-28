import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const FooterDescription = styled.footer`
  color: ${({ theme }) => theme.colors.grey200};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: ${({ theme }) => theme.fontFamily.open};
  height: 103px;
  line-height: 173px;
  text-align: center;
`

const Footer = ({ textFooter, textAuthor }) => (
  <FooterDescription>
    {textFooter} {textAuthor}
  </FooterDescription>
)

Footer.propTypes = {
  textFooter: PropTypes.string.isRequired,
  textAuthor: PropTypes.string,
}

Footer.defaultProps = {
  textFooter: `Wszelkie prawa zastrzeżone przez RemontLazienki.eu 2020©. `,
  textAuthor: `Designed by Krzysztof Grudzień`,
}

export default Footer
