import React from 'react';
import styled from 'styled-components';
import checkImage from './check.svg';

const CheckBoxContainer = styled.div``;
const CheckBoxList = styled.div``;
const CheckBoxItem = styled.div`
  display: flex;
  margin-bottom: 14px;
`;
const CheckBoxSelectionLabel = styled.label`
  margin-left: 14px;
`;
const CheckBoxSelectionItem = styled.input`
  margin: 0;
  opacity: 0;
  width: 17px;
  height: 17px;
  all: unset;
  padding-left: 17px;
  border: 0;
  border-radius: 3px;
  border: 1px solid #dfdedd;
  &:hover {
    border: 1px solid #f2ab28;
  }
  &:checked {
    padding-left: 11px;
    border: 4px solid #f2ab28;
    background-color: #f2ab28;
    background-image: url(${checkImage});
    background-repeat: no-repeat;
  }
`;

export type CheckBoxType = {
  name: string;
  selections: {
    label: string;
  }[];
  selected: string[];
  onItemClick: (index: number) => void;
  className?: string;
};

const CheckBox = ({
  name,
  selections,
  selected,
  onItemClick,
  className,
}: CheckBoxType) => {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxList>
        {selections.map((item, index) => {
          return (
            <CheckBoxItem key={index}>
              <CheckBoxSelectionItem
                data-testid={`checkbox-${index}`}
                type="checkbox"
                name={name}
                checked={selected.includes(index.toString())}
                onChange={() => onItemClick(index)}
              />
              <CheckBoxSelectionLabel htmlFor={name}>
                {item.label}
              </CheckBoxSelectionLabel>
            </CheckBoxItem>
          );
        })}
      </CheckBoxList>
    </CheckBoxContainer>
  );
};

export default CheckBox;
