/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  mergeOption,
  getMaxLabelWidth,
  color
} from "../util/index";

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
};

const MAX_LABEL_LENGTH = 14

const barHorizontalBaseOption = ({
  series,
  labels,
  override
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
      formatter: (value: string) => {
        if (value.length >= MAX_LABEL_LENGTH) {
          return `${value.substr(0, MAX_LABEL_LENGTH)}...`;
        }
        return value;
      },
    },
  } as EChartsOption["yAxis"]

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
        color: color.YELLOW,
        borderRadius: [0, 4, 4, 0],
      },
    });
  });

  option.series = [
    {
      data: seriesData,
      barMinWidth: 26,
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
    extraCssText: "text-align: left;"
  };

  option.grid = {
    left: `${getMaxLabelWidth(labels, MAX_LABEL_LENGTH)}px`
  };

  return mergeOption({
    option,
    override,
  });
};

type BarHorizontalBasePropsType = {
  width?: number | string;
  height?: number | string;
} & BarHorizontalBaseOptionPropsType

function BarHorizontalBase({
  width,
  height,
  series,
  labels,
  override
}: BarHorizontalBasePropsType): JSX.Element {
  const sizeValue = 28
  const minWidth = (sizeValue * series.length) + ((sizeValue * series.length) * 0.2) + 120
  const defaultWidth = 300

  return (
    <EChartsReact
      style={getSizeCSS(width, minWidth > defaultWidth ? minWidth: defaultWidth)}
      option={barHorizontalBaseOption({
        series,
        labels,
        override
      })}
    />
  );
}

export default BarHorizontalBase;
