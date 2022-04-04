import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Icon } from '..';
import getCheckBox2CSS from './style';

interface ICheckBox2Props extends React.ComponentPropsWithoutRef<'div'> {
  isSelected: boolean;
  children?: React.ReactNode;
  isDisabled: boolean;
}

const CheckBox2 = ({
  isSelected,
  children = <Icon icon={'check2'} width={12} />,
  isDisabled,
  onClick,
  ...props
}: ICheckBox2Props) => {
  const isChildrenText = useMemo(
    () => ['string', 'number'].includes(typeof children),
    [children],
  );

  return (
    <CheckBox2Wrapper
      isSelected={isSelected}
      isDisabled={isDisabled}
      isChildrenText={isChildrenText}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDisabled) return;
        if (onClick) onClick(event);
      }}
      {...props}
    >
      {isSelected && <>{children}</>}
    </CheckBox2Wrapper>
  );
};

export default CheckBox2;

export interface ICheckBox2WrapperProps {
  isSelected: boolean;
  isDisabled: boolean;
  isChildrenText: boolean;
}

const CheckBox2Wrapper = styled.div<ICheckBox2WrapperProps>`
  width: 20px;
  height: 20px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getCheckBox2CSS}
`;
