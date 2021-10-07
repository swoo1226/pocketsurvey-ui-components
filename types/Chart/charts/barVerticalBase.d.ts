import { BarVerticalBasePresetType } from '../util/preset';
declare type BarVerticalBaseOptionPropsType = {
    series: number[];
    labels: string[];
    override?: any;
    lineWidth: number | null;
    preset?: BarVerticalBasePresetType;
    labelOption?: 'fixed' | 'dynamic';
};
declare type BarVerticalBasePropsType = {
    width?: number | string;
    height?: number | string;
} & Omit<BarVerticalBaseOptionPropsType, 'lineWidth'>;
declare function BarVerticalBase({ width, height, series, labels, override, preset, labelOption, }: BarVerticalBasePropsType): JSX.Element;
export default BarVerticalBase;
