import { Colors, Weight } from './../style/text';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import text from '../style/text';

import { TokenType } from './Typography';

const getFontCSS = (size: number, weight: Weight, lineHeight: number) => css`
    ${text({
      size: size,
      weight: weight,
    })}
    line-height: ${lineHeight}%;
    letter-spacing: -0.5px;
`;

const typography: Map<TokenType, FlattenSimpleInterpolation> = new Map([
  ['title-xxxl', getFontCSS(32, 'bold', 150)],
  ['title-xxl', getFontCSS(28, 'bold', 150)],
  ['title-xl', getFontCSS(24, 'bold', 150)],
  ['title-l', getFontCSS(20, 'bold', 150)],
  ['title-l-medium', getFontCSS(20, 'medium', 150)],
  ['title-m', getFontCSS(18, 'bold', 150)],
  ['title-s', getFontCSS(16, 'bold', 150)],
  ['title-xs', getFontCSS(14, 'bold', 150)],
  ['title-xxs', getFontCSS(12, 'bold', 150)],
  ['button-l', getFontCSS(16, 'medium', 100)],
  ['button-m', getFontCSS(14, 'medium', 100)],
  ['button-m-regular', getFontCSS(14, 'regular', 100)],
  ['button-s', getFontCSS(12, 'medium', 100)],
  ['caption-l', getFontCSS(16, 'regular', 170)],
  ['caption-m', getFontCSS(14, 'regular', 170)],
  ['caption-s', getFontCSS(13, 'regular', 170)],
  ['tooltip-m', getFontCSS(14, 'bold', 140)],
  ['tooltip-s', getFontCSS(14, 'regular', 140)],
  ['text-l', getFontCSS(16, 'regular', 120)],
  ['text-m', getFontCSS(14, 'regular', 120)],
]);

export const typographyCssUtil = {
  getTypographyCSS: (token: TokenType) => typography.get(token),
};
