/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import { getColor } from "../util/color"; 
import {getMaxLabelWidth} from "../util/text"
import deepMerge from "../util/merge"
import { BarHorizontalStackedProps } from "../types"

const barHorizontalBaseOption = ({
  series,
  labels,
  yAxisLabel,
  override
}: BarHorizontalStackedProps) => {
  const option: EChartsOption = {};

  option.tooltip = {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  }

  option.xAxis = {
    type: "value",
    max: 100
  }

  option.yAxis = {
    type: "category",
    z: 100,
    data: yAxisLabel,
    show: true,
    inverse: true,
    axisLabel: {
      showMaxLabel: true,
      height: 100,
      margin: 14
    }
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

  option.grid = {
    left: `${getMaxLabelWidth(yAxisLabel)}px`
  }
  
  return deepMerge({
    option,
    override 
  })
};

export default barHorizontalBaseOption;