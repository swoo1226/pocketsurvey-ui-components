/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import {
  getColor,
  getMaxLabelWidth,
  mergeOption,
  getSizeCSS,
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

  const colors = getColor(series.length) as string[];

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
          color: colors[index],
        },
      })),
    };
  });

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