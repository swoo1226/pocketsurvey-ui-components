import React, { useState } from "react"
import { withKnobs, text, select, number, boolean } from "@storybook/addon-knobs"

import Textarea from "./Textarea"

export default {
  title: "Components/Textarea", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Textarea, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export function Index() {
  const type = select("타입", ["basic", "line"], "basic")
  const size = select("사이즈", ["small", "medium", "big"], "small")
  const tabIndex = number("tabIndex", 10)
  const readOnly = boolean("readOnly", false)
  const placeholder = text("placeholder", "placeholder")
  const rows = number("rows", 0)
  const cols = number("cols", 0)

  const [value, setValue] = useState("")
  return (
    <Textarea
      type={type}
      size={size}
      onChange={(data: string) => {
        console.log(data)
        setValue(data)
      }}
      value={value}
      tabIndex={tabIndex}
      readOnly={readOnly}
      placeholder={placeholder}
      onFocus={() => {
        console.log("onFocus")
      }}
      onKeyDown={() => {
        console.log("onKeyDown")
      }}
      onKeyUp={() => {
        console.log("onKeyUp")
      }}
      onBlur={() => {
        console.log("onBlur")
      }}
      rows={rows}
      cols={cols}
    />
  )
}

Index.story = {
  name: "Default",
}
