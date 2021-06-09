/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import {
  getColors,
  getMaxLabelWidth,
  mergeOption,
  getSizeCSS,
  chartColor,
  seriesToPercentArray
} from "../util/index";
import EChartsReact from "echarts-for-react";
import {verticalStackedFormatter} from "../util/tooltip"
type BarHorizontalStackedOptionPropsType = {
  series: (number | null)[][];
  labels: string[];
  override?: EChartsOption;
  yAxisLabel: string[];
  hundredPercent?: {
    series: boolean,
    tooltip: boolean
  }
};

const barHorizontalStackedOption = ({
  series,
  labels,
  yAxisLabel,
  override,
  hundredPercent
}: BarHorizontalStackedOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
  };

  option.yAxis = {
    type: "category",
    z: 100,
    data: yAxisLabel,
    show: true,
    inverse: true,
    axisLabel: {
      showMaxLabel: true,
      height: 100,
      margin: 14,
    },
  };

  const colors = getColors(series.length) as string[];
  const percentSeries = seriesToPercentArray(series)
  
  const extendFormatter = hundredPercent?.tooltip === true ? {formatter: (params) => {
    return verticalStackedFormatter(params, series);
  }} :{}  

  option.tooltip = {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    }, 
    ...extendFormatter
  };

  option.series = (hundredPercent?.series === true ? percentSeries : series).map((items, index) => {
    return {
      name: labels[index],
      type: "bar",
      stack: "barChart",
      label: {
        show: false,
      },
      data: items.map((item) => ({
        value: item as number,
        itemStyle: {
          color: colors[index] ?? chartColor,
        },
      })),
    };
  });

  type DataType = {
    value: number;
    itemStyle: {
      borderRadius?: number[];
    };
  }[];

  type SeriesType = {
    data: DataType;
  }[];

  const border = Array.from({
    length: (option.series[0].data as DataType).length,
  }).fill(false);

  //스택 차트 중 가장 위에 있는 차트에 borderRadius 적용
  for (let i = option.series.length - 1; i >= 0; i -= 1) {
    (option.series[i].data as DataType).forEach((item, index) => {
      if (
        option.series !== undefined &&
          border[index] === false &&
          item.value !== null &&
          item.value !== 0
      ) {
        (option.series as SeriesType)[i].data[index].itemStyle = {
          ...(option.series as SeriesType)[i].data[index].itemStyle,
          borderRadius: [0, 4, 4, 0],
        };
        border[index] = true;
      }
    });
    if (border.filter((item) => item === true).length === border.length) break;
  }

  option.grid = {
    left: `${getMaxLabelWidth(yAxisLabel)}px`,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarHorizontalStackedPropsType = {
  width?: number | string;
  height?: number | string;
} & BarHorizontalStackedOptionPropsType;

function BarHorizontalStacked({
  series,
  labels,
  yAxisLabel,
  override,
  width,
  height,
  hundredPercent
}: BarHorizontalStackedPropsType): JSX.Element {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={barHorizontalStackedOption({
        series: series as (number | null)[][],
        labels,
        yAxisLabel,
        override,
        hundredPercent
      })}
    />
  );
}

export default BarHorizontalStacked;
