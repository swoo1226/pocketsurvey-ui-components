import React from "react"
import styled from "styled-components"

import Icon, { IconType } from "../Icon/Icon"
import Email from "./subtype/email"
import Account from "./subtype/account"
import Phone from "./subtype/phone"
import Number from "./subtype/number"
import URL from "./subtype/url"

type inputModeType = "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"

const InputContainer = styled.div``
const InputBox = styled.div<{
  width: number;
  disabled: boolean;
  mode: "line" | "basic";
  borderColor: string;
  fullWidthMode?: boolean;
}>`
  padding: 7px
    ${(props) =>
    props.fullWidthMode ? `${300 * 0.05}` : `${props.width * 0.05}`}px;

  ${(props) =>
    `${
      props.mode == "line"
        ? `
                border-bottom: 1px solid #dfdedd;
            `
        : `
                border: 1px solid #dfdedd; 
            `
    }`}
  &:hover {
    ${(props) =>
    !props.disabled
      ? props.mode == "line"
        ? `border-bottom: 1px solid ${
          props.disabled ? "#dfdedd" : props.borderColor
        }`
        : `border: 1px solid ${
          props.disabled ? "#dfdedd" : props.borderColor
        }`
      : ""}
  }
  &:focus-within {
    ${(props) =>
    !props.disabled
      ? props.mode == "line"
        ? `border-bottom: 1px solid ${
          props.disabled ? "#dfdedd" : props.borderColor
        }`
        : `border: 1px solid ${
          props.disabled ? "#dfdedd" : props.borderColor
        }`
      : ""}
  }
  display: flex;
  align-items: center;
  width: ${(props) => (props.fullWidthMode ? "100%" : `${props.width}px`)};
  border-radius: ${(props) => (props.mode == "line" ? "0px" : "3px")};
  justify-content: space-between;
  ${(props) =>
    `${
      props.mode == "line"
        ? props.disabled && "border-bottom: 1px dashed #dfdedd;"
        : props.disabled && "background-color: #F0F0F0;"
    }`}
`
const InputElement = styled.input<{
  width: number;
  textColor?: string;
  fontSize?: number;
  fullWidthMode?: boolean;
}>`
  all: unset;
  border: none;
  ${(props) =>
    props.fullWidthMode
      ? "width: 100%;"
      : `width: ${props.width}px;
  `}
  color: ${(props) => props.textColor};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
  &::placeholder {
    color: #dfdedd;
  }
`
const SubText = styled.p`
  margin-top: 4px;
  color: #ff5724;
  font-size: 11px;
`

export type InputType = {
  mode: "line" | "basic";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  width: number;
  fullWidthMode?: boolean;
  isError: boolean;
  errorMessage: string;
  disabled?: boolean;
  useCancelButton?: boolean;
  tabIndex?: number;
  readOnly?: boolean;
  onFocus?: () => void;
  onClick?: (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  iconButton?: IconType;
  onClickCancelButton?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  className?: string;
  borderColor: string;
  autoFocus?: boolean;
  textColor?: string;
  buttonAlways?: boolean;
  type?: string;
  pattern?: string;
  fontSize?: number;
  inputMode?: inputModeType;
};

function Input({
  mode,
  placeholder,
  value,
  onChange,
  width,
  isError,
  errorMessage,
  disabled = false,
  useCancelButton = false,
  readOnly = false,
  tabIndex,
  onFocus,
  onClick,
  onKeyDown,
  onBlur,
  iconButton,
  onClickCancelButton,
  className,
  borderColor,
  autoFocus = false,
  textColor,
  buttonAlways,
  type,
  pattern,
  fontSize,
  fullWidthMode = false,
  inputMode
}: InputType): JSX.Element {
  const showButton = () => {
    if ((value && useCancelButton) || buttonAlways) {
      return true
    }
    return false
  }
  return (
    <InputContainer data-testid="inputcontainer" className={className}>
      <InputBox
        data-testid="inputbox"
        width={width}
        disabled={disabled}
        mode={mode}
        borderColor={borderColor}
        fullWidthMode={fullWidthMode}
      >
        <InputElement
          pattern={pattern ? pattern : undefined}
          type={type ?? "text"}
          value={value}
          readOnly={readOnly}
          tabIndex={tabIndex}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onClick={(e) => (onClick && e ? onClick(e) : undefined)}
          onKeyDown={(e) => {
            onKeyDown ? onKeyDown(e) : undefined
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          width={width * 0.9}
          disabled={disabled}
          autoFocus={autoFocus}
          textColor={disabled ? "#DFDEDD" : textColor}
          fontSize={fontSize}
          fullWidthMode={fullWidthMode}
          inputMode={inputMode}
        />
        {showButton() && (
          <Icon
            icon={iconButton ? iconButton : "exit"}
            width={20}
            color="#818282"
            onClick={onClickCancelButton}
            useCursor={disabled ? false : true}
          />
        )}
      </InputBox>
      {isError && <SubText>{errorMessage}</SubText>}
    </InputContainer>
  )
}

Input.Email = Email
Input.Account = Account
Input.Phone = Phone
Input.Number = Number
Input.Url = URL

export default Input
