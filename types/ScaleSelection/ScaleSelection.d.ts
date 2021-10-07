declare type ScaleSelectionPropsType = {
    width: string;
    leftLabel: string;
    rightLabel: string;
    selected: number | null;
    onItemClick: (index: number | null) => void;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    selection: number[];
    showLabel: boolean;
};
declare function ScaleSelection({ width, leftLabel, rightLabel, selected, onItemClick, backgroundColor, fontFamily, fontSize, fontColor, selection, showLabel, }: ScaleSelectionPropsType): JSX.Element;
export default ScaleSelection;
