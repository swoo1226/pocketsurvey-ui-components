import { PresetType, SizeType } from '../../types';
import { StateType } from '..';
import { FlattenSimpleInterpolation, css } from 'styled-components';

const basePresetStyleSheet: {
  preset: {
    [key in PresetType]: {
      [key in StateType]: FlattenSimpleInterpolation;
    };
  };
  size: {
    [key in SizeType]: FlattenSimpleInterpolation;
  };
} = {
  preset: {
    'primary-main': {
      disabled: css`
        color: #dfdedd;
        background: rgba(251, 250, 248, 0.4);
        border: 1px solid rgba(223, 222, 221, 0.4);
      `,
      focused: css`
        color: #2b2e33;
        background: #fef4ce;
        border: 1px solid #f2ab28;
      `,
      normal: css`
        color: #2b2e33;
        background: #ffffff;
        border: 1px solid #dfdedd;
        &:hover {
          background: #fbfaf8;
          border: 1px solid #c9c8c7;
        }
      `,
    },
    'primary-yellow': {
      disabled: css`
        color: #dfdedd;
        background: #ffffff;
        border: 1px solid #dfdedd;
      `,
      focused: css`
        color: #f2ab28;
        background: #fef4ce;
        border: 1px solid #fac62d;
      `,
      normal: css`
        color: #f2ab28;
        background: #ffffff;
        border: 1px solid #f2ab28;
        &:hover {
          color: #f2ab28;
          background: #fffcf0;
          border: 1px solid #f2ab28;
        }
      `,
    },
    'secondary-text': {
      disabled: css``,
      focused: css``,
      normal: css``,
    },
  },
  size: {
    large: css`
      height: 40px;
      min-width: 134px;
      width: 134px;
      font-size: 14px;
    `,
    medium: css`
      height: 32px;
      min-width: 128px;
      width: 128px;
      font-size: 14px;
    `,
    small: css`
      height: 25px;
      min-width: 100px;
      width: 100px;
      font-size: 11px;
    `,
  },
};

export default basePresetStyleSheet;
