import React from "react"
import styled from "styled-components"

const UrlInput = styled.input`
  padding: 7px;
  width: 329px;
  height: 21px;
  border: 1px solid #dfdedd;
  border-radius: 3px;
`

type URLPropsType = {
  value: string;
  onChange: (value: string) => void;
};

function URL({ value, onChange }: URLPropsType) {
  return <UrlInput 
    value={value}
    placeholder="https://"
    onChange={(event) => {
      onChange(event.target.value)
    }}/>
}

export default URL
