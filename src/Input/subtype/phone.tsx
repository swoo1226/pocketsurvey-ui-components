import React, { useState } from "react"

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

function Phone() {
  const [value, setValue] = useState<string>("")
  return (
    <input
      type="tel"
      value={value}
      placeholder="010-2000-0000"
      onChange={(event) => {
        const phoneNumberOnly = event.target.value.replace(/[^0-9]/g, "")
        if (phoneNumberOnly.length <= 3) {
          setValue(phoneNumberOnly)
        } else {
          setValue(hypenAutoComplete(phoneNumberOnly))
        }
      }}
    />
  )
}

export default Phone
