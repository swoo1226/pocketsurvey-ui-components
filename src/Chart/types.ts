import { EChartsOption } from "echarts"

export type barChartPropsType = {
  series: number[];
  labels: string[];
};

export type ChartSkeleton = {
  width?: number | string;
  height?: number | string;
  override?: EChartsOption;
};

export type barHorizontalBase = {
  type: "bar-horizontal-base";
  labels: string[];
  series: number[];
} & ChartSkeleton;

export type barVerticalBase = {
  type: "bar-vertical-base";
  labels: string[];
  series: number[];
} & ChartSkeleton;

export type line = {
    hasMarker?: boolean
}