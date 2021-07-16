import React, { useState } from "react"
import styled from "styled-components"
import Input from "../Input"
type NumberPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

const NumberInput = styled.input`
  padding: 7px;
  width: 329px;
  height: 21px;
  border: 1px solid #dfdedd;
  border-radius: 3px;
`

function Number({ value, onChange, isMobile }: NumberPropsType) {
  if (isMobile) {
    <Input
      mode={"basic"}
      width={329}
      isError={false}
      errorMessage={""}
      borderColor={"#FAC609"}
      placeholder="숫자를 입력해주세요"
      type="number"
      pattern="\d*"
      value={value}
      onChange={(innerValue: string) => {
        if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
          onChange(innerValue)
        }
      }}
    ></Input>
  }
  return (
    <Input
      mode={"basic"}
      width={329}
      isError={false}
      errorMessage={""}
      borderColor={"#FAC609"}
      placeholder="숫자를 입력해주세요"
      value={value}
      onChange={(innerValue: string) => {
        if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
          onChange(innerValue)
        }
      }}
    ></Input>
  )
}

export default Number
