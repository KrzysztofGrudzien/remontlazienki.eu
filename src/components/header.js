import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

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

const DesktopNavigationList = styled(motion.ul)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  position: relative;
  @media (max-width: 851px) {
    display: none;
  }
`

const MobileNavigationList = styled(motion.ul)`
  align-items: center;
  display: flex;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.grey50};
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  justify-content: space-evenly;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  @media (min-width: 850px) {
    display: none;
  }
`

const NavigationButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  margin-right: 20px;
  position: fixed;
  right: 0;
  width: 50px;
  z-index: 10000;

  span {
    background-color: ${({ theme }) => theme.colors.primary};
    display: block;
    height: 1px;
    position: relative;
    width: 30px;

    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      top: 8px;
      width: 100%;
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      bottom: 8px;
      width: 100%;
    }
  }

  @media (min-width: 850px) {
    display: none;
  }
`

const NavigationListItem = styled(motion.li)`
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

const Logo = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0;
  margin-left: 20px;
`

const Header = ({ siteTitleColor }) => {
  const [isOpen, setIsOpen] = useState(true)

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

  const animateHeaderProps = {
    hidden: { opacity: 1, scale: 1, x: 0 },
    hiddenLeft: { opacity: 0, scale: 0.8, x: 300 },
  }

  const animateNavigationProps = {
    initial: { x: -1000 },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: 1000,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const animateNavigationItemProps = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 100, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 100 },
      },
    },
  }

  return (
    <NavigationWrapper>
      <Logo
        animate="hidden"
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        variants={animateHeaderProps}
        transition={{ duration: 0.4, times: [0, 0.2, 1] }}
      >
        <LinkHeader to="/">
          {data.allSite.nodes[0].siteMetadata.title.substring(0, 6)}
          <LinkHeaderColor>{siteTitleColor}</LinkHeaderColor>
        </LinkHeader>
      </Logo>
      <AnimatePresence>
        <DesktopNavigationList
          animate="hidden"
          initial="hiddenLeft"
          variants={animateHeaderProps}
          transition={{ duration: 0.7, times: [0, 0.2, 1] }}
        >
          {data.allMenuYaml.nodes.map(link => (
            <NavigationListItem key={link.name}>
              <Link
                to={link.link}
                activeStyle={activeStyles}
                onClick={() => setIsOpen(isOpen)}
              >
                {link.name}
              </Link>
            </NavigationListItem>
          ))}
        </DesktopNavigationList>
      </AnimatePresence>
      <NavigationButton onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </NavigationButton>
      <MobileNavigationList
        animate={isOpen ? "closed" : "open"}
        initial="initial"
        variants={animateNavigationProps}
      >
        {data.allMenuYaml.nodes.map(link => (
          <NavigationListItem
            key={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={animateNavigationItemProps}
          >
            <Link
              to={link.link}
              activeStyle={activeStyles}
              onClick={() => setIsOpen(!isOpen)}
            >
              {link.name}
            </Link>
          </NavigationListItem>
        ))}
      </MobileNavigationList>
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
