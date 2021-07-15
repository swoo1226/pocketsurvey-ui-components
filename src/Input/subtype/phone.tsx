import React from "react"
import styled from "styled-components"

const hypenAutoComplete = (value: string) => {
  if (value.length <= 3) return value
  const startIndex = value.substr(0, 2) === "02" ? 2 : 3
  //02 (서울)만 2자리고 나머지 010, 070, 다른 지역번호는 3자리
  const length = value.length - startIndex

  if (length <= 4) {
    return `${value.substr(0, startIndex)}-${value.substr(startIndex)}`
  }
  if (length === 7) {
    return `${value.substr(0, startIndex)}-${value.substr(
      startIndex,
      3
    )}-${value.substr(startIndex + 3)}`
  }
  if (length <= 8) {
    return `${value.substr(0, startIndex)}-${value.substr(
      startIndex,
      4
    )}-${value.substr(startIndex + 4)}`
  }
  return value
}

type PhonePropsType = {
  value: string;
  onChange: (value: string) => void;
};

const PhoneInput = styled.input`
  padding: 7px;
  width: 329px;
  height: 21px;
  border: 1px solid #dfdedd;
  border-radius: 3px;
`

function Phone({ value, onChange }: PhonePropsType) {
  return (
    <PhoneInput
      type="tel"
      value={value}
      placeholder="(000)-000-0000"
      onChange={(event) => {
        const phoneNumberOnly = event.target.value.replace(/[^0-9]/g, "")
        if (phoneNumberOnly.length <= 3) {
          onChange(phoneNumberOnly)
        } else {
          onChange(hypenAutoComplete(phoneNumberOnly))
        }
      }}
    />
  )
}

export default Phone
