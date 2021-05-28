/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import { getColor } from "../util/color";
import { BarChartPropsType } from "../types";
import { defaultOption } from "./index"
import deepMerge from "../util/merge"

const barVerticalBaseOption = ({
  series,
  labels,
  lineWidth,
  override
}: BarChartPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};

  option.yAxis = { type: "value", show: true };

  const dataLength = series.length;
  const colors = getColor(dataLength) as string[];

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
        borderRadius: [4, 4, 0, 0],
      },
    });
  });

  option.series = [
    {
      data: seriesData,
      type: "bar",
      label: {
        show: true,
        color: "#000000",
        position: "top",
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
    left: "10%",
  };

  option.xAxis = {
    type: "category",
    data: labels,
    axisLabel: {
      interval: 0,
      margin: 14,
      width: lineWidth ? Math.ceil(lineWidth / series.length) : 0,
      //@ts-ignore
      overflow: "truncate",
    },
    show: lineWidth ? true : false,
  };

  option.barCategoryGap = "40%";

  return deepMerge({
    option,
    override 
  })
};

export default barVerticalBaseOption;
