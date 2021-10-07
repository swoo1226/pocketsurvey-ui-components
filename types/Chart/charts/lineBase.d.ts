declare type LineBaseOptionPropsType = {
    series: number[];
    labels: string[];
    hasMarker?: boolean;
    smooth?: boolean;
    labelOption?: 'dynamic' | 'fixed';
    override?: any;
};
declare type LineBasePropsType = {
    width?: number | string;
    height?: number | string;
} & LineBaseOptionPropsType;
declare function LineBase({ width, height, series, labels, hasMarker, smooth, labelOption, override, }: LineBasePropsType): JSX.Element;
export default LineBase;
