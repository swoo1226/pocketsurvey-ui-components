declare type BarHorizontalStackedOptionPropsType = {
    series: (number | null)[][];
    labels: string[];
    override?: any;
    yAxisLabel: string[];
    hundredPercent?: {
        series: boolean;
        tooltip: boolean;
    };
    labelOption?: 'fixed' | 'dynamic';
};
declare type BarHorizontalStackedPropsType = {
    width?: number | string;
    height?: number | string;
} & BarHorizontalStackedOptionPropsType;
declare function BarHorizontalStacked({ series, labels, yAxisLabel, override, width, height, hundredPercent, labelOption, }: BarHorizontalStackedPropsType): JSX.Element;
export default BarHorizontalStacked;
