declare type BarVerticalSeparatedOptionPropsType = {
    series: number[][];
    xAxisLabel: string[];
    label: string[];
    override?: any;
    lineWidth: number | null;
    hundredPercent?: {
        tooltip: boolean;
        series: boolean;
    };
    labelOption?: 'fixed' | 'dynamic';
};
declare type BarVerticalSeparatedPropsType = {
    width?: number | string;
    height?: number | string;
} & Omit<BarVerticalSeparatedOptionPropsType, 'lineWidth'>;
declare function BarVerticalSeparated({ width, height, series, label, xAxisLabel, override, hundredPercent, labelOption, }: BarVerticalSeparatedPropsType): JSX.Element;
export default BarVerticalSeparated;
