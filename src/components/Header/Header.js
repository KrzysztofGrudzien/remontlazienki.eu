import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily.open};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  height: 103px;
`

const LinkHeader = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  text-transform: uppercase;
`

const LinkHeaderColor = styled(LinkHeader)`
  color: ${({ theme }) => theme.colors.secondary};
`
const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-decoration: none;
  }
`
const NavigationListItem = styled.li`
  margin-right: 34px;
  margin-bottom: 0;
  text-transform: lowercase;

  &:last-child {
    margin-right: 20px;
  }
`
const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0;
  margin-left: 20px;
`

const Header = ({ siteTitle, siteTitleColor }) => (
  <NavigationWrapper>
    <Logo>
      <LinkHeader to="/">
        {siteTitle}
        <LinkHeaderColor>{siteTitleColor}</LinkHeaderColor>
      </LinkHeader>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/">home</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">o nas</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/services">usługi</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">galeria</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">kontakt</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteTitleColor: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: `remont`,
  siteTitleColor: `lazienki.eu`,
}

export default Header
