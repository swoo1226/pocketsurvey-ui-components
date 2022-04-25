import { StateType } from '.';
import { FlattenSimpleInterpolation, css } from 'styled-components';

export const getDropdownState = (props: {
  isDisabled?: boolean;
  isFocused?: boolean;
}): StateType => {
  if (props.isDisabled) return 'disabled';
  if (props.isFocused) return 'focused';
  return 'normal';
};

export const mergeCSS = (props: FlattenSimpleInterpolation[]) =>
  props.reduce<FlattenSimpleInterpolation>(
    (acc, cur) => css`
      ${acc}
      ${cur}
    `,
    css``,
  );

export const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
