import React from "react"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
import TextareaAutosize from "react-textarea-autosize"

type typeProps = "basic" | "line"
type sizeProps = "big" | "medium" | "small"
type widthProps = string

const TextareaContainer = styled(TextareaAutosize)<{
  borderStyle: FlattenSimpleInterpolation
  fontStyle: FlattenSimpleInterpolation
}>`
  resize: none;
  ${(props) => props.borderStyle}
  ${(props) => props.fontStyle}

    &:focus {
    outline: none;
    border-color: #fac62d;
  }
`

const FontSwitch = (type: typeProps, size?: sizeProps) => {
  if (type === "line") {
    return css`
      font-family: Noto Sans CJK KR;
      font-size: 18px;
    `
  }
  switch (size) {
    case "big":
      return css`
        font-family: Noto Sans CJK KR;
        font-size: 28px;
      `
    case "medium":
    case "small":
    default:
      return css`
        font-family: Noto Sans CJK KR;
        font-size: 14px;
      `
  }
}

const BorderSwitch = (type: typeProps) => {
  switch (type) {
    case "line":
      return css`
        border: none;
        border-bottom: 1px solid #dfdedd;
        border-radius: 0px;
      `
    case "basic":
      return css`
        border: 1px solid #dfdedd;
        border-radius: 3px;
      `
  }
}

type TextareaPropsType = {
  type: typeProps
  size?: sizeProps
  onChange: (value: string) => void
  className?: string
  value: string
  tabIndex?: number
  readOnly?: boolean
  placeholder?: string
  onFocus?: () => void
  onKeyDown?: () => void
  onKeyUp?: () => void
  onBlur?: () => void
  rows?: number
  cols?: number
}

function Textarea({ type, size, onChange, className, value, tabIndex, readOnly = false, placeholder, onFocus, onKeyDown, onKeyUp, onBlur, rows, cols }: TextareaPropsType): JSX.Element {
  const fontStyle: FlattenSimpleInterpolation = FontSwitch(type, size)
  const borderStyle: FlattenSimpleInterpolation = BorderSwitch(type)

  return (
    <TextareaContainer
      fontStyle={fontStyle}
      borderStyle={borderStyle}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      value={value}
      tabIndex={tabIndex}
      readOnly={readOnly}
      placeholder={placeholder}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      rows={rows}
      cols={cols}
    >
      {value}
    </TextareaContainer>
  )
}

export default Textarea
