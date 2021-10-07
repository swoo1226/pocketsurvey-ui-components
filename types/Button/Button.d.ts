import React from 'react';
declare type ModeType = 'primary' | 'secondary' | 'tertiary' | 'cancel' | 'selectAll' | 'emptyArr';
export declare type ButtonType = {
    children: React.ReactNode;
    onClick: () => void;
    mode: ModeType;
    disabled: boolean;
    className?: string;
    backgroundColor?: string;
    isLoading?: boolean;
    buttonRef?: React.RefObject<HTMLDivElement> | React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};
declare function Button({ children, onClick, mode, disabled, className, backgroundColor, isLoading, buttonRef, }: ButtonType): JSX.Element;
export default Button;
