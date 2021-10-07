import { BarVerticalStackedPresetType } from '../util/preset';
declare type BarVerticalStackedOptionPropsType = {
    series: (number | null)[][];
    labels: string[];
    override?: any;
    xAxisLabel: string[];
    line?: {
        name: string;
        series: (number | null)[];
    }[];
    lineWidth: number | null;
    hundredPercent?: {
        series: boolean;
        tooltip: boolean;
    };
    nps?: boolean;
    preset?: BarVerticalStackedPresetType;
    labelOption?: 'fixed' | 'dynamic';
};
declare type BarVerticalStackedPropsType = {
    width?: number | string;
    height?: number | string;
} & Omit<BarVerticalStackedOptionPropsType, 'lineWidth'>;
declare function BarVerticalStacked({ series, labels, xAxisLabel, override, line, width, height, hundredPercent, nps, preset, labelOption, }: BarVerticalStackedPropsType): JSX.Element;
export default BarVerticalStacked;
