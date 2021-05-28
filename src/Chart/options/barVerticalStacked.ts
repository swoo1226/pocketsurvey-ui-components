/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import { getColor } from "../util/color"; 
import deepMerge from "../util/merge"
import {BarVerticalStackedProps } from "../types"

const barVerticalBaseOption = ({
  series,
  labels,
  xAxisLabel,
  override
}: BarVerticalStackedProps) => {
  const option: EChartsOption = {};

  option.tooltip = {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  }

  option.yAxis = {
    type: "value",
    max: 100
  }

  option.xAxis = {
    data: xAxisLabel
  }

  const colors = getColor(series.length) as string[]

  
  option.series = series.map((items, index)=>{
    return {
      name: labels[index],
      type: "bar",
      stack: "barChart",
      label: {
        show: false
      },
      data: items.map((item)=> ({
        value: (item as number),
        itemStyle: {
          color: colors[index]
        }
      }))
    }
  })
  
  return deepMerge({
    option,
    override 
  })
};

export default barVerticalBaseOption;