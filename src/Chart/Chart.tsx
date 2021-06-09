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
  LineBase,
  PieBase,
  Bubble,
} from "./charts" 
function Chart() {
  return <></>
}

Chart.BarHorizontalBase = BarHorizontalBase
Chart.BarVerticalBase = BarVerticalBase
Chart.BarHorizontalStacked = BarHorizontalStacked
Chart.BarVerticalStacked = BarVerticalStacked
Chart.LineBase = LineBase
Chart.PieBase = PieBase  
Chart.Bubble = Bubble

Chart.util = {
  getColors
}

export default Chart
