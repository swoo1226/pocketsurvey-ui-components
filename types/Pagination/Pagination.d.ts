declare type SizeType = 'normal' | 'small' | 'large';
export declare type PaginationType = {
    count: number;
    size: SizeType;
    defaultPage: number;
    onChangeFn: (page: number) => void;
    disabled: boolean;
    siblingCount: number;
    boundaryCount: number;
    selectedBackgroundColor: string;
    hoveredBackgroundColor: string;
    selectedTextColor: string;
    hoveredTextColor: string;
    className?: string;
};
declare function PaginationComponent({ count, size, disabled, defaultPage, onChangeFn, siblingCount, boundaryCount, selectedBackgroundColor, hoveredBackgroundColor, selectedTextColor, hoveredTextColor, className, }: PaginationType): JSX.Element;
export default PaginationComponent;
