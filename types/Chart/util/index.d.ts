import { EChartsOption } from 'echarts';
import { getColors, color } from './color';
export { getColors, color };
declare type deepMergePropsType = {
    option: EChartsOption;
    preset?: EChartsOption;
    override?: any;
};
export declare const mergeOption: ({ option, preset, override, }: deepMergePropsType) => EChartsOption;
export declare const getSizeCSS: (width?: string | number | undefined, height?: string | number | undefined) => {
    height: string | number;
    width: string | number;
} | {
    height?: undefined;
    width: string | number;
} | {
    height: string | number;
    width?: undefined;
} | {
    height?: undefined;
    width?: undefined;
};
/**
 * 캔버스에 텍스트를 그려 텍스트의 width 값을 반환
 */
export declare const displayTextWidth: (text: string, font?: string | undefined) => number;
/**
 * 선택지 중 가장 가로 픽셀값이 큰 텍스트의 가로 크기를 올림해서 반환
 * @param labels 선택지 텍스트가 담긴 배열
 * @param ellipsis 말 줄임표를 적용할 글자 수
 */
export declare const getMaxLabelWidth: (labels: string[], ellipsis?: number | undefined) => number;
export declare const seriesToPercentArray: (series: (number | null)[][]) => any[][];
