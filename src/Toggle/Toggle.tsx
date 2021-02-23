import React from "react"
import styled from "styled-components"

const ToggleContainer = styled.div<{
  backgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  width: 50px;
  height: 30px;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 50rem;
  position: relative;
  &:hover {
    ${(props) =>
    !props.isToggleOn
      ? `background-color: ${props.hoveredBackgroundColor}`
      : ""};
  }
`
const ToggleButton = styled.div<{ isToggleOn: boolean }>`
  width: 24px;
  height: 24px;
  transition: 0.2s;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  ${(props) => (props.isToggleOn ? "left : 23px;" : "left: 3px;")}
`

type ToggleType = {
  toggleOnBackgroundColor: string;
  hoveredBackgroundColor: string;
  isToggleOn: boolean;
  setIsToggleOn: (isToggleOn: boolean) => void;
};

function Toggle({
  toggleOnBackgroundColor,
  hoveredBackgroundColor,
  isToggleOn,
  setIsToggleOn,
}: ToggleType): JSX.Element {
  return (
    <ToggleContainer
      backgroundColor={isToggleOn ? toggleOnBackgroundColor : "#d6d6d6"}
      hoveredBackgroundColor={hoveredBackgroundColor}
      isToggleOn={isToggleOn}
      onClick={() => setIsToggleOn(!isToggleOn)}
      data-testid="ToggleContainer"
    >
      <ToggleButton isToggleOn={isToggleOn} />
    </ToggleContainer>
  );
}

export default Toggle
