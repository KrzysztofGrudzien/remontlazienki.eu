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
const activeStyles = {
  borderBottom: "1px solid hsl(0,0%,12.5%)",
}

const LinkHeaderColor = styled(LinkHeader)`
  color: ${({ theme }) => theme.colors.secondary};
`
const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 20px 0 0;

  @media (max-width: 850px) {
    background-color: ${({ theme }) => theme.colors.grey50};
    flex-direction: column;
    height: calc(100vh - 103px);
    justify-content: space-evenly;
    position: fixed;
    top: 103px;
    width: 100%;
    z-index: 1000;
  }
`

const NavigationButton = styled.button`
  border: none;
  border-top: solid 1px ${({ theme }) => theme.colors.primary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.primary};
  background: none;
  cursor: pointer;
  height: 19px;
  margin-right: 20px;
  position: relative;
  width: 30px;

  &::before {
    background-color: ${({ theme }) => theme.colors.primary};
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 8px;
    width: 30px;
  }

  @media (min-width: 851px) {
    display: none;
  }
`

const NavigationListItem = styled.li`
  margin-right: 34px;
  margin-bottom: 0;
  text-transform: lowercase;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    position: relative;
    text-decoration: none;

    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
      bottom: -3px;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      transition: width 0.3s ease-in-out;
      width: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-right: 0;
  }

  &:last-child {
    margin-right: 20px;
  }

  a {
    @media (max-width: 850px) {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
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
      <NavigationButton />
      <NavigationList>
        {data.allMenuYaml.nodes.map(link => (
          <NavigationListItem key={link.name}>
            <Link to={link.link} activeStyle={activeStyles}>
              {link.name}
            </Link>
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
}

Header.defaultProps = {
  siteTitle: `remont`,
  siteTitleColor: `lazienki.eu`,
}

export default Header
