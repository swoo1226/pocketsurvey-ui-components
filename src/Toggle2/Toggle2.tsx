import React, { forwardRef } from 'react';
import { Circle, Frame, Toggle2Wrapper } from './styled';
import { Toggle2Module } from './Toggle2Module';

interface IToggle2Props
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'disabled'> {
  isDisable?: boolean;
  active: boolean;
}

const Toggle2 = forwardRef(
  (
    { active, isDisable = false, ...props }: IToggle2Props,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const module = new Toggle2Module(props.onClick);

    return (
      <Toggle2Wrapper>
        <Frame
          isDisable={isDisable}
          active={active}
          onClick={(e) => {
            module.handleClick(e);
          }}
          ref={ref}
          {...props}
        >
          <Circle isDisable={isDisable} active={active} />
        </Frame>
      </Toggle2Wrapper>
    );
  },
);

export default Toggle2;
