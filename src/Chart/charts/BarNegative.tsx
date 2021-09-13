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
  override?: any;
  standard: number;
  labelOption?: "dynamic" | "fixed";
};

const MAX_LABEL_LENGTH = 14;

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
  standard,
  labelOption = "dynamic",
}: BarNegativePropsType): JSX.Element {
  const sizeValue = 28;
  const minWidth =
    sizeValue * series.length + sizeValue * series.length * 0.2 + 120;
  const defaultWidth = 300;
  const BarNegativeOption = ({
    series,
    labels,
    override,
    standard,
    labelOption = "dynamic",
  }: BarNegativeOptionPropsType) => {
    const option: EChartsOption = {};
    option.xAxis = {
      type: "value",
      show: true,
      axisLabel: {
        show: false,
      },
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
          width: 3,
        },
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
        position: "left" | "right";
      };
    }[] = [];
    series.map((number, index) => {
      const diff = number - standard;
      seriesData.push({
        value: diff,
        name: labels[index],
        itemStyle: {
          color: diff !== 0 ? color.YELLOW : "#59C4DB",
        },
        label: {
          position: diff >= 0 ? "right" : "left",
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
          formatter: (v) => ((v.value as number) + standard).toFixed(2) + "점",
        },
      },
    ];
    option.tooltip = {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      position(pos: any, params: any, el: any, elRect: any, size: any) {
        if (labelOption === "fixed") {
          const obj: any = { top: 10 };
          obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        }
      },
      extraCssText: "text-align: left;",
      formatter: (v) => {
        return `${v[0].name}</br>${v[0].marker}</span>${(
          v[0].value + standard
        ).toFixed(2)}점`;
      },
    };

    option.grid = {
      left: `${getMaxLabelWidth(labels, MAX_LABEL_LENGTH)}px`,
    };

    return mergeOption({
      option,
      override,
    });
  };
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
        standard,
        labelOption,
      })}
      opts={{ renderer: "svg" }}
    />
  );
}

export default BarNegative;
