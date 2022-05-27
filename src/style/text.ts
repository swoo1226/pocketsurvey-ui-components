/* eslint-disable @typescript-eslint/ban-types */
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import theme from './theme';


export type Weight = keyof typeof theme.font;
export type Colors = keyof typeof theme.colors;
type Typography = keyof typeof theme.preset.typography;

interface ITextUtilProps {
  weight?: Weight;
  color?: Colors;
  typo?: Typography;
  size?: number | string;
}

const text = ({
  weight,
  color,
  typo,
  size,
}: ITextUtilProps): FlattenSimpleInterpolation => css`
  ${typo &&
  css`
    ${theme.preset.typography[typo]}
  `}

  ${weight &&
  css`
    font-family: ${theme.font[weight]};
  `}

  ${color &&
  css`
    color: ${theme.colors[color]};
  `}

  ${size &&
  css`
    font-size: ${getTextSize(size)};
  `}
`;

export default text;

const getTextSize = (size: number | string): string => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  if (isNumberic(size)) return `${size}px`;
  return `${size}`;
};

const isNumberic = (value: string): boolean =>
  // eslint-disable-next-line no-restricted-globals
  isNaN(value as any) === false;
