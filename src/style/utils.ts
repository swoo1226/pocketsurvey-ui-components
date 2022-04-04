import { FlattenSimpleInterpolation, css } from 'styled-components';

export const mergeCSS = (arr: FlattenSimpleInterpolation) =>
  arr.reduce((acc, cur) => {
    acc = css`
      ${acc}
      ${cur}
    `;
    return acc;
  }, css``);
