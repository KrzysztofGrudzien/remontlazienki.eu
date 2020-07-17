import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const InternalLink = styled(Link)`
  border: solid 1px ${({ theme }) => theme.colors.grey300};
  color: ${({ theme }) => theme.colors.grey300};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.open};
  padding: 10px 40px;
  position: relative;
  text-align: center;
  transition: all 0.3s linear;
  text-decoration: none;
  max-width: 150px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    position: absolute;
    right: -80px;
    @media (max-width: 850px) {
      left: -80px;
    }
    top: 50%;
    transition: all 0.3s linear;
    width: 80%;
  }

  &:hover::before {
    right: 0;
    @media (max-width: 850px) {
      left: 0;
    }
    width: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.grey300};
    box-shadow: ${({ theme }) => theme.shadow.primary};
    color: ${({ theme }) => theme.colors.grey50};
  }

  ${({ contact }) =>
    contact &&
    css`
      max-width: 220px;

      &::before {
        display: none;
        @media (max-width: 850px) {
          left: 0;
        }
        top: 50%;
        transition: all 0.3s linear;
        width: 80%;
      }
    `}
`

const LinkNavigation = ({ type }) => {
  if (type === "service") {
    return <InternalLink to="/services">usługi</InternalLink>
  } else if (type === "gallery") {
    return <InternalLink to="/gallery">galeria</InternalLink>
  } else if (type === "contact") {
    return <InternalLink to="/contact">kontakt</InternalLink>
  } else if (type === "contact-form") {
    return (
      <InternalLink to="/contact" contact>
        wypełnij formularz
      </InternalLink>
    )
  } else if (type === "load-more") {
    return <InternalLink>więcej</InternalLink>
  } else if (type === "send") {
    return <InternalLink>wyślij</InternalLink>
  } else {
    return <InternalLink to="/about">o nas</InternalLink>
  }
}

export default LinkNavigation
