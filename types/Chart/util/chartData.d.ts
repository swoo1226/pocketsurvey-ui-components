declare type ZippedChartDataType = {
    series: number;
    label: string;
};
export declare type ChartDataReturnType = {
    series: number[];
    labels: string[];
};
export declare const zipChartData: (seriesList: number[], labelsList: string[]) => ZippedChartDataType[];
export declare const descSortChartData: (seriesList: number[], labelsList: string[]) => ZippedChartDataType[];
export declare const ellipsisPieChartData: (seriesList: number[], labelsList: string[]) => ChartDataReturnType;
export declare const ellipsisBarChartData: (seriesList: number[], labelsList: string[]) => ChartDataReturnType;
declare type NormalizedBarChartDataType = ChartDataReturnType & {
    score?: number;
};
export declare const normalizeBarChartData: (seriesList: number[], labelsList: string[], score?: number | undefined) => NormalizedBarChartDataType;
declare const _default: {};
export default _default;
