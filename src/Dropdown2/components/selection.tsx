import React, { useContext } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { useSelectionComponentStyle } from '../style';
import { DropdownContext } from '../Dropdown2';
import { textEllipsis } from '../style/utils';

export interface ISelectionProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactChild;
  extraCSS?: FlattenSimpleInterpolation;
  isSelected?: boolean;
  disableAutoClose?: boolean;
}

const Selection = ({
  children,
  extraCSS,
  isSelected,
  disableAutoClose = false,
  ...props
}: ISelectionProps) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  const sizeCSS = useSelectionComponentStyle(cxt);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.onClick) props.onClick(event);

    if (disableAutoClose) return;
    cxt.setShowList(false);
  };

  return (
    <SelectionWrapper
      sizeCSS={sizeCSS}
      extraCSS={extraCSS}
      onClick={handleClick}
      isSelected={isSelected}
    >
      <SelectionChildrenWrapper>{children}</SelectionChildrenWrapper>
    </SelectionWrapper>
  );
};

export default Selection;

const SelectionWrapper = styled.div<{
  sizeCSS: FlattenSimpleInterpolation;
  extraCSS?: FlattenSimpleInterpolation;
  isSelected?: boolean;
}>`
  font-family: 'Spoqa Han Sans Neo Regular';
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  ${(props) =>
    props.isSelected &&
    css`
      background: #f0f0f0;
    `}
  ${(props) => props.sizeCSS}
  ${(props) => props.extraCSS}
`;

const SelectionChildrenWrapper = styled.div`
  ${textEllipsis}
`;
