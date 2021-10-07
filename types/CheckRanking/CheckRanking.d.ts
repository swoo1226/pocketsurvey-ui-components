export declare type CheckRankingType = {
    selections: {
        label: string;
    }[];
    selected: number[];
    onItemClick: (index: number) => void;
    className?: string;
    isFocusBackgroundFunc?: boolean;
    backgroundColor?: string;
    disableHoverBackground?: boolean;
};
declare function CheckRanking({ selections, selected, onItemClick, className, isFocusBackgroundFunc, backgroundColor, disableHoverBackground, }: CheckRankingType): JSX.Element;
export default CheckRanking;
