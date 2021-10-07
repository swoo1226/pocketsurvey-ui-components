export declare const sumReducer: (accumulator: number, currentValue: null | number) => number;
export declare const addComma: (x: number | string | null) => string | null;
export declare const stackedFormatter: (params: {
    dataIndex: number;
    seriesIndex: number;
    marker: string;
    seriesName: string;
    data: {
        value: number | null;
    } | number | null;
    axisValueLabel: string;
}[], series: (number | null)[][], chartType: 'vertical' | 'horizontal' | 'vertical-separated', showPercent: boolean) => string;
export declare const piePercentageFormatter: (params: {
    data: {
        id: number;
        value: number | null;
        name: string;
    };
    marker: string;
}, seriesSum: number) => string;
