/* eslint-disable semi */
import { EChartsOption } from "echarts"
import { getColor } from "../util/color"
import {getMaxLabelWidth} from "../util/text"
import {barChartPropsType}from "../types"


const barHorizontalBaseOption = ({ series, labels }: barChartPropsType) => {
  const option: EChartsOption = {}
  option.xAxis = {
    type: "value",
    show: true,
  }

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
      color: "#333"
    },
    axisLine: {
      lineStyle: {
        color: "#818282",
      },
    },
    axisTick: {
      show: false,
    },
  }

  const dataLength = series.length
  const colors = getColor(dataLength) as string[]

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = []

  series.map((number, index) => {
    seriesData.push({
      value: (number === 0 ? null : number) as number,
      itemStyle: {
        color: colors[index],
        borderRadius: [0, 4, 4, 0],
      },
    })
  })

  option.series = [
    {
      data: seriesData,
      type: "bar",
      label: {
        show: true,
        color: "#000",
        position: "right"
      },
    },
  ]

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  }

  option.grid = {
    left: `${getMaxLabelWidth(labels)}px`
  }

  return option;
}

export default barHorizontalBaseOption;
