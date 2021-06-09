/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, chartColor } from "../util/index";

// type LineBaseOptionPropsType = {
//   series: number[];
//   labels: string[];
//   hasMarker?: boolean;
//   smooth?: boolean;
//   labelOption?: "dynamic" | "fixed";
//   override?: EChartsOption;
// };

const data = [
  [
    [1622937600, 62.9, 20194354, "North Korea", 1990],
    [1623024000, 67.9, 20194354, "North Korea", 2000],
    [1623110400, 71.4, 25155317, "North Korea", 2010],
  ],
  [
    [1622937600, 50.3, 20194354, "New Zealand", 1990],
    [1623024000, 55.4, 3397534, "New Zealand", 2000],
    [1623110400, 80.6, 4528526, "New Zealand", 2010],
  ],
  [
    [1622937600, 80.9, 20194354, "South Korea", 1990],
    [1623024000, 72, 42972254, "South Korea", 2000],
    [1623110400, 80.7, 50293439, "South Korea", 2010],
  ],
  [
    [1622937600, 68.9, 20194354, "Norway", 1990],
    [1623024000, 76.8, 4240375, "Norway", 2000],
    [1623110400, 81.6, 5210967, "Norway", 2010],
  ],
  [
    [1622937600, 74.9, 20194354, "Poland", 1990],
    [1623024000, 70.8, 38195258, "Poland", 2000],
    [1623110400, 77.3, 38611794, "Poland", 2010],
  ],
];
const bubbleOption = {
  backgroundColor: "#FFFFFF",
  title: {
    text: "1990 与 2010 年各国家人均寿命与 GDP",
    left: "5%",
    top: "3%",
  },
  legend: {
    right: "10%",
    top: "3%",
    data: ["1990", "2015"],
  },
  grid: {
    left: "8%",
    top: "10%",
  },
  xAxis: {
    type: "time",
    axisLabel: {
      formatter: (value: any) => {
        return new Date(value * 1000).toLocaleDateString("ko");
      },
    },
  },
  yAxis: {
    scale: true,
  },
  series: data.map((item) => ({
    name: item[3],
    type: "scatter",
    data: item,
    symbolSize: function (data: any) {
      return Math.sqrt(data[2]) / 1e2;
    },
    emphasis: {
      focus: "series",
      label: {
        show: true,
        formatter: function (param: any) {
          return param.data[3];
        },
        position: "top",
      },
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: "rgba(120, 36, 50, 0.5)",
      shadowOffsetY: 5,
      color: chartColor,
    },
  })),
  // series: [
  //   {
  //     name: "1990",
  //     type: "scatter",
  //     data: data[0],
  //     symbolSize: function (data: any) {
  //       return Math.sqrt(data[2]) / 2e2;
  //     },
  //     emphasis: {
  //       focus: "series",
  //       label: {
  //         show: true,
  //         formatter: function (param: any) {
  //           return param.data[3];
  //         },
  //         position: "top",
  //       },
  //     },
  //     itemStyle: {
  //       shadowBlur: 10,
  //       shadowColor: "rgba(120, 36, 50, 0.5)",
  //       shadowOffsetY: 5,
  //       color: chartColor,
  //     },
  //   },
  //   {
  //     name: "2015",
  //     type: "scatter",
  //     data: data[1],
  //     symbolSize: function (data: any) {
  //       return Math.sqrt(data[2]) / 2e2;
  //     },
  //     emphasis: {
  //       focus: "series",
  //       label: {
  //         show: true,
  //         formatter: function (param: any) {
  //           return param.data[3];
  //         },
  //         position: "top",
  //       },
  //     },
  //     itemStyle: {
  //       shadowBlur: 10,
  //       shadowColor: "rgba(25, 100, 150, 0.5)",
  //       shadowOffsetY: 5,
  //       color: chartColor,
  //     },
  //   },
  // ],
};

function Bubble() {
  return <EChartsReact style={getSizeCSS(700, 500)} option={bubbleOption} />
}

export default Bubble
