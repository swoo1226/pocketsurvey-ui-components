import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Input from "../Input"

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
  isMobile?: boolean;
};

function Phone({ value, onChange, isMobile }: PhonePropsType) {
  const [errorMessage, setErrorMessage] = useState<string>("")

  const [innerValue, setInnerValue] = useState<string>("")
  useEffect(() => {
    // 컴포넌트 외부에서 value 값을 읽을 때는 -을 제외한 숫자만 있어야함
    onChange(innerValue.replace(/[^0-9]/g, ""))
  }, [innerValue])

  return (
    <Input
      mode="basic"
      width={329}
      isError={errorMessage ? true : false}
      errorMessage={errorMessage}
      borderColor={"#FAC609"}
      type="tel"
      fontSize={14}
      fullWidthMode={isMobile ? true : false }
      value={innerValue}
      placeholder="(000)-000-0000"
      onChange={(inputInnerValue: string) => {
        if (/^([0-9]|-)+$/g.test(inputInnerValue)) {
          const phoneNumberOnly = inputInnerValue.replace(/[^0-9]/g, "")
          if (phoneNumberOnly.length <= 3) {
            setInnerValue(phoneNumberOnly)
          } else {
            setInnerValue(hypenAutoComplete(phoneNumberOnly))
          }
          setErrorMessage("")
        } else {
          if (inputInnerValue.length === 0) {
            setInnerValue("")
          } else {
            setErrorMessage("숫자만 입력 가능합니다.")
          }
        }
      }}
    />
  )
}

export default Phone
