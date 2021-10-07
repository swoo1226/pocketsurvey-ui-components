export declare type RadioType = {
    name: string;
    selections: {
        label: string;
    }[];
    selected: string | null;
    disableValue?: string;
    onItemClick: (index: number | null) => void;
    className?: string;
    disabled?: boolean;
    itemWidth?: string;
    isFocusBackgroundFunc?: boolean;
    backgroundColor?: string;
    disableHoverBackground?: boolean;
};
declare function Radio({ selections, selected, disableValue, onItemClick, className, disabled, itemWidth, isFocusBackgroundFunc, backgroundColor, disableHoverBackground, }: RadioType): JSX.Element;
export default Radio;
