declare type BarHorizontalBaseOptionPropsType = {
    series: number[];
    labels: string[];
    override?: any;
    align?: 'descend' | 'ascend';
    labelOption?: 'fixed' | 'dynamic';
};
declare type BarHorizontalBasePropsType = {
    width?: number | string;
    align?: 'descend' | 'ascend';
    labelOption?: 'fixed' | 'dynamic';
    notHasEtc?: boolean;
} & BarHorizontalBaseOptionPropsType;
declare function BarHorizontalBase({ width, series, labels, override, align, labelOption, notHasEtc, }: BarHorizontalBasePropsType): JSX.Element;
export default BarHorizontalBase;
