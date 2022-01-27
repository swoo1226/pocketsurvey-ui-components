import React, { forwardRef, useContext, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { InputContext } from './input2';

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
    const { onChange } = cxt;

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
          if (props.onChange) props.onChange(event);
        }}
      >
        <Icon icon="titleInputX" width={18} />
      </ResetWrapper>
    );
  },
);

export default InputClear;

InputClear.displayName = 'InputClear';
// 자식 요소가 clear 버튼인지 판별하기 위해서 사용

const ResetWrapper = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
