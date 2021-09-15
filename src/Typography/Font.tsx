import React from "react"
import styled from "styled-components"

const FontContainer = styled.p<{
  fontFace: string
  fontWeight: string
  fontSize: string
  fontColor: string
  lineHeight: string
}>`
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFace};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
`

export type FontType = {
  children: React.ReactNode
  fontFace: string
  fontWeight: string
  fontSize: string
  fontColor: string
  className?: string
  isInline?: boolean
}

function Font({ children, fontFace, fontWeight, fontColor, fontSize, className, isInline = false }: FontType): JSX.Element {
  return (
    <FontContainer fontFace={fontFace} fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor} lineHeight="140%" className={className} style={{ display: isInline ? "inline" : "block" }}>
      {children}
    </FontContainer>
  )
}

export default Font
