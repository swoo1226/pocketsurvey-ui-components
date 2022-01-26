import { css } from 'styled-components';

const getStyle = {
  getCursorCSS: (isDisabled: boolean) => {
    if (isDisabled)
      return css`
        cursor: not-allowed;
      `;
    return css`
      cursor: pointer;
    `;
  },
  getSize: (value: number | string) => {
    if (typeof value === 'number') return `${value}px`;
    const isNumberic = !isNaN((value as unknown) as number);
    if (isNumberic) return `${value}px`;
    return value;
  },
};

export default getStyle;
