import { EChartsOption } from 'echarts';
export declare type BarVerticalBasePresetType = 'multiChart/singleBar';
export declare type BarVerticalStackedPresetType = 'multiChart/mixed' | 'multiChart/multipleBar' | 'graphs/frequency';
export declare type presetType = BarVerticalBasePresetType | BarVerticalStackedPresetType;
export declare const getPreset: (preset: presetType, option?: EChartsOption | undefined) => EChartsOption;
