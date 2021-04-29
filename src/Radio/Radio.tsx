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
const RadioSelectionItem = styled.span<{
  checked: "checked" | "notChecked";
  disabled?: boolean;
}>`
  margin: 0;
  width: 20px;
  height: 20px;
  margin-right: 14px;
  border-radius: 50%;
  background-color: ${(props) => (props.disabled ? "#F0F0F0" : "")};
  box-shadow: ${(props) =>
    props.disabled
      ? props.checked === "checked"
        ? "0 0 0 4px #DFDEDD inset"
        : "0 0 0 1px #DFDEDD inset"
      : props.checked === "checked"
        ? "0 0 0 4px #f2ab28 inset"
        : "0 0 0 1px #dfdedd inset"};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    box-shadow: ${(props) =>
    props.disabled ? "" : "0 0 0 1px #f2ab28 inset;"};
  }
`

export type RadioType = {
  name: string;
  selections: {
    label: string;
  }[];
  selected: string;
  onItemClick: (index: number) => void;
  className?: string;
  disabled?: boolean;
};

function Radio({
  selections,
  selected,
  onItemClick,
  className,
  disabled,
}: RadioType): JSX.Element {
  return (
    <RadioContainer className={className}>
      <RadioList>
        {selections.map((item, index) => {
          return (
            <RadioItem key={index} data-testid={`radio-item-${index}`}>
              <RadioSelectionItem
                onClick={() => (disabled ? null : onItemClick(index))}
                checked={selected === item.label ? "checked" : "notChecked"}
                disabled={disabled}
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
