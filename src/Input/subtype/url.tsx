/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import styled from "styled-components"
import Input from "../Input"

type URLPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean; 
  onKeyDown?: any
};

function URL({ value, onChange, isMobile, onKeyDown }: URLPropsType) {
  return (
    <Input
      onKeyDown={onKeyDown ?? undefined}
      type="url"
      mode="basic"
      width={isMobile ? 300 : 646}
      isError={false}
      errorMessage={""}
      fullWidthMode={isMobile ? true : false }
      borderColor={"#FAC609"}
      value={value ?? "https://"}
      placeholder="https://"
      fontSize={14}
      onChange={(_innerValue: string) => {
        const prevValueLength = value.length
        const innerValue =
          prevValueLength === 0 ? "https://" + _innerValue : _innerValue

        const http = innerValue.split("http://").length - 1
        const https = innerValue.split("https://").length - 1

        // 크롬 브라우저에서 주소를 복사 붙여넣기 하면 https://가 포함되어 있어서 삭제해준다.
        if (http >= 2) {
          onChange(innerValue.replace("http://", ""))
        } else if (https >= 2) {
          onChange(innerValue.replace("https://", ""))
        } else if (http === 1 && https === 1) {
          //https가 먼저 있어서 https를 삭제하고 http 유지
          onChange(innerValue.replace("https://", ""))
        } else {
          onChange(innerValue)
        }
      }}
    />
  )
}

export default URL
