import { IDropdownContextProps } from '../types';
import { FlattenSimpleInterpolation, css } from 'styled-components';
import basePresetStyleSheet from './sheets/baseStyleSheet';
import { getDropdownState, mergeCSS } from './utils';
import { useMemo } from 'react';
import groupStyleSheet from './sheets/groupStyleSheet';
import selectionStyleSheet from './sheets/selectionStyleSheet';

export type StateType = 'disabled' | 'focused' | 'normal';

export const useBaseComponentStyle = (
  cxt: IDropdownContextProps,
): FlattenSimpleInterpolation => {
  const state = useMemo(
    () =>
      getDropdownState({
        isDisabled: cxt.isDisabled,
        isFocused: cxt.isFocused,
      }),
    [cxt.isDisabled, cxt.isFocused],
  );

  const cursorCSS = useMemo(
    () =>
      css`
        cursor: ${cxt.isDisabled ? 'not-allowed' : 'pointer'};
      `,
    [cxt.isDisabled],
  );

  const style = useMemo(
    () =>
      mergeCSS([
        basePresetStyleSheet['preset'][cxt.preset][state],
        basePresetStyleSheet['size'][cxt.size],
        cursorCSS,
      ]),
    [cxt.preset, state, cxt.size],
  );

  return style;
};

export const useGroupComponentStyle = (
  cxt: IDropdownContextProps,
  groupWidth: number,
  groupHeight: number,
) => {
  const style = useMemo(
    () =>
      mergeCSS([
        groupStyleSheet['size'][cxt.size](cxt.domSize.base),
        groupStyleSheet['top'](
          cxt.position,
          groupHeight,
          cxt.domSize.base.height,
        ),
        groupStyleSheet['left'](
          cxt.position,
          cxt.domSize.base.width,
          groupWidth,
        ),
      ]),
    [cxt.size, cxt.domSize.base, cxt.position, groupWidth, groupHeight],
  );
  return style;
};

export const useSelectionComponentStyle = (cxt: IDropdownContextProps) => {
  const style = useMemo(
    () =>
      mergeCSS([
        selectionStyleSheet['size'][cxt.size],
        selectionStyleSheet['font'][cxt.size],
      ]),
    [cxt.size],
  );

  return style;
};
