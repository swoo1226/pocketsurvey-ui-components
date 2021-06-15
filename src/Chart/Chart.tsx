/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react"
import { getColors } from "./util/index"
import {
  BarHorizontalBase,
  BarVerticalBase,
  BarVerticalStacked,
  BarHorizontalStacked,
  BarVerticalSeparated,
  LineBase,
  PieBase,
  Bubble,
  BarSwimlane
} from "./charts" 
function Chart() {
  return <></>
}

Chart.BarHorizontalBase = BarHorizontalBase
Chart.BarVerticalBase = BarVerticalBase
Chart.BarHorizontalStacked = BarHorizontalStacked
Chart.BarVerticalStacked = BarVerticalStacked
Chart.BarVerticalSeparated = BarVerticalSeparated
Chart.LineBase = LineBase
Chart.PieBase = PieBase  
Chart.Bubble = Bubble
Chart.BarSwimlane = BarSwimlane

Chart.util = {
  getColors
}

export default Chart
