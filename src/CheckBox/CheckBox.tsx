import React from "react"
import styled from "styled-components"

const CheckBoxImage = styled.svg`
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
`
const CheckBoxContainer = styled.div``
const CheckBoxList = styled.div``
const CheckBoxItem = styled.div`
  display: flex;
  margin-bottom: 14px;
`
const CheckBoxSelectionLabel = styled.label`
  margin-left: 14px;
`
const CheckBoxSelectionItem = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2px;
  background-color: ${(props) => (props.checked ? "#f2ab28" : "#FFFFFF")};
  &:hover {
    ${(props) => (props.checked ? "" : "border: 1px solid #f2ab28;")};
  }
  ${CheckBoxImage} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`

export type CheckBoxType = {
  selections: {
    label: string
  }[]
  selected: number[]
  onItemClick: (index: number) => void
  className?: string
}

function CheckBox({ selections, selected, onItemClick, className }: CheckBoxType): JSX.Element {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxList>
        {selections.map((item, index) => {
          return (
            <CheckBoxItem key={index} onClick={() => onItemClick(index)} data-testid="checkbox-item">
              <CheckBoxSelectionItem data-testid={`checkbox-${index}`} checked={selected.includes(index)}>
                <CheckBoxImage viewBox="0 0 11.51 10.81">
                  <polyline points="1.25 5.92 4.19 9.56 10.26 1.25" />
                </CheckBoxImage>
              </CheckBoxSelectionItem>
              <CheckBoxSelectionLabel>{item.label}</CheckBoxSelectionLabel>
            </CheckBoxItem>
          )
        })}
      </CheckBoxList>
    </CheckBoxContainer>
  )
}

export default CheckBox
