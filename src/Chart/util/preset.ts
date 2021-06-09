import { EChartsOption } from "echarts"
import {color} from "../util/color"

export type BarVerticalBasePresetType = "multiChart/singleBar";
export type BarVerticalStackedPresetType =
  | "multiChart/mixed"
  | "multiChart/multipleBar"
  | "graphs/frequency";

export type presetType = BarVerticalBasePresetType | BarVerticalStackedPresetType

const multiChart = {
  mixed: () => {
    return {
      stroke: {
        width: [0, 2],
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          foreColor: "black",
          borderColor: "black",
          borderWidth: 0.1,
          opacity: 0.7,
          dropShadow: {},
        },
        style: {
          colors: ["#fdeeb3", "#59c4db"], // 막대 글씨 컬러, 선 컬러
        },
      },
      yAxis: [
        {
          type: "value",
          name: "응답률(%)",
          nameLocation: "middle",
          nameGap: 50,
          min: 0,
          max: 100,
          interval: 10,
        },
        {
          opposite: true,
          type: "value",
          name: "점수",
          min: 0,
          max: 100,
          position: "right",
          interval: 10,
          axisLine: {
            onZero: 0,
          },
          nameLocation: "middle",
          nameGap: 50,
        },
      ],
    } as EChartsOption
  },
  multipleBar: () => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      yAxis: {
        type: "value",
        show: true,
        min: 0,
        max: 100,
        interval: 10,
      },
    } as EChartsOption
  },
  singleBar: (option?:EChartsOption) => {
    return {
      legend: {
        data: (option?.xAxis as {
          data: string[]
        })?.data ?? undefined
      },
      yAxis: [
        {
          type: "value",
          name: "점수",
          nameLocation: "middle",
          nameGap: 50,
          min: 0,
          max: 100,
          interval: 10,
        },
        {
          opposite: true,
          type: "value",
          name: "평균 점수",
          min: 0,
          max: 100,
          position: "middle",
          interval: 10,
          axisLine: {
            onZero: 0,
          },
          nameLocation: "middle",
          nameGap: 50,
        },
      ],
      series: [
        {
          markLine: {
            symbol: "none",
            data: [{ type: "average", name: "" }],
            label: {
              show: true,
              formatter: " {c}",
              position: "middle",
              fontSize: 14,
            },
            lineStyle: {
              color: color.BLACK,
              type: "solid",
              width: 1.5,
            },
          },
        }
      ]
    } as EChartsOption
  },
}

const graphs = {
  frequency: () => {
    return {
      yAxis: {
        max: 100,
      },
    } as EChartsOption
  },
}

export const getPreset = (preset: presetType, option?:EChartsOption):EChartsOption => {
  switch (preset) {
  case "multiChart/mixed":
    return multiChart.mixed()
  case "multiChart/multipleBar":
    return multiChart.multipleBar()
  case "multiChart/singleBar":
    return multiChart.singleBar(option)
  case "graphs/frequency":
    return graphs.frequency()
  default:
    return {}
  }
}
