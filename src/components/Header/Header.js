import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
const NavigationWrapper = styled.nav`
  align-items: center;
  color: #202020;
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 400;
  height: 103px;
`

const LinkHeader = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`

const LinkHeaderColor = styled(LinkHeader)`
  color: #1078c9;
`
const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  a {
    color: #202020;
    font-weight: 600;
    text-decoration: none;
  }
`
const NavigationListItem = styled.li`
  font-size: 0.875rem;
  margin-right: 34px;
  text-transform: lowercase;
`
const Logo = styled.h1`
  color: #202020;
  font-size: 20px;
  font-weight: 600;
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
  siteTitle: PropTypes.string,
  siteTitleColor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `remont`,
  siteTitleColor: `lazienki.eu`,
}

export default Header
