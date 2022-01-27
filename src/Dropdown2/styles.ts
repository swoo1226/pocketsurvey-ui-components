import styled, { css } from 'styled-components';
import getStyle from '../style/getStyle';

export const DropdownBox = styled.div<{
  width: string;
  height: string;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-radius: 3px;
  border: 1px solid rgb(250, 198, 45);
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Spoqa Han Sans Neo Regular';
  cursor: pointer;
  z-index: 19;
  align-items: center;
  ${(props) => css`
    width: ${props.width};
  `}
  ${(props) =>
    css`
      height: ${props.height};
    `}
`;

export const DisabledDropdownBox = styled(DropdownBox)`
  border: 1px solid rgb(201, 200, 199);
  background-color: rgb(240, 240, 240);
  cursor: not-allowed;
`;

export const DropdownSelectionGroup = styled.div<{ height?: number | string }>`
  width: 200px;
  z-index: 20;
  position: absolute;
  box-shadow: rgb(210 203 192) 0px 3px 6px;
  color: rgb(17, 17, 17);
  border-radius: 3px;
  padding: 8px 0px;
  max-height: 428px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgb(255, 255, 255);
  margin: 7px 0px;
  font-size: 14px;

  ${(props) =>
    props.height &&
    css`
      height: ${getStyle.getSize(props.height)};
    `}
`;

export const DropdownSelectionWrapper = styled.div<{
  isSelected: boolean;
  width: string;
  height?: string | number;
}>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 13px;
  height: 34px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #fef4ce;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f0f0f0;
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${getStyle.getSize(props.height)};
    `}
`;

export const DropdownWrapper = styled.div``;
