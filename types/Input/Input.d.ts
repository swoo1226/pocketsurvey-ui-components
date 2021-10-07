import React from 'react';
import { IconType } from '../Icon/Icon';
import URL from './subtype/url';
declare type inputModeType = 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
export declare type InputType = {
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
    onClickCancelButton?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    borderColor: string;
    autoFocus?: boolean;
    textColor?: string;
    buttonAlways?: boolean;
    type?: string;
    pattern?: string;
    fontSize?: number;
    inputMode?: inputModeType;
    ignorePlaceholderColor?: boolean;
};
declare function Input({ mode, placeholder, value, onChange, width, isError, errorMessage, disabled, useCancelButton, readOnly, tabIndex, onFocus, onClick, onKeyDown, onBlur, iconButton, onClickCancelButton, className, borderColor, autoFocus, textColor, buttonAlways, type, pattern, fontSize, fullWidthMode, inputMode, ignorePlaceholderColor, }: InputType): JSX.Element;
declare namespace Input {
    var Email: typeof import("./subtype/email").default;
    var Account: typeof import("./subtype/account").default;
    var Phone: typeof import("./subtype/phone").default;
    var Number: typeof import("./subtype/number").default;
    var Url: typeof URL;
}
export default Input;
