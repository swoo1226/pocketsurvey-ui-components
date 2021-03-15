import React, { useState } from "react"
import { withKnobs, number, boolean, text, select, color } from "@storybook/addon-knobs"

import Input from "./Input"
import { Meta } from "@storybook/react/types-6-0"

export default {
  component: Input,
  title: "Components/Input",
  decorators: [withKnobs],
} as Meta

export function Index() {
  const [value, setValue] = useState<string>("")

  const width = number("width", 300)
  const placeholder = text("placeholder", "텍스트를 입력해주세요.")
  const errorMessage = text("errorMessage", "에러메시지")
  const disabled = boolean("disabled", false)
  const useCancleButton = boolean("useCancleButton", false)
  const isError = boolean("isError", false)
  const mode = select("mode", ["line", "basic"], "line")
  const readOnly = boolean("readOnly", false)
  const tabIndex = number("tabIndex", 10)
  const borderColor = color("borderColor", "#FAC609")
  return (
    <Input
      mode={mode}
      placeholder={placeholder}
      value={value}
      onChange={(value: string) => setValue(value)}
      width={width}
      isError={isError}
      errorMessage={errorMessage}
      disabled={disabled}
      useCancelButton={useCancleButton}
      readOnly={readOnly}
      tabIndex={tabIndex}
      onFocus={() => {
        console.log("onFocus")
      }}
      onClick={() => {
        console.log("onClick")
      }}
      onBlur={() => {
        console.log("onBlur")
      }}
      onClickCancelButton={() => {
        console.log("onClickCancelButton")
      }}
      onKeyDown={() => {
        console.log("onKeyDown")
      }}
      borderColor={borderColor}
    />
  )
}
