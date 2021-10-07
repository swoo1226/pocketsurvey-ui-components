import React from 'react';
export declare type FontType = {
    children: React.ReactNode;
    fontFace: string;
    fontWeight: string;
    fontSize: string;
    fontColor: string;
    className?: string;
    isInline?: boolean;
};
declare function Font({ children, fontFace, fontWeight, fontColor, fontSize, className, isInline }: FontType): JSX.Element;
export default Font;
