/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, getColors, mergeOption, chartColor } from "../util";
import { piePercentageFormatter, sumReducer } from "../util/tooltip" 

type PieBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption,
  showLabel?: boolean
};

const PieBaseOption = ({
  series,
  labels,
  override, 
  showLabel
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
    formatter: (params) => {
      return piePercentageFormatter(params, series.reduce(sumReducer))
    },
  };
  option.legend = {
    orient: "vertical",
    right: "right",
  };
  option.series = [
    {
      color: series.length <= 26 ? getColors(series.length) : chartColor,
      type: "pie",
      top: "15%",
      bottom: "15%",
      height: "70%",
      radius: "85%",
      data: series.map((value, index) => {
        return { value, name: labels[index] };
      }),
      label: {
        show: showLabel === undefined ? true : showLabel,
        color: "#0e0c0c",
        position: "outer",
        alignTo: "edge",
        margin: 20,
        edgeDistance: "25%",
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
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
  showLabel
}: PieBasePropsType) {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={PieBaseOption({
        series,
        labels,
        override,
        showLabel
      })}
    />
  );
}

export default PieBase;
