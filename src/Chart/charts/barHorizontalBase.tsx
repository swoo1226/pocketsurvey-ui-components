/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  getColorss,
  mergeOption,
  getMaxLabelWidth,
} from "../util/index";

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
};

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
}: BarHorizontalBaseOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
    show: true,
  };

  option.yAxis = {
    type: "category",
    z: 100,
    data: labels,
    show: true,
    inverse: true,
    axisLabel: {
      showMaxLabel: true,
      height: 100,
      margin: 14,
    },
  };

  const dataLength = series.length;
  const colors = getColorss(dataLength) as string[];

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = [];

  series.map((number, index) => {
    seriesData.push({
      value: (number === 0 ? null : number) as number,
      itemStyle: {
        color: colors[index],
        borderRadius: [0, 4, 4, 0],
      },
    });
  });

  option.series = [
    {
      data: seriesData,
      type: "bar",
      label: {
        show: true,
        color: "#000",
        position: "right",
      },
    },
  ];

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  };

  option.grid = {
    left: `${getMaxLabelWidth(labels)}px`,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarHorizontalBasePropsType = {
  width?: number | string;
  height?: number | string;
} & BarHorizontalBaseOptionPropsType;

function BarHorizontalBase({
  width,
  height,
  series,
  labels,
  override,
}: BarHorizontalBasePropsType): JSX.Element {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={barHorizontalBaseOption({
        series,
        labels,
        override,
      })}
    />
  );
}

export default BarHorizontalBase;
