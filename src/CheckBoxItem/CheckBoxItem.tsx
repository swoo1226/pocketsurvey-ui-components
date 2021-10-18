import React from 'react';
import styled from 'styled-components';
import theme from '../globalStyle';

type CheckBoxItemPropsType = {
  className?: string;
  checked: boolean;
  onClick: (checked: boolean) => void;
  backgroundColor?: string;
  disabled: boolean;
};

const CheckBoxImage = styled.svg<{ checked: boolean }>`
  fill: none;
  stroke: #ffffff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
  display: ${(props) => (props.checked ? 'block' : 'none')};
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

const CheckBoxSelectionItem = styled.div<{
  disabled: boolean;
  checked: boolean;
  backgroundColor?: string;
}>`
  cursor: pointer;
  width: 21px;
  height: 21px;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2px;
  border: ${(props) => (props.checked ? '' : '1px solid #DFDEDD')};
  background-color: ${(props) => getBackgroundColor(props)};
  border: 1px solid
    ${(props) => (props.checked ? props.backgroundColor ?? 'white' : '#DFDEDD')}
    ${CheckBoxImage} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const getBackgroundColor = (props: {
  disabled: boolean;
  checked: boolean;
  backgroundColor?: string;
}) => {
  if (props.disabled) return theme.colors.Gray02;
  if (props.checked && !props.disabled) {
    if (!props.backgroundColor) return theme.colors.BoldYellow;
    if (props.backgroundColor) return props.backgroundColor;
  }
  return theme.colors.White;
};

function CheckBoxItem({
  className,
  checked,
  onClick,
  backgroundColor,
  disabled,
}: CheckBoxItemPropsType) {
  return (
    <CheckBox className={className}>
      <CheckBoxSelectionItem
        disabled={disabled}
        checked={checked}
        backgroundColor={backgroundColor}
        onClick={() => onClick(!checked)}
      >
        <CheckBoxImage viewBox="0 0 11.51 10.81" checked={checked}>
          <polyline points="1.25 5.92 4.19 9.56 10.26 1.25" />
        </CheckBoxImage>
      </CheckBoxSelectionItem>
    </CheckBox>
  );
}

export default CheckBoxItem;
