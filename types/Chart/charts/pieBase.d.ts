declare type PieBaseOptionPropsType = {
    series: number[];
    labels: string[];
    override?: any;
    showLabel?: boolean;
    labelOption?: 'fixed' | 'dynamic';
};
declare type PieBasePropsType = {
    width?: number | string;
    height?: number | string;
} & PieBaseOptionPropsType;
declare function PieBase({ series, labels, override, width, height, showLabel, labelOption, }: PieBasePropsType): JSX.Element;
export default PieBase;
