/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react"
import {
  BarHorizontalBase,
  BarVerticalBase,
  BarVerticalStacked,
  BarHorizontalStacked,
  LineBase,
  PieBase
} from "./charts"
import styled from "styled-components"  
function Chart() {
  return <></>
}

Chart.BarHorizontalBase = BarHorizontalBase
Chart.BarVerticalBase = BarVerticalBase
Chart.BarHorizontalStacked = BarHorizontalStacked
Chart.BarVerticalStacked = BarVerticalStacked
Chart.LineBase = LineBase
Chart.PieBase = PieBase 
export default Chart
