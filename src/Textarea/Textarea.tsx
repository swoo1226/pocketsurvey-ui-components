import React from "react"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
import TextareaAutosize from "react-textarea-autosize"

type typeProps = "basic" | "line"
type sizeProps = "big" | "medium" | "small"
type widthProps = string

const TextareaContainer = styled(TextareaAutosize)<{
  borderStyle: FlattenSimpleInterpolation
  fontStyle: FlattenSimpleInterpolation
  widthStyle: FlattenSimpleInterpolation
}>`
    resize: none;
    ${props => props.borderStyle}
    ${props => props.fontStyle}
    ${props => props.widthStyle}

    &:focus {
        outline: none;
        border-color: #FAC62D;
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

const WidthSwitch = (type: typeProps, size?: sizeProps, width?: widthProps) => {
  if (width) {
    return css`
      width: ${width};
    `
  }
  if (type === "line") {
    return css`
      width: 350px;
    `
  } else {
    switch (size) {
    case "big":
    case "medium":
      return css`
          width: 630px;
        `
    default:
    case "small":
      return css`
          width: 500px;
          height: 52px;
        `
    }
  }
}

type TextareaPropsType = {
  type: typeProps
  size?: sizeProps
  width?: widthProps
  onChange: (value: string) => void
  className?: string
  value: string
}

function Textarea({
  type,
  size,
  width,
  onChange,
  className,
  value,
}: TextareaPropsType): JSX.Element {
  const fontStyle: FlattenSimpleInterpolation = FontSwitch(type, size)
  const borderStyle: FlattenSimpleInterpolation = BorderSwitch(type)
  const widthStyle: FlattenSimpleInterpolation = WidthSwitch(type, size, width)

  return (
    <TextareaContainer
      fontStyle={fontStyle}
      borderStyle={borderStyle}
      widthStyle={widthStyle}
      onChange={e => onChange(e.target.value)}
      className={className}
      value={value}
    >
      {value}
    </TextareaContainer>
  )
}

export default Textarea
