import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div<{
  backgroundColor: string
  hoverBackgroundColor: string
  disabled: boolean
}>`
  width: fit-content;
  padding: 14px 28px;
  background-color: ${props =>
    props.disabled ? "#dfdedd" : props.backgroundColor};
  color: ${props =>
    props.disabled ? "#818282" : "#111111"};
  border-radius: 3px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${props =>
    props.disabled ? "#dfdedd" : props.hoverBackgroundColor};
  }
`

type SizeType = "small" | "medium" | "big"
type ThemeType = "primary" | "secondary" | "tertiary"

export type ButtonType = {
  children: React.ReactNode
  onClick: () => void
  theme: ThemeType
  disabled: boolean
  className?: string
  backgroundColor?: string
}

function Button({
  children,
  onClick,
  theme,
  disabled,
  className,
  backgroundColor
}: ButtonType): JSX.Element {
  function switchTheme(): {
    innerBackgroundColor: string
    innerHoverBackgroundColor: string
    } {
    if(backgroundColor){
      return {
        innerBackgroundColor: backgroundColor,
        innerHoverBackgroundColor: backgroundColor,
      }
    }
    switch (theme) {
    case "primary":
      return {
        innerBackgroundColor: "#FAC62D",
        innerHoverBackgroundColor: "#F0BD05",
      }
    case "secondary":
      return {
        innerBackgroundColor: "#E9E1D5",
        innerHoverBackgroundColor: "#E3D9CA",
      }
    case "tertiary":
      return {
        innerBackgroundColor: "#F0F0F0",
        innerHoverBackgroundColor: "#EBEBEB",
      }
    default:
      return {
        innerBackgroundColor: "#FAC62D",
        innerHoverBackgroundColor: "#F0BD05",
      }
    }
  }

  const { innerBackgroundColor, innerHoverBackgroundColor } = switchTheme()

  return (
    <ButtonContainer
      onClick={disabled ? undefined : onClick}
      backgroundColor={innerBackgroundColor}
      hoverBackgroundColor={innerHoverBackgroundColor}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
