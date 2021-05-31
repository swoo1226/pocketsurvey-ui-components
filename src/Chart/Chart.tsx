/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState, useRef, useEffect } from "react"
import EChartsReact from "echarts-for-react"
import { EChartsOption } from "echarts"
import {
  BarHorizontalBase,
  BarVerticalBase,
  BarVerticalStacked,
  BarHorizontalStacked,
  LineBase,
  PieBase
} from "./charts"
import styled from "styled-components"
import { ChartPropsType } from "./types" 
import {getSizeCSS} from "./util" 

const EchartsReactWrapper = styled.div``
 

function Chart() {
  return <></>
}

Chart.BarHorizontalBase = BarHorizontalBase
Chart.BarVerticalBase = BarVerticalBase
Chart.LineBase = LineBase
Chart.PieBase = PieBase
Chart.BarHorizontalStacked = BarHorizontalStacked
Chart.BarVerticalStacked = BarVerticalStacked
export default Chart
