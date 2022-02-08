import { Combine } from '../@types/utils';

export interface IDropdownProps
  extends Combine<
    React.ComponentPropsWithoutRef<'div'>,
    Omit<IDropdownContext, 'showList'>
  > {
  value: string | number | React.ReactNode;
  children: React.ReactNode;
  isDisabled?: boolean;
  placeholder?: string;
  preset?: PresetType;
}

export type PresetType = 'primary-main' | 'primary-yellow'

export interface IDropdownContext {
  showList: boolean;
  width?: number | string;
  height?: number | string;
  preset?: PresetType
}

export interface IDropDownSelectionProps
  extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isSelected: boolean;
  height?: string | number;
}
