import React from "react"
import styled from "styled-components"

const ColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const ColorItem = styled.div`
  margin: 20px;
  width: 200px;
`
const ColorName = styled.p`
  font-size: 14px;
`
const ColorBox = styled.div<{ color: string }>`
  width: 110px;
  height: 40px;
  background-color: ${(props) => props.color};
  margin: 20px 0;
`
const ColorInfoBox = styled.div`
  display: flex;
  margin: 10px 0;
`
const ColorInfoKey = styled.p`
  margin: 0;
  color: #818282;
`
const ColorInfoValue = styled.p`
  margin: 0 5px;
  color: #2b2e33;
`

type ColorsType = {
  colorName: string
  colorCode: {
    hex: string
    rgba: string
  }
  use: string[]
}[]

type ColorType = {
  colors: ColorsType
}

export function Color({ colors }: ColorType): JSX.Element {
  return (
    <ColorContainer>
      {colors.map((item, index) => (
        <ColorItem key={index}>
          <ColorName>{item.colorName}</ColorName>
          <ColorBox color={item.colorCode.hex} />
          <ColorInfoBox>
            <ColorInfoKey>HEX:</ColorInfoKey>
            <ColorInfoValue>{item.colorCode.hex}</ColorInfoValue>
          </ColorInfoBox>
          <ColorInfoBox>
            <ColorInfoKey>RGBA:</ColorInfoKey>
            <ColorInfoValue>{item.colorCode.rgba}</ColorInfoValue>
          </ColorInfoBox>
          <ColorInfoBox>
            <ColorInfoKey>USE:</ColorInfoKey>
            <ColorInfoValue>{item.use.join(",")}</ColorInfoValue>
            {/* <div style={{ display: "block", marginLeft: "15px" }}>
              {item.use.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div> */}
          </ColorInfoBox>
        </ColorItem>
      ))}
    </ColorContainer>
  )
}
