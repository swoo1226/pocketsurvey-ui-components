import styled, { css } from 'styled-components';
import getStyle from '../style/getStyle';
import { PresetType } from './types';

export const DropdownBox = styled.div<{
  width: string;
  height: string;
  isFocused: boolean;
  isDisabled: boolean;
  preset: PresetType;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-radius: 3px;
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
  ${(props) =>
    getDropdownBoxCSS(props.preset, props.isDisabled, props.isFocused)}
`;

export const DropdownSelectionGroup = styled.div<{
  height?: number | string;
  width: string;
}>`
  width: ${(props) => props.width};
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

const getDropdownBoxCSS = (
  preset: PresetType,
  isDisabled: boolean,
  isFocused: boolean,
) => {
  if (preset === 'primary-main') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: rgba(251, 250, 248, 0.4);
        border: 1px solid rgba(223, 222, 221, 0.4);
      `;

    if (isFocused)
      return css`
        color: #2b2e33;
        background: #fef4ce;
        border: 1px solid #f2ab28;
      `;
    return css`
      color: #2b2e33;
      background: #ffffff;
      border: 1px solid #dfdedd;

      &:hover {
        background: #fbfaf8;
        border: 1px solid #c9c8c7;
      }
    `;
  }

  if (preset === 'primary-yellow') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: #ffffff;
        border: 1px solid #dfdedd;
      `;

    if (isFocused)
      return css`
        color: #f2ab28;
        background: #fef4ce;
        border: 1px solid #fac62d;
      `;
    return css`
      color: #f2ab28;
      background: #ffffff;
      border: 1px solid #fac62d;

      &:hover {
        color: #f2ab28;
        background: #fffcf0;
        border: 1px solid #fac62d;
      }
    `;
  }
};
