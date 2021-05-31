/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react"
import {
  BarHorizontalBase,
  BarVerticalBase,
  // BarVerticalStacked,
  // barHorizontalStacked,
  LineBase,
  PieBase
} from "./charts"
import styled from "styled-components"  
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
<<<<<<< Updated upstream
Chart.LineBase = LineBase
=======
Chart.BarHorizontalStacked = BarHorizontalStacked
Chart.BarVerticalStacked = BarVerticalStacked

Chart.LineBase = LineBase

>>>>>>> Stashed changes
Chart.PieBase = PieBase

export default Chart
