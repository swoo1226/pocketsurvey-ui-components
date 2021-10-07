import React from 'react';
declare type ModeType = 'pastellYellow' | 'pastellBlue' | 'defaultGray';
export declare type TagType = {
    children: React.ReactNode;
    mode: ModeType;
    disabled: boolean;
    onClick?: () => void;
    className?: string;
    backgroundColor?: string;
    hoverColor?: string;
    fontSize?: number;
};
declare function Tag({ children, onClick, mode, className, backgroundColor, hoverColor, disabled, fontSize, }: TagType): JSX.Element;
export default Tag;
