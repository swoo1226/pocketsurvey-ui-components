import React from "react"
import styled from "styled-components"

type CheckBoxItemPropsType = {
    checked: boolean;
    onClick: (checked: boolean) => void;
    backgroundColor: string;
}

const CheckBoxImage = styled.svg<{ disabled?: boolean }>`
  fill: none;
  stroke: #FFFFFF;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
`

const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 10px 7px;
  border-radius: 3px;
`

const CheckBoxSelectionItem = styled.div<{
    checked: boolean;
    backgroundColor?: string;
}>`
  width: 21px;
  height: 21px;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2px;
  border: ${(props) =>
    props.checked
      ? ""
      : "1px solid #DFDEDD"};
  background-color: ${(props) =>
    props.checked
      ? props.backgroundColor ?? "white"
      : "#FFFFFF"};
  border: 1px solid ${(props) =>
    props.checked
      ? props.backgroundColor ?? "white"
      : "#DFDEDD"}
  ${CheckBoxImage} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`

function CheckBoxItem({ checked, onClick, backgroundColor }: CheckBoxItemPropsType) {
  return (
    <CheckBox
      onClick={() => onClick(!checked)}
    >
      <CheckBoxSelectionItem
        checked={checked}
        backgroundColor={backgroundColor}
      >
        <CheckBoxImage viewBox="0 0 11.51 10.81" disabled={checked}>
          <polyline points="1.25 5.92 4.19 9.56 10.26 1.25" />
        </CheckBoxImage>
      </CheckBoxSelectionItem>
    </CheckBox>
  )
}

export default CheckBoxItem
