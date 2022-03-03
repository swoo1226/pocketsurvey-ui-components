import styled, { css } from 'styled-components';
import getStyle from '../style/getStyle';
import { PresetType } from './types';

export const DropdownBox = styled.div<{
  height?: string;
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
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  z-index: 19;
  align-items: center;
  width: fit-content;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    getDropdownBoxCSS(props.preset, props.isDisabled, props.isFocused)}
`;

export const DropdownSelectionGroup = styled.div<{
  maxHeight?: number | string;
  top: number;
  left: number;
}>`
  min-width: 240px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  margin: 0;
  padding: 8px 0;
  border: 1px solid #dfdedd;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 999;

  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${getStyle.getSize(props.maxHeight)};
    `}
`;

export const DropdownSelectionWrapper = styled.div<{
  isSelected: boolean;
}>`
  color: #2b2e33;
  font-size: 14px;
  padding: 11px 16px;
  background-color: white;
  cursor: pointer;
  height: 36px;
  box-sizing: border-box;

  &:hover {
    background-color: #f0f0f0;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f0f0f0;
    `}
`;

export const DropdownWrapper = styled.div`
  width: fit-content;
`;

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
      border: 1px solid #f2ab28;

      &:hover {
        color: #f2ab28;
        background: #fffcf0;
        border: 1px solid #f2ab28;
      }
    `;
  }
};
