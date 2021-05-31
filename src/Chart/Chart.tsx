/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState, useRef, useEffect } from "react"
import EChartsReact from "echarts-for-react"
import { EChartsOption } from "echarts"
import {
  BarHorizontalBase,
  BarVerticalBase,
  // BarVerticalStacked,
  // barHorizontalStacked,
  LineBase,
  PieBase
} from "./charts"
import styled from "styled-components"
import { ChartPropsType } from "./types" 
import {getSizeCSS} from "./util" 

const EchartsReactWrapper = styled.div``
 

function Chart() {
  return <></>
  // switch (type) {
  // case "bar-vertical-stacked":
  //   return (
  //     <EChartsReact
  //       style={getSizeCSS(width, height)}
  //       option={
  //         BarVerticalStacked({
  //           series: (series as (number|null)[][]),
  //           labels, 
  //           xAxisLabel: (xAxisLabel as string[]), 
  //           override,
  //           lineSeries,
  //           lineName
  //         })
  //       }
  //     />
  //   )

  // case "bar-horizontal-stacked":
  //   return (
  //     <EChartsReact
  //       style={getSizeCSS(width, height)}
  //       option={
  //         barHorizontalStacked({
  //           series: (series as (number|null)[][]),
  //           labels, 
  //           yAxisLabel: (yAxisLabel as string[]), 
  //           override
  //         })
  //       }
  //     />
  //   )

  // default:
  //   return <React.Fragment />
  // }
}

Chart.BarHorizontalBase = BarHorizontalBase
Chart.BarVerticalBase = BarVerticalBase
Chart.LineBase = LineBase
Chart.PieBase = PieBase

export default Chart
