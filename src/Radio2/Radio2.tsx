import React from 'react';
import styled from 'styled-components';
import getRadio2CSS from './style';

interface IRadio2Props extends React.ComponentPropsWithoutRef<'div'> {
  isSelected: boolean;
  isDisabled?: boolean;
}

const Radio2 = ({
  isSelected,
  isDisabled = false,
  onClick,
  ...props
}: IRadio2Props) => {
  return (
    <Radio2Wrapper
      isSelected={isSelected}
      isDisabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDisabled) return;
        if (onClick) onClick(event);
      }}
      {...props}
    ></Radio2Wrapper>
  );
};

export default Radio2;

export interface IRadio2WrapperProps {
  isSelected: boolean;
  isDisabled: boolean;
}

const Radio2Wrapper = styled.div<IRadio2WrapperProps>`
  width: 20px;
  height: 20px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid black;

  ${getRadio2CSS}
`;
