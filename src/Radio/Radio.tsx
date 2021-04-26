import React from "react"
import styled from "styled-components"

const RadioContainer = styled.div``
const RadioList = styled.div``
const RadioItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  height: 20px;
`
const RadioSelectionLabel = styled.div`
  box-sizing: border-box;
`
const RadioSelectionItem = styled.span<{ checked: string }>`
  margin: 0;
  width: 20px;
  height: 20px;
  margin-right: 14px;
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.checked === "checked"
      ? "0 0 0 4px #f2ab28 inset"
      : "0 0 0 4px #dfdedd inset"};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 4px #f2ab28 inset;
  }
`

export type RadioType = {
  name: string;
  selections: {
    label: string;
  }[];
  selected: number; //배열의 인덱스를 넘긴다.
  onItemClick: (index: number) => void;
  className?: string;
};

function Radio({
  selections,
  selected,
  onItemClick,
  className,
}: RadioType): JSX.Element {
  return (
    <RadioContainer className={className}>
      <RadioList>
        {selections.map((item, index) => {
          return (
            <RadioItem key={index} data-testid={`radio-item-${index}`}>
              <RadioSelectionItem
                onClick={() => onItemClick(index)}
                checked={selected === index ? "checked" : "notChecked"}
                data-testid={`radio-selection-item-${index}`}
              />
              <RadioSelectionLabel>{item.label}</RadioSelectionLabel>
            </RadioItem>
          )
        })}
      </RadioList>
    </RadioContainer>
  )
}

export default Radio
