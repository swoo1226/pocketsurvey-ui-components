import React from 'react';
import styled from 'styled-components';

const CheckRankingContainer = styled.div`
  margin-top: 28px;
`;
const CheckRankingList = styled.div``;
const CheckRankingItem = styled.div<{
  isFocusBackgroundFunc: boolean;
  checked: boolean;
  disableHoverBackground?: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
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
  border-radius: 3px;
`;
const CheckRankingSelectionLabel = styled.label`
  margin-left: 14px;
`;
const CheckRankingSelectionItem = styled.div<{
  checked: boolean;
  backgroundColor?: string;
}>`
  width: 21px;
  height: 21px;
  border-radius: 3px;
  box-sizing: border-box;

  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 3px;
  background-color: ${(props) => (props.checked ? props.backgroundColor ?? '#f2ab28' : '#FFFFFF')};
  border: ${(props) => (props.checked ? '' : '1px solid #DFDEDD')};

  &:hover {
    ${(props) => (props.checked
    ? ''
    : `border: 1px solid ${props.backgroundColor ?? '#f2ab28'};`)};
  }

  color: #ffffff;
`;

export type CheckRankingType = {
  selections: {
    label: string;
  }[];
  selected: number[];
  onItemClick: (index: number) => void;
  className?: string;
  isFocusBackgroundFunc?: boolean;
  backgroundColor?: string;
  disableHoverBackground?: boolean;
};

function CheckRanking({
  selections,
  selected,
  onItemClick,
  className,
  isFocusBackgroundFunc = false,
  backgroundColor,
  disableHoverBackground,
}: CheckRankingType): JSX.Element {
  return (
    <CheckRankingContainer className={className}>
      <CheckRankingList>
        {selections.map((item, index) => (
          <CheckRankingItem
            key={index}
            onClick={() => onItemClick(index)}
            data-testid="CheckRanking-item"
            isFocusBackgroundFunc={isFocusBackgroundFunc}
            checked={selected.includes(index)}
            disableHoverBackground={disableHoverBackground}
          >
            <CheckRankingSelectionItem
              data-testid={`CheckRanking-${index}`}
              checked={selected.includes(index)}
              backgroundColor={backgroundColor}
            >
              {selected.indexOf(index) !== -1
                ? selected.indexOf(index) + 1
                : null}
            </CheckRankingSelectionItem>
            <CheckRankingSelectionLabel>
              {item.label}
            </CheckRankingSelectionLabel>
          </CheckRankingItem>
        ))}
      </CheckRankingList>
    </CheckRankingContainer>
  );
}

export default CheckRanking;
