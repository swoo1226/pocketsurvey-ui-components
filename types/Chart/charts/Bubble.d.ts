declare type BubblePropsType = {
    width?: number | string;
    height?: number | string;
    selected?: number[];
};
declare function Bubble({ width, height }: BubblePropsType): JSX.Element;
export default Bubble;
