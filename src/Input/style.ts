import styled from 'styled-components';
import { IInputBox, IInputElement } from './type';

const InputContainer = styled.div``;
const InputBox = styled.div<IInputBox>`
  ${(props) =>
    `${
      // eslint-disable-next-line no-nested-ternary
      props.abcReportInput
        ? ``
        : props.mode === 'line'
        ? `
                border-bottom: 1px solid #dfdedd;
                padding: 7px;
    ${props.fullWidthMode ? `${300 * 0.05}` : `${props.width * 0.05}`}px;
            `
        : `
                border: 1px solid #dfdedd; 
                padding: 11px 14px;
            `
    }`}
  &:hover {
    ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      !props.disabled
        ? props.mode === 'line'
          ? `border-bottom: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
          : `border: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
        : ''}
  }
  &:focus-within {
    ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      !props.disabled
        ? props.mode === 'line'
          ? `border-bottom: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
          : `border: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
        : ''}
  }
  display: flex;
  align-items: center;
  width: ${(props) => (props.fullWidthMode ? '100%' : `${props.width}px`)};
  border-radius: ${(props) => (props.mode === 'line' ? '0px' : '3px')};
  justify-content: space-between;
  ${(props) =>
    `${
      // eslint-disable-next-line no-nested-ternary
      props.abcReportInput
        ? ''
        : props.mode === 'line'
        ? props.disabled && 'border-bottom: 1px dashed #dfdedd;'
        : props.disabled && 'background-color: #F0F0F0;'
    }`}
  input {
    color: #000000;
  }
  border: ${(props) =>
    props.isError && props.mode === 'basic' ? '1px solid #FAC609' : ''};
  border-bottom: ${(props) =>
    props.isError && props.mode === 'line' ? '1px solid #FAC609' : ''};
`;

const InputElement = styled.input<IInputElement>`
  all: unset;
  border: none;
  ${(props) =>
    props.fullWidthMode
      ? 'width: 100%;'
      : `width: ${props.width}px;
  `}
  color: ${(props) => props.textColor};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
  cursor: auto;
  ${(props) =>
    (props.ignorePlaceholderColor === undefined ||
      props.ignorePlaceholderColor === false) &&
    `
  &::placeholder {
    color: #dfdedd;
  }
  `}
  ${(props) => props.mode === 'basic' && 'line-height: 10; height: 20px;'}
  &:focus-within {
    color: ${(props) => (props.textColor ? props.textColor : '#000000')};
  }
`;
const SubText = styled.p`
  margin-top: 4px;
  color: #F37165;
  font-size: 11px;
`;

const CorrectMessage = styled.p`
  margin-top: 4px;
  color: #70d473;
  font-size: 11px;
`;

const inputStyles = {
  InputContainer,
  InputBox,
  InputElement,
  SubText,
  CorrectMessage,
};

export default inputStyles;
