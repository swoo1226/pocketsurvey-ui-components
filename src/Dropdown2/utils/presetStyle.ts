import { IDropdownProps } from '../types';
import getStyle from '../../style/getStyle';

export const getHeight = (
  size: IDropdownProps['size'],
  height: IDropdownProps['height'],
) => {
  if (height) return getStyle.getSize(height);
  if (size === 'large') return `40px`;
  if (size === 'medium') return `32px`;
  if (size === 'small') return `25px`;
};
