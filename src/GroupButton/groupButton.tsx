import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ISelection extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  isSelected?: boolean;
}

interface IGroupButtonProps {
  isDisabled?: boolean;
  selections: ISelection[];
  value: string;
  setValue: (value: string) => void;
}

const GroupButton = ({
  isDisabled = false,
  selections,
  value,
  setValue,
}: IGroupButtonProps) => {
  return (
    <SelectionWrapper>
      {selections.map((selection, index) => {
        const { title, onClick, isSelected, ...props } = selection;
        return (
          <Selection
            isDisabled={isDisabled}
            isSelected={title === value}
            onClick={(e) => {
              if (isDisabled) return;
              setValue(title);
              if (onClick) onClick(e);
            }}
            isStart={index === 0}
            isEnd={index === selections.length - 1}
            {...props}
          >
            {title}
          </Selection>
        );
      })}
    </SelectionWrapper>
  );
};

export default GroupButton;

const SelectionWrapper = styled.div`
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;
  height: fit-content;
  margin: auto 0px;
`;

interface ISelectionProps {
  isSelected: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  isDisabled: boolean;
}

const Selection = styled.div<ISelectionProps>`
  border: 1px solid #dfdedd;
  border-right: none;
  box-sizing: border-box;
  height: 32px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => getSelectionCSS(props)}
`;

// TODO: 아래 코드 활성화
/* ${text({
    weight: 'medium',
    size: 14,
    color: 'gray05',
  })}; */

const getSelectionCSS = (props: ISelectionProps) => {
  const CSSArr: FlattenSimpleInterpolation[] = [];

  if (props.isStart)
    CSSArr.push(
      css`
        border-radius: 3px 0px 0px 3px;
      `,
    );

  if (props.isEnd)
    CSSArr.push(
      css`
        border-radius: 0px 3px 3px 0px;
      `,
    );

  if (props.isDisabled) {
    CSSArr.push(css`
      background: rgba(251, 250, 248, 0.4);
      border-color: rgba(223, 222, 221, 0.4);
      color: #dfdedd;
    `);
  } else {
    if (props.isSelected)
      CSSArr.push(
        css`
          cursor: pointer;
          background: #fbfaf8;
        `,
      );
    else
      CSSArr.push(css`
        cursor: pointer;
        &:hover {
          background: #fbfaf8;
        }
      `);
  }

  return CSSArr.reduce((acc, cur) => {
    acc = css`
      ${acc}
      ${cur}
    `;
    return acc;
  }, css``);
};
