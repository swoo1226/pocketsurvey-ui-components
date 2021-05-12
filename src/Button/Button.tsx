import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div<{
  backgroundColor: string
  hoverBackgroundColor: string
  disabled: boolean
}>`
  width: fit-content;
  padding: 10px 28px;
  background-color: ${props =>
    props.disabled ? "#dfdedd" : props.backgroundColor};
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
}

function Button({
  children,
  onClick,
  theme,
  disabled,
  className,
}: ButtonType): JSX.Element {
  function switchTheme(): {
    backgroundColor: string
    hoverBackgroundColor: string
    } {
    switch (theme) {
    case "primary":
      return {
        backgroundColor: "#FAC62D",
        hoverBackgroundColor: "#F0BD05",
      }
    case "secondary":
      return {
        backgroundColor: "#E9E1D5",
        hoverBackgroundColor: "#E3D9CA",
      }
    case "tertiary":
      return {
        backgroundColor: "#F0F0F0",
        hoverBackgroundColor: "#EBEBEB",
      }
    default:
      return {
        backgroundColor: "#FAC62D",
        hoverBackgroundColor: "#F0BD05",
      }
    }
  }

  const { backgroundColor, hoverBackgroundColor } = switchTheme()

  return (
    <ButtonContainer
      onClick={disabled ? undefined : onClick}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
