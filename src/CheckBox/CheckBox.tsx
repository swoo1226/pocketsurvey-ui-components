import React from "react"
import styled from "styled-components"

const CheckBoxImage = styled.svg<{ disabled?: boolean }>`
  fill: none;
  stroke: ${(props) => (props.disabled ? "#DFDEDD" : "#FFFFFF")};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
`
const CheckBoxContainer = styled.div``
const CheckBoxList = styled.div``
const CheckBoxItem = styled.div<{ isFocusBackgroundFunc: boolean, checked: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 10px 7px;
  &:hover{
    background-color: #F0F0F0;
  }
  ${props => props.isFocusBackgroundFunc && props.checked ? "background-color: #F0F0F0;" : ""}
  border-radius: 3px;
`
const CheckBoxSelectionLabel = styled.label`
  margin-left: 14px;
`
const CheckBoxSelectionItem = styled.div<{
  checked: boolean;
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 21px;
  height: 21px;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2px;
  border: ${(props) =>
    props.disabled
      ? "1px solid #DFDEDD"
      : props.checked
        ? ""
        : "1px solid #DFDEDD"};

  background-color: ${(props) =>
    props.disabled ? "#F0F0F0" : props.checked ? props.backgroundColor ?? "#f2ab28" : "#FFFFFF"};
  &:hover {
    ${(props) =>
    props.disabled ? "" : props.checked ? "" : `border: 1px solid ${props.backgroundColor ?? "#f2ab28"};`};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  ${CheckBoxImage} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`

export type CheckBoxType = {
  selections: {
    label: string;
  }[];
  selected: number[];
  onItemClick: (index: number) => void;
  className?: string;
  disabled?: boolean;
  isFocusBackgroundFunc?: boolean;
  backgroundColor?: string;
};

function CheckBox({
  selections,
  selected,
  onItemClick,
  className,
  disabled,
  isFocusBackgroundFunc,
  backgroundColor
}: CheckBoxType): JSX.Element {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxList>
        {selections.map((item, index) => {
          return (
            <CheckBoxItem
              key={index}
              onClick={() => (disabled ? null : onItemClick(index))}
              data-testid="checkbox-item"
              isFocusBackgroundFunc={isFocusBackgroundFunc}
              checked={selected.includes(index)}
            >
              <CheckBoxSelectionItem
                data-testid={`checkbox-${index}`}
                checked={selected.includes(index)}
                disabled={disabled}
                backgroundColor={backgroundColor}
              >
                <CheckBoxImage viewBox="0 0 11.51 10.81" disabled={disabled}>
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
