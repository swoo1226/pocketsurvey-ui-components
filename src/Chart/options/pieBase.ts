/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { EChartsOption } from "echarts";
import {PieBasePropsType } from "../types"
import deepMerge from "../util/merge"
import {getColor}from "../util/color"

const PieBaseOption = ({
  series,
  labels,
  override
}: PieBasePropsType) => {
  const option: EChartsOption = {}
 
  option.center = ["50%", "50%"];
  option.xAxis = {
    show: false
  }
  option.yAxis = {
    show: false
  }
  option.tooltip = {
    trigger: "item"
  }
  option.legend = {
    orient: "vertical",
    right: "right",
  };
  option.series = [{
    color: getColor(series.length),
    type: "pie",
    top: "15%",
    bottom: "15%",
    height: "70%",
    radius: "85%",
    data: series.map((value, index)=> {
      return {value, name: labels[index]}
    }),
    label: {
      show: true,
      color: "#000000",
      position: "outer",
      alignTo: "edge",
      margin: 20,
      edgeDistance: "25%",
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    }
  }]
  
  return deepMerge({
    option,
    override
  })
}

export default PieBaseOption;