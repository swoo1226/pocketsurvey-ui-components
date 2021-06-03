/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import {
  getColors,
  getMaxLabelWidth,
  mergeOption,
  getSizeCSS,
  chartColor
} from "../util/index";
import EChartsReact from "echarts-for-react";

type BarHorizontalStackedOptionPropsType = {
  series: (number | null)[][];
  labels: string[];
  override?: EChartsOption;
  yAxisLabel: string[];
};

const barHorizontalStackedOption = ({
  series,
  labels,
  yAxisLabel,
  override,
}: BarHorizontalStackedOptionPropsType) => {
  const option: EChartsOption = {};

  option.tooltip = {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  };

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

  option.series = series.map((items, index) => {
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
}: BarHorizontalStackedPropsType): JSX.Element {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={barHorizontalStackedOption({
        series: series as (number | null)[][],
        labels,
        yAxisLabel,
        override,
      })}
    />
  );
}

export default BarHorizontalStacked;
