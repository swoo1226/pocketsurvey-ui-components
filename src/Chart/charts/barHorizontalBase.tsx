/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  getColors,
  mergeOption,
  getMaxLabelWidth,
} from "../util/index";

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
  ellipsis?: number; //말줄임표를 적용하는 글자 수 ex) 14글자면 14글자 부터 자르고 ... 을 붙임
};

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
  ellipsis,
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
      formatter: (value) => {
        if (ellipsis && value.length >= ellipsis) {
          return `${value.substr(0, ellipsis)}...`;
        }
        return value;
      },
    },
  };

  const dataLength = series.length;
  const colors = getColors(dataLength) as string[];

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
    left: `${getMaxLabelWidth(labels, ellipsis)}px`,
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
  ellipsis,
}: BarHorizontalBasePropsType): JSX.Element {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={barHorizontalBaseOption({
        series,
        labels,
        override,
        ellipsis,
      })}
    />
  );
}

export default BarHorizontalBase;
