import { IconType } from '../Icon/Icon';
export declare type DropDownType = {
    list: {
        selectionName: string;
        isHr?: boolean;
        icon?: IconType;
        rotate?: number;
        hidden?: boolean;
        png?: any;
    }[];
    iconColor?: string;
    selected: number | null;
    disable: boolean;
    themeColor: {
        mainColor: string;
        subColor: string;
    };
    textColor?: string;
    onItemClick: (index: number) => void;
    className?: string;
    placeholder?: string;
    height?: number;
    width?: number;
    zIndex?: number;
    listMaxHeight?: number;
    fontSize?: number;
    pngImageCropCircle?: boolean;
    containerHeight?: string;
};
declare function DropDown({ list, selected, disable, themeColor, textColor, onItemClick, className, iconColor, placeholder, height, width, zIndex, listMaxHeight, fontSize, pngImageCropCircle, containerHeight, }: DropDownType): JSX.Element;
export default DropDown;
