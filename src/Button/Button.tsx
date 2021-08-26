import React from "react"
import styled from "styled-components"
import loadingSpinner from "../Icon/svg/loadingSpinner.svg"

const ButtonContainer = styled.div<{
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabled: boolean;
  isLoading?: boolean;
}>`
  width: fit-content;
  padding: 14px 28px;
  background-color: ${(props) =>
    props.disabled
      ? "#dfdedd"
      : props.isLoading
        ? "#FEF4CE"
        : props.backgroundColor};
  color: ${(props) =>
    props.disabled
      ? "#818282"
      : props.hoverBackgroundColor === "#F0F0F0"
        ? "#818282"
        : "#111111"};
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) =>
    props.disabled
      ? "#dfdedd"
      : props.isLoading
        ? "#FEF4CE"
        : props.hoverBackgroundColor};
  }
  .loadingSpinner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* margin: 0; */
    /* padding: 0; */
    img {
      width: calc(1.7 * 14px);
      height: calc(1.2 * 14px);
      -webkit-animation: spin 1s linear infinite;
      -moz-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`

type SizeType = "small" | "medium" | "big";
type ThemeType = "primary" | "secondary" | "tertiary" | "cancel";

export type ButtonType = {
  children: React.ReactNode;
  onClick: () => void;
  theme: ThemeType;
  disabled: boolean;
  className?: string;
  backgroundColor?: string;
  isLoading?: boolean;
  buttonRef?: React.RefObject<HTMLDivElement>;
};

function Button({
  children,
  onClick,
  theme,
  disabled,
  className,
  backgroundColor,
  isLoading,
  buttonRef,
}: ButtonType): JSX.Element {
  function switchTheme(): {
    innerBackgroundColor: string;
    innerHoverBackgroundColor: string;
    } {
    if (backgroundColor) {
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
    case "cancel":
      return {
        innerBackgroundColor: "#FFFFFF",
        innerHoverBackgroundColor: "#F0F0F0",
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
      isLoading={isLoading}
      ref={buttonRef}
    >
      {!disabled && isLoading ? (
        <div className="loadingSpinner">
          <img alt="loading" src={loadingSpinner} />
        </div>
      ) : (
        children
      )}
    </ButtonContainer>
  )
}

export default Button
