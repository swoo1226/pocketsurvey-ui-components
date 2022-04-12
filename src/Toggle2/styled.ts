import styled from 'styled-components';
import { toggle2StyleModule } from './Toggle2Module';

export const Toggle2Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;
export const Frame = styled.div<{
  isDisable: boolean;
  active: boolean;
}>`
  border-radius: 30px;

  width: 44px;
  height: 24px;
  position: relative;

  cursor: pointer;
  transition: background-color 0.1s;

  ${toggle2StyleModule.getFrameCss}

  :hover {
    ${toggle2StyleModule.getFrameCssWhenHover}
  }
`;

export const Circle = styled.div<{
  isDisable: boolean;
  active: boolean;
}>`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 1.8px;
  transition: all 0.3s;

  ${toggle2StyleModule.getCircleCss}
`;
