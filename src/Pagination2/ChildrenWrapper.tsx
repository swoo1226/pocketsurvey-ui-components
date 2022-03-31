import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface IChildrenWrapperProps {
  selected: boolean;
  isEllipsis?: boolean;
}

const ChildrenWrapper = styled.div<IChildrenWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;

  width: 32px;
  height: 32px;
  box-sizing: border-box;

  cursor: pointer;
  border-radius: 3px;

  ${(props) => getChildrenWrapperCSS(props)}
`;

const getChildrenWrapperCSS = ({
  selected,
  isEllipsis,
}: IChildrenWrapperProps): FlattenSimpleInterpolation => {
  if (isEllipsis) return css``;

  if (selected)
    return css`
      color: #2b2e33;
      background: #f0f0f0;
    `;

  return css`
    color: #818282;
    &:hover {
      background: #fbfaf8;
    }
  `;
};

export default ChildrenWrapper;
