import { EChartsOption } from "echarts"

 

export type ChartSkeleton = {
  width?: number | string;
  height?: number | string;
} 


export type PropsSkeleton = {
  override?: EChartsOption;
}

export type BarHorizontalBase = {
  type: "bar-horizontal-base";
  series: number[];
  labels: string[];
  override?: EChartsOption;
}   & ChartSkeleton 

export type BarVerticalBase = {
  type: "bar-vertical-base"; 
  series: number[];
  labels: string[];
  override?: EChartsOption;
}   & ChartSkeleton;

export type BarVerticalStackedProps = {
  labels: string[];
  series: (number|null)[][];
  xAxisLabel: string[]
} & PropsSkeleton

export type BarVerticalStacked = {
  type: "bar-vertical-stacked";
} & BarVerticalStackedProps

export type LineBasePropsType = {
  hasMarker: boolean;
  smooth: boolean;
  labelOption: "dynamic" | "fixed";
  series: number[];
  labels: string[];
  override?: EChartsOption;
}  

export type LineBase = {
  type: "line-base"
} & LineBasePropsType & ChartSkeleton

 
export type PieBase = {
  type: "pie-base";
  series: number[];
  labels: string[];
  override?: EChartsOption;
}  

export type PieTypes = PieBase
export type LineTypes = LineBase
export type BarTypes = BarHorizontalBase | BarVerticalBase | BarVerticalStacked

type GetObjDifferentKeys<
  T,
  U,
  T0 = Omit<T, keyof U> & Omit<U, keyof T>,
  T1 = { [K in keyof T0]: T0[K] }
 > = T1

 type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>


export type MergeTwoObjects<
  T,
  U, 
  // non shared keys are optional
  T0 = Partial<GetObjDifferentKeys<T, U>>
  // shared keys are recursively resolved by `DeepMergeTwoTypes<...>`
  & {[K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]>},
  T1 = { [K in keyof T0]: T0[K] }
> = T1

export type DeepMergeTwoTypes<T, U> =
  // check if generic types are arrays and unwrap it and do the recursion
  [T, U] extends [{ [key: string]: unknown}, { [key: string]: unknown } ]
    ? MergeTwoObjects<T, U>
    : T | U

export type ChartPropsType = DeepMergeTwoTypes<DeepMergeTwoTypes<DeepMergeTwoTypes<PieTypes, LineTypes>, BarTypes>,BarVerticalStacked>