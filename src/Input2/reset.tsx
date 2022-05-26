import React, { forwardRef, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';
import { InputContext, InputSizeType } from './input2';

interface IInputClearProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: 'exit' | 'circle';
}

type ExitIconType = 'exit' | 'circle' | 'exitHover' | 'circleHover';

const InputClear = forwardRef(
  (
    { icon = 'exit', ...props }: IInputClearProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [hover, setHover] = useState<boolean>(false);
    const cxt = useContext(InputContext);
    if (cxt === null) return <></>;
    const { onChange, size } = cxt;

    return (
      <ResetWrapper
        {...props}
        ref={ref}
        onMouseEnter={(event) => {
          setHover(true);
          if (props.onMouseEnter) props.onMouseEnter(event);
        }}
        onMouseLeave={(event) => {
          setHover(false);
          if (props.onMouseLeave) props.onMouseLeave(event);
        }}
        onClick={(event) => {
          onChange({
            target: {
              value: '',
            },
          });
          if (props.onClick) props.onClick(event);
        }}
        size={size}
      >
        <Icon
          icon="titleInputX"
          width={cxt.size === 'small' ? 14 : 16}
          useCursor
        />
      </ResetWrapper>
    );
  },
);

export default InputClear;

InputClear.displayName = 'InputClear';
// 자식 요소가 clear 버튼인지 판별하기 위해서 사용

const ResetWrapper = styled.div<{ size: InputSizeType }>`
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
