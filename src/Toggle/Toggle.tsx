import React from 'react';
import styled, { css } from 'styled-components';

type ToggleSize = 'small' | 'default';

const ToggleContainer = styled.div<{
  backgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
  disable?: boolean;
  size: ToggleSize;
}>`
  background-color: ${(props) =>
    props.disable ? '#F0F0F0' : props.backgroundColor};
  width: ${(props) => (props.size === 'small' ? '40px' : '50px')};
  height: ${(props) => (props.size === 'small' ? '22px' : '30px')};
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  transition: 0.1s;
  border-radius: 50rem;
  position: relative;
  &:hover {
    ${(props) =>
      !props.isToggleOn &&
      !props.disable &&
      css`
        background-color: ${props.hoveredBackgroundColor};
      `}
  }
`;

const ToggleButton = styled.div<{
  isToggleOn: boolean;
  disable?: boolean;
  size: ToggleSize;
}>`
  width: ${(props) => (props.size === 'small' ? '14px' : '24px')};
  height: ${(props) => (props.size === 'small' ? '14px' : '24px')};
  transition: 0.2s;
  background-color: ${(props) => (props.disable ? '#DFDEDD' : '#fff')};
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: ${(props) => (props.size === 'small' ? '-1px' : '0px')};
  bottom: 0;
  right: 0;
  left: ${(props) => (props.isToggleOn ? '16px' : '-16px')};
`;

type ToggleType = {
  toggleOnBackgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
  setIsToggleOn: (isToggleOn: boolean) => void;
  className?: string;
  disable?: boolean;
  size?: ToggleSize;
};

function Toggle({
  toggleOnBackgroundColor,
  hoveredBackgroundColor,
  isToggleOn,
  setIsToggleOn,
  className,
  disable = false,
  size = 'default',
}: ToggleType): JSX.Element {
  return (
    <ToggleContainer
      backgroundColor={isToggleOn ? toggleOnBackgroundColor : '#d6d6d6'}
      hoveredBackgroundColor={hoveredBackgroundColor}
      isToggleOn={isToggleOn}
      onClick={() => {
        if (!disable) {
          setIsToggleOn(!isToggleOn);
        }
      }}
      data-testid="ToggleContainer"
      className={className}
      disable={disable}
      size={size}
    >
      <ToggleButton isToggleOn={isToggleOn} disable={disable} size={size} />
    </ToggleContainer>
  );
}

export default Toggle;
