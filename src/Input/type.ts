import { IconType } from '../Icon/Icon';

export type InputModeType =
  | 'text'
  | 'none'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search';

export interface IInputBox {
  width: number;
  disabled: boolean;
  mode: 'line' | 'basic';
  borderColor: string;
  fullWidthMode?: boolean;
  isError: boolean;
  abcReportInput: boolean;
}

export interface IInputElement {
  width: number;
  textColor?: string;
  fontSize?: number;
  fullWidthMode?: boolean;
  mode: 'line' | 'basic';
  ignorePlaceholderColor?: boolean;
  value: string;
}
export type InputType = {
  mode: 'line' | 'basic';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  width: number;
  fullWidthMode?: boolean;
  isError: boolean;
  errorMessage: string;
  disabled?: boolean;
  useCancelButton?: boolean;
  tabIndex?: number;
  readOnly?: boolean;
  onFocus?: () => void;
  onClick?: (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  iconButton?: IconType;
  onClickCancelButton?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  className?: string;
  borderColor: string;
  autoFocus?: boolean;
  textColor?: string;
  buttonAlways?: boolean;
  type?: string;
  pattern?: string;
  fontSize?: number;
  inputMode?: InputModeType;
  ignorePlaceholderColor?: boolean;
  abcReportInput?: boolean;
  correctMessage?: string;
};
