/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EChartsOption } from "echarts";
import getDefaultOption from "./defaultOption";
import { LineBasePropsType } from "../types";
import deepMerge from "../util/merge"

const lineBaseOption = ({
  series,
  labels,
  hasMarker,
  smooth,
  labelOption,
  override
}: LineBasePropsType) => {
  const option: EChartsOption = {}
  option.color = "#FAC62D";
  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
    position: (pos: any, params: any, el: any, elRect: any, size: any) => {
      if (labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };
  option.toolbox = {
    show: true,
  };
  option.xAxis = {
    type: "category",
    data: labels,
    axisLabel: {
      interval: 0,
    },
  };
  option.yAxis = {
    type: "value",
  };
  option.series = [
    {
      type: "line",
      smooth: smooth === true ? true : false,
      data: series,
      markPoint: {
        data: [
          { type: "max", name: "" },
          { type: "min", name: "" },
        ],
      },
    },
  ]
 
 
  return deepMerge({
    option,
    override
  })
};

export default lineBaseOption;
