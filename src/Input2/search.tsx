import React, { forwardRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';
import { InputContext, InputSizeType } from './input2';

interface IInputSearchProps extends React.ComponentPropsWithoutRef<'div'> {}

const InputSearch = forwardRef(
  ({ ...props }: IInputSearchProps, ref: React.Ref<HTMLDivElement>) => {
    const cxt = useContext(InputContext);
    if (cxt === null) return <></>;
    const { size } = cxt;
    return (
      <InputSearchWrapper {...props} ref={ref} size={size}>
        <Icon icon="search" width={size === 'small' ? 14 : 16} />
      </InputSearchWrapper>
    );
  },
);

export default InputSearch;

const InputSearchWrapper = styled.div<{ size: InputSizeType }>`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  cursor: pointer;

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 14px;
      height: 14px;
    `}
`;
