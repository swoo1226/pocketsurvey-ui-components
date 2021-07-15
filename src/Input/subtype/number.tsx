import React, { useState } from "react"
import styled from "styled-components"

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
    <NumberInput
      placeholder="숫자를 입력해주세요"
      type="number"
      pattern="\d*"
      value={value}
      onChange={(event) => {
        if (/^[+-]?\d*(\.?\d*)$/.test(event.target.value)) {
          onChange(event.target.value)
        }
      }}
    ></NumberInput>
  }
  return (
    <NumberInput
      placeholder="숫자를 입력해주세요"
      value={value}
      onChange={(event) => {
        if (/^[+-]?\d*(\.?\d*)$/.test(event.target.value)) {
          onChange(event.target.value)
        }
      }}
    ></NumberInput>
  )
}

export default Number
