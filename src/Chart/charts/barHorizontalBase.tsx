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
  align?: "descend"| "ascend";
  labelOption?: "fixed" | "dynamic";
};

const MAX_LABEL_LENGTH = 14

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
  align,
  labelOption="dynamic",
}: BarHorizontalBaseOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
    show: true,
  };
  console.log(labels, series)
  const seriesCombinedLabels = labels.map((label, index) => [label, series[index]]).sort((a,b) => b[1] - a[1])
  const alignedSeries = seriesCombinedLabels.map(item => item[1])
  const alignedLabels = seriesCombinedLabels.map(item => item[0])
  console.log(seriesCombinedLabels)
  option.yAxis = {
    type: "category",
    z: 100,
    data: align ? align === "descend" ? alignedLabels : alignedLabels.reverse() : labels,
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
  } as EChartsOption["yAxis"];

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = [];
  const standardSeries = align ? align === "descend" ? alignedSeries : alignedSeries.reverse() : series
  standardSeries.map((number, index) => {
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
    extraCssText: "text-align: left;",
    position(
      pos: any,
      params: any,
      el: any,
      elRect: any,
      size: any,
    ) {
      if(labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
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
  align?: "descend"| "ascend";
  labelOption?: "fixed" | "dynamic";
} & BarHorizontalBaseOptionPropsType

function BarHorizontalBase({
  width,
  height,
  series,
  labels,
  override,
  align,
  labelOption="dynamic",
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
        override,
        align,
        labelOption,
      })}
    />
  );
}

export default BarHorizontalBase;
