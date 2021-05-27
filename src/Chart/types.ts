import { EChartsOption } from "echarts"

export type ChartSkeleton = {
  width?: number | string;
  height?: number | string;
  override?: EChartsOption;
};

export type BarChartPropsType = {
  series: number[];
  labels: string[];
};

export type BarHorizontalBase = {
  type: "bar-horizontal-base";
} & BarChartPropsType & ChartSkeleton;

export type BarVerticalBase = {
  type: "bar-vertical-base"; 
} & BarChartPropsType & ChartSkeleton;

export type LineBasePropsType = {
  series: number[];
  labels: string[];
  hasMarker: boolean;
  smooth: boolean;
  labelOption: "dynamic" | "fixed";
}
export type LineBase = {
  type: "line-base";
} & LineBasePropsType & ChartSkeleton