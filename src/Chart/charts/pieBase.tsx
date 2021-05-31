/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts"; 
import EChartsReact from "echarts-for-react";
import { getSizeCSS, getColor, mergeOption } from "../util/";

type PieBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
};

const PieBaseOption = ({
  series,
  labels,
  override,
}: PieBaseOptionPropsType) => {
  const option: EChartsOption = {};

  option.center = ["50%", "50%"];
  option.xAxis = {
    show: false,
  };
  option.yAxis = {
    show: false,
  };
  option.tooltip = {
    trigger: "item",
  };
  option.legend = {
    orient: "vertical",
    right: "right",
  };
  option.series = [
    {
      color: getColor(series.length),
      type: "pie",
      top: "15%",
      bottom: "15%",
      height: "70%",
      radius: "85%",
      data: series.map((value, index) => {
        return { value, name: labels[index] };
      }),
      label: {
        show: true,
        color: "#000000",
        position: "outer",
        alignTo: "edge",
        margin: 20,
        edgeDistance: "25%",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ];

  return mergeOption({
    option,
    override,
  });
};

type PieBasePropsType = {
  width?: number | string;
  height?: number | string;
} & PieBaseOptionPropsType;

function PieBase({
  series,
  labels,
  override,
  width,
  height,
}: PieBasePropsType) {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={PieBaseOption({
        series,
        labels,
        override,
      })}
    />
  );
}

export default PieBase;