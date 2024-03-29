import React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div``;
const RadioList = styled.div``;
const RadioItem = styled.div<{
  itemWidth?: string;
  disabled?:boolean;
  isFocusBackgroundFunc: boolean;
  checked: boolean;
  disableHoverBackground?: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  height: 20px;
  ${(props) => props.itemWidth && `width: ${props.itemWidth};`}
  padding: 10px 7px;
  ${(props) => !props.disableHoverBackground
    && `
  &:hover {
    background-color: #f0f0f0;
  }
  `}
  ${(props) => (props.isFocusBackgroundFunc && props.checked
    ? 'background-color: #F0F0F0;'
    : '')}
${(props) => (props.disabled ? 'background-color: #F0F0F0;' : '')}
${(props) => (props.disabled ? 'color: #818282;' : '')}

  border-radius: 3px;
`;
const RadioSelectionLabel = styled.label`
  display: flex;
  height: 20px;
  box-sizing: border-box;
  align-items: center;
`;
const RadioSelectionItem = styled.span<{
  checked: 'checked' | 'notChecked';
  disabled?: boolean;
  backgroundColor?: string;
}>`
  margin: 0;
  width: 21px;
  height: 21px;
  margin-right: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? '#F0F0F0' : '#FFFFFF')};
  box-shadow: ${(props) => (props.disabled
    ? props.checked === 'checked'
      ? '0 0 0 5px #DFDEDD inset'
      : '0 0 0 1px #DFDEDD inset'
    : props.checked === 'checked'
      ? `0 0 0 5px ${props.backgroundColor ?? '#f2ab28'} inset`
      : '0 0 0 1px #dfdedd inset')};
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    box-shadow: ${(props) => (props.disabled
    ? ''
    : props.checked === 'checked'
      ? `0 0 0 5px ${props.backgroundColor ?? '#f2ab28'} inset;`
      : `0 0 0 1px ${props.backgroundColor ?? '#f2ab28'} inset;`)};
  }
`;

export type RadioType = {
  name: string;
  selections: {
    label: string;

  }[];
  selected: string | null;
  disableValue?:string,
  onItemClick: (index: number | null) => void;
  className?: string;
  disabled?: boolean;
  itemWidth?: string;
  isFocusBackgroundFunc?: boolean;
  backgroundColor?: string;
  disableHoverBackground?: boolean;
};

function Radio({
  selections,
  selected,
  disableValue,
  onItemClick,
  className,
  disabled,
  itemWidth,
  isFocusBackgroundFunc = false,
  backgroundColor,
  disableHoverBackground,
}: RadioType): JSX.Element {
  const onItemClickWrapper = (index: number) => {
    if (disabled) {
      if (!disableValue) return; // 없으면 전부 선택 불가능
      if (disableValue && selections[index].label === disableValue) return;
    }
    const prev: number | null = selected
      ? selections.map((item) => item.label).indexOf(selected)
      : null;
    // 기존에 선택한 선택지의 인덱스를 가져온다.
    // 선택한 인덱스가 없다면 null, 비 정상적인 접근으로 selections 에 값이 없다면 -1 (정상적인 접근에서는 없는 케이스)

    if (prev === index) {
      // 선택 해제
      onItemClick(null);
    } else {
      onItemClick(index);
    }
  };
  return (
    <RadioContainer className={className}>
      <RadioList>
        {selections.map((item, index) => (
          <RadioItem
            disableHoverBackground={disableHoverBackground}
            onClick={() => onItemClickWrapper(index)}
            disabled={disabled && item.label === disableValue}
            key={index}
            data-testid={`radio-item-${index}`}
            itemWidth={itemWidth}
            isFocusBackgroundFunc={isFocusBackgroundFunc}
            checked={selected === item.label}
          >
            <RadioSelectionItem
              checked={selected === item.label ? 'checked' : 'notChecked'}
              disabled={
                  disabled
                    ? disableValue
                      ? item.label === disableValue
                      : true
                    : false
                }
              data-testid={`radio-selection-item-${index}`}
              backgroundColor={backgroundColor}
            />
            <RadioSelectionLabel>{item.label}</RadioSelectionLabel>
          </RadioItem>
        ))}
      </RadioList>
    </RadioContainer>
  );
}

export default Radio;
