import { FlattenSimpleInterpolation, css } from 'styled-components';
import { SizeType } from '../../types';

const selectionStyleSheet: {
  size: {
    [key in SizeType]: FlattenSimpleInterpolation;
  };
  font: {
    [key in SizeType]: FlattenSimpleInterpolation;
  };
} = {
  size: {
    large: css`
      height: 40px;
    `,
    medium: css`
      height: 32px;
    `,
    small: css`
      height: 25px;
    `,
  },
  font: {
    large: css`
      font-size: 14px;
    `,
    medium: css`
      font-size: 14px;
    `,
    small: css`
      font-size: 12px;
    `,
  },
};

export default selectionStyleSheet;
