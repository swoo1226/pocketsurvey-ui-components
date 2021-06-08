/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts"; 
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, color } from "../util/index";

type LineBaseOptionPropsType = {
  series: number[];
  labels: string[];
  hasMarker?: boolean;
  smooth?: boolean;
  labelOption?: "dynamic" | "fixed";
  override?: EChartsOption;
};

const lineBaseOption = ({
  series,
  labels,
  hasMarker,
  smooth,
  labelOption,
  override,
}: LineBaseOptionPropsType) => {
  const option: EChartsOption = {};
  option.color = color.YELLOW
  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
    position: (pos: any, params: any, el: any, elRect: any, size: any) => {
      if (labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };
  option.toolbox = {
    show: true,
  };
  option.xAxis = {
    type: "category",
    data: labels,
    axisLabel: {
      interval: 0,
    },
  };
  option.yAxis = {
    type: "value",
  };
  option.series = [
    {
      type: "line",
      smooth: smooth === true ? true : false,
      data: series,
      markPoint:
        hasMarker === true
          ? {
            data: [
              { type: "max", name: "" },
              { type: "min", name: "" },
            ],
          }
          : {
            data: []
          },
    },
  ];

  return mergeOption({
    option,
    override,
  });
};

type LineBasePropsType = {
  width?: number | string;
  height?: number | string;
} & LineBaseOptionPropsType;

function LineBase({
  width,
  height,
  series,
  labels,
  hasMarker,
  smooth,
  labelOption,
  override,
}: LineBasePropsType) {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={lineBaseOption({
        series: series as number[],
        labels,
        hasMarker,
        smooth,
        labelOption,
        override,
      })}
    />
  );
}

export default LineBase;
