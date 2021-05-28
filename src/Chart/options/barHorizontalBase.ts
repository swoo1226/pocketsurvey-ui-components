/* eslint-disable semi */
import { EChartsOption } from "echarts"
import { getColor } from "../util/color"
import {getMaxLabelWidth} from "../util/text"
import {BarChartPropsType}from "../types"
import  {defaultOption} from "./index"
import deepMerge from "../util/merge"

const barHorizontalBaseOption = ({ series, labels,override }: BarChartPropsType) => {
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
      margin: 14
    }
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

  return deepMerge({
    option,
    override 
  })
}

export default barHorizontalBaseOption;
