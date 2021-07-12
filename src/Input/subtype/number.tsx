import React, { useState } from "react"

function Number() {
  const [value, setValue] = useState<string>("")

  return (
    <input
      type="number"
      value={value}
      onChange={(event) => {
        const valueLength = value.length
        const lastChar = value.substr(valueLength - 1, valueLength)
        console.log("lastChar:", lastChar)
        // if (["+", "-"].includes(lastChar) && valueLength !== 0) return
        // TODO: 특수문자 입력 가능 조건 작성 
        setValue(event.target.value)
      }}
    ></input>
  )
}

export default Number
