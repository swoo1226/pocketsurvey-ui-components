import React, { forwardRef } from 'react';
import { Circle, Frame, Toggle2Wrapper } from './styled';
import Toggle2Module from './Toggle2Module';

interface IToggle2Props
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'disabled'> {
  disable?: boolean;
  active: boolean;
}

const Toggle2 = forwardRef(
  (
    { active, disable = false, ...props }: IToggle2Props,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const module = new Toggle2Module(props.onClick);

    return (
      <Toggle2Wrapper>
        <Frame
          disable={disable}
          active={active}
          onClick={(e) => {
            module.handleClick(e);
          }}
          ref={ref}
        >
          <Circle disable={disable} active={active} />
        </Frame>
      </Toggle2Wrapper>
    );
  },
);

export default Toggle2;
