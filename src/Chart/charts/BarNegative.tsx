/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  mergeOption,
  getMaxLabelWidth,
  color,
} from "../util/index";

type BarNegativeOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
  standard: number;
};

const MAX_LABEL_LENGTH = 14;

const BarNegativeOption = ({
  series,
  labels,
  override,
  standard
}: BarNegativeOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
    show: true,
    axisLabel: {
        show: false
    }
  };

  option.yAxis = {
    type: "category",
    z: 10,
    data: labels,
    show: true,
    name: `평균 점수 ${standard}`,
    nameLocation: "start",
    inverse: true,
    axisLine: {
        lineStyle: {
            color: "#59C4DB",
            width: 3
        }
    },
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
  } as EChartsOption["yAxis"];

  const seriesData: {
    value: number;
    name: string;
    itemStyle: {
      color: string;
    };
    label: {
        position: "left" | "right"
    }
  }[] = [];
  series.map((number, index) => {
    console.log("기준 점수 ", standard)
    console.log("series 점수 ", number)
    const diff = number - standard
    console.log("점수 차이", diff)
    seriesData.push({
      value: diff,
      name: labels[index],
      itemStyle: {
        color: color.YELLOW,
      },
      label: {
        position: diff >= 0 ? "right" : "left"
      }
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
        formatter: (v) => (v.value as number + standard).toFixed(0)
      },
    },
  ];

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    extraCssText: "text-align: left;",
    formatter: (v) => {console.log(v[0]); return `${v[0].name}</br>${v[0].marker}${v[0].value + standard}`;}
  };

  option.grid = {
    left: `${getMaxLabelWidth(labels, MAX_LABEL_LENGTH)}px`,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarNegativePropsType = {
  width?: number | string;
  height?: number | string;
} & BarNegativeOptionPropsType;

function BarNegative({
  width,
  height,
  series,
  labels,
  override,
  standard
}: BarNegativePropsType): JSX.Element {
  const sizeValue = 28;
  const minWidth =
    sizeValue * series.length + sizeValue * series.length * 0.2 + 120;
  const defaultWidth = 300;

  return (
    <EChartsReact
      style={getSizeCSS(
        width,
        minWidth > defaultWidth ? minWidth : defaultWidth
      )}
      option={BarNegativeOption({
        series,
        labels,
        override,
        standard
      })}
    />
  );
}

export default BarNegative;
