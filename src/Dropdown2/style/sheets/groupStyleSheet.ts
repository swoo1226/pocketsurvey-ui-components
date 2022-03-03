import { SizeType } from '../../types';
import { FlattenSimpleInterpolation, css } from 'styled-components';
import { IDropdownContextProps } from '../../Dropdown2';

const groupStyleSheet: {
  size: {
    [key in SizeType]: (
      base: IDropdownContextProps['domSize']['base'],
    ) => FlattenSimpleInterpolation;
  };
  top: (
    position: IDropdownContextProps['position'],
    groupHeight: number,
    baseHeigt: number,
  ) => FlattenSimpleInterpolation;
  left: (
    position: IDropdownContextProps['position'],
    baseWidth: number,
    groupWidth: number,
  ) => FlattenSimpleInterpolation;
} = {
  size: {
    large: (base) => css`
      min-width: 240px;
      ${base.width >= 240 &&
      css`
        max-width: ${base.width}px;
      `}
    `,
    medium: (base) => css`
      min-width: 240px;
      ${css`
        max-width: ${base.width}px;
      `}
    `,
    small: (base) => css`
      min-width: 180px;
      ${base.width >= 180 &&
      css`
        max-width: ${base.width}px;
      `}
    `,
  },
  top: (position, groupHeight, baseHeigt) => {
    if (position === 'up') {
      return css`
        top: ${(groupHeight + 8) * -1}px;
      `;
    }
    return css`
      top: ${baseHeigt + 8}px;
    `;
  },
  left: (position, baseWidth, groupWidth) => {
    if (position === 'right')
      return css`
        left: ${Math.abs(groupWidth - baseWidth) * -1}px;
      `;

    return css``;
  },
};

export default groupStyleSheet;
