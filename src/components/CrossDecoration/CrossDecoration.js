import React from "react"
import styled from "styled-components"

const CrossLeftTop = styled.span`
  display: inline-block;
  height: 30px;
  left: -14px;
  position: absolute;
  top: -15px;
  width: 30px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    left: calc(50% - 1px);
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    top: calc(50% - 1px);
    left: 0;
    position: absolute;
    width: 30px;
  }
`
const CrossRightTop = styled.span`
  display: inline-block;
  height: 30px;
  right: -16px;
  position: absolute;
  top: -15px;
  width: 30px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    left: calc(50% - 1px);
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    top: calc(50% - 1px);
    left: 0;
    position: absolute;
    width: 30px;
  }
`

const CrossRightBottom = styled.span`
  bottom: -15px;
  display: inline-block;
  height: 30px;
  position: absolute;
  right: -16px;
  width: 30px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    left: calc(50% - 1px);
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: calc(50% - 1px);
    width: 30px;
  }
`

const CrossLeftBottom = styled.span`
  bottom: -15px;
  display: inline-block;
  height: 30px;
  left: -16px;
  position: absolute;
  width: 30px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    left: calc(50% - 1px);
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: calc(50% - 1px);
    width: 30px;
  }
`
const CrossRightTopFix = styled.span`
  top: -15px;
  display: inline-block;
  height: 30px;
  right: 0;
  position: absolute;
  width: 15px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    right: 0;
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: calc(50% - 1px);
    width: 15px;
  }
`

const CrossRightBottomFix = styled.span`
  bottom: -15px;
  display: inline-block;
  height: 30px;
  right: 0;
  position: absolute;
  width: 15px;

  &::before {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 30px;
    right: 0;
    top: 0;
    position: absolute;
    width: 1px;
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.grey300};
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: calc(50% - 1px);
    width: 15px;
  }
`
const CrossDecoration = ({ type }) => {
  if (type === "left-top") {
    return <CrossLeftTop />
  } else if (type === "right-top") {
    return <CrossRightTop />
  } else if (type === "right-bottom") {
    return <CrossRightBottom />
  } else if (type === "left-bottom") {
    return <CrossLeftBottom />
  } else if (type === "right-top-fix") {
    return <CrossRightTopFix />
  } else {
    return <CrossRightBottomFix />
  }
}

export default CrossDecoration
