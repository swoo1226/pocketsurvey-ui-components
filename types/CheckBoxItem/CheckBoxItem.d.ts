declare type CheckBoxItemPropsType = {
    className?: string;
    checked: boolean;
    onClick: (checked: boolean) => void;
    backgroundColor: string;
};
declare function CheckBoxItem({ className, checked, onClick, backgroundColor, }: CheckBoxItemPropsType): JSX.Element;
export default CheckBoxItem;
