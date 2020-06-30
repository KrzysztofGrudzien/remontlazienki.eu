import { Link, useStaticQuery, graphql } from "gatsby"
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
  margin: 0 20px 0 0;

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
const Header = ({ siteTitleColor }) => {
  const data = useStaticQuery(graphql`
    {
      allMenuYaml {
        nodes {
          link
          name
        }
      }
      allSite {
        nodes {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  `)

  return (
    <NavigationWrapper>
      <Logo>
        <LinkHeader to="/">
          {data.allSite.nodes[0].siteMetadata.title.substring(0, 6)}
          <LinkHeaderColor>{siteTitleColor}</LinkHeaderColor>
        </LinkHeader>
      </Logo>
      <NavigationList>
        {data.allMenuYaml.nodes.map(link => (
          <NavigationListItem key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </NavigationListItem>
        ))}
        <label>
          <select name="language" id="language">
            <option value="pl">PL</option>
            <option value="en">EN</option>
          </select>
        </label>
      </NavigationList>
    </NavigationWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteTitleColor: PropTypes.string.isRequired,
  menuLinks: PropTypes.exact({
    name: PropTypes.string,
    link: PropTypes.number,
  }),
}

Header.defaultProps = {
  siteTitle: `remont`,
  siteTitleColor: `lazienki.eu`,
}

export default Header
