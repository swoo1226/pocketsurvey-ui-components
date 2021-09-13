import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div<{
  backgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
}>`
  background-color: ${(props) => props.backgroundColor};
  width: 50px;
  height: 30px;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 50rem;
  position: relative;
  &:hover {
    ${(props) => (!props.isToggleOn
    ? `background-color: ${props.hoveredBackgroundColor}`
    : '')};
  }
`;
const ToggleButton = styled.div<{ isToggleOn: boolean }>`
  width: 24px;
  height: 24px;
  transition: 0.2s;
  background-color: #fff;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  ${(props) => (props.isToggleOn ? 'left : 20px;' : 'left: -20px;')}
`;

type ToggleType = {
  toggleOnBackgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
  setIsToggleOn: (isToggleOn: boolean) => void;
  className?: string;
};

function Toggle({
  toggleOnBackgroundColor,
  hoveredBackgroundColor,
  isToggleOn,
  setIsToggleOn,
  className,
}: ToggleType): JSX.Element {
  return (
    <ToggleContainer
      backgroundColor={isToggleOn ? toggleOnBackgroundColor : '#d6d6d6'}
      hoveredBackgroundColor={hoveredBackgroundColor}
      isToggleOn={isToggleOn}
      onClick={() => setIsToggleOn(!isToggleOn)}
      data-testid="ToggleContainer"
      className={className}
    >
      <ToggleButton isToggleOn={isToggleOn} />
    </ToggleContainer>
  );
}

export default Toggle;
