import React from "react"
import styled from "styled-components"

const RadioContainer = styled.div``
const RadioList = styled.div``
const RadioItem = styled.div`
  display: flex;
  margin-bottom: 14px;
`
const RadioSelectionLabel = styled.label`
  margin-left: 14px;
`
const RadioSelectionItem = styled.input`
  margin: 0;
  opacity: 0;
  width: 17px;
  height: 17px;
  all: unset;
  padding-left: 17px;
  border: 0;
  border-radius: 100%;
  border: 1px solid #dfdedd;
  &:hover {
    border: 1px solid #f2ab28;
  }
  &:checked {
    padding-left: 11px;
    border: 4px solid #f2ab28;
  }
`

export type RadioType = {
  name: string
  selections: {
    label: string
  }[]
  selected: number
  onItemClick: (index: number) => void
  className?: string
}

function Radio({ name, selections, selected, onItemClick, className }: RadioType): JSX.Element {
  return (
    <RadioContainer className={className}>
      <RadioList>
        {selections.map((item, index) => {
          return (
            <RadioItem key={index} data-testid={`radio-item-${index}`}>
              <RadioSelectionItem type="radio" name={name} checked={index == selected} onChange={() => onItemClick(index)} data-testid={`radio-selection-item-${index}`} />
              <RadioSelectionLabel htmlFor={name}>{item.label}</RadioSelectionLabel>
            </RadioItem>
          )
        })}
      </RadioList>
    </RadioContainer>
  )
}

export default Radio
