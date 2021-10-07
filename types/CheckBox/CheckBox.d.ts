export declare type CheckBoxType = {
    selections: {
        label: string;
    }[];
    selected: number[];
    onItemClick: (index: number) => void;
    className?: string;
    disabled?: boolean;
    isFocusBackgroundFunc?: boolean;
    backgroundColor?: string;
    disableHoverBackground?: boolean;
};
declare function CheckBox({ selections, selected, onItemClick, className, disabled, isFocusBackgroundFunc, backgroundColor, disableHoverBackground, }: CheckBoxType): JSX.Element;
export default CheckBox;
