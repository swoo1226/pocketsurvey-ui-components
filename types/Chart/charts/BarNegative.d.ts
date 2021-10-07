declare type BarNegativeOptionPropsType = {
    series: number[];
    labels: string[];
    override?: any;
    standard: number;
    labelOption?: 'dynamic' | 'fixed';
};
declare type BarNegativePropsType = {
    width?: number | string;
    height?: number | string;
} & BarNegativeOptionPropsType;
declare function BarNegative({ width, height, series, labels, override, standard, labelOption, }: BarNegativePropsType): JSX.Element;
export default BarNegative;
