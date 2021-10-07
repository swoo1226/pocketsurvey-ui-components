declare type ColorsType = {
    colorName: string;
    colorCode: {
        hex: string;
        rgba: string;
    };
    use: string[];
}[];
declare type ColorType = {
    colors: ColorsType;
};
export declare function Color({ colors }: ColorType): JSX.Element;
export {};
