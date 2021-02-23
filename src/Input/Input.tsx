import React from "react"
import styled from "styled-components"

import Icon from "../Icon/Icon"

const InputContainer = styled.div``
const InputBox = styled.div<{
  width: number;
  disabled: boolean;
  mode: "line" | "basic";
}>`
  padding: 6px ${(props) => props.width * 0.04}px;
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
        ? `border-bottom: 1px solid ${props.disabled ? "#dfdedd" : "#fac62d"}`
        : `border: 1px solid ${props.disabled ? "#dfdedd" : "#fac62d"}`
      : ""}
  }
  display: flex;
  align-items: center;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => (props.mode == "line" ? "0px" : "3px")};
  justify-content: space-between;
  ${(props) =>
    `${
      props.mode == "line"
        ? props.disabled && "border-bottom: 1px dashed #dfdedd;"
        : props.disabled && "background-color: #F0F0F0;"
    }`}
`
const InputElement = styled.input<{ width: number }>`
  all: unset;
  width: ${(props) => props.width}px;
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
  isError: boolean;
  errorMessage: string;
  disabled?: boolean;
  useCancleButton?: boolean;
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
  useCancleButton = false,
}: InputType): JSX.Element {
  return (
    <InputContainer>
      <InputBox width={width} disabled={disabled} mode={mode}>
        <InputElement
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          width={width * 0.9}
          disabled={disabled}
        />
        {value && useCancleButton && (
          <Icon icon="singleChoice" width={20} color="#DFDEDD" />
        )}
      </InputBox>
      {isError && <SubText>{errorMessage}</SubText>}
    </InputContainer>
  )
}

export default Input
