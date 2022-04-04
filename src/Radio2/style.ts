import { css } from 'styled-components';
import { IRadio2WrapperProps } from './Radio2';

const getRadio2CSS = (props: IRadio2WrapperProps) => {
  if (props.isDisabled) {
    if (props.isSelected) {
      return css`
        background: #f0f0f0;
        border: 5px solid #dfdedd;
        box-sizing: border-box;
      `;
    }

    return css`
      background: #f0f0f0;
      border: 1px solid #dfdedd;
      box-sizing: border-box;
    `;
  }

  if (props.isSelected)
    return css`
      cursor: pointer;
      background: #ffffff;
      border: 5px solid #f2ab28;
      box-sizing: border-box;
    `;

  return css`
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dfdedd;
    box-sizing: border-box;
    &:hover {
      border: 1px solid #f2ab28;
    }
  `;
};

export default getRadio2CSS;
