import React, {useState, useRef, useEffect} from "react"
import EChartsReact from "echarts-for-react"
import { EChartsOption } from "echarts"
import { barHorizontalBaseOption, barVerticalBaseOption } from "./options"
import styled from "styled-components"
import {barHorizontalBase, barVerticalBase} from "./types"

type BarTypes =
  | "bar-horizontal-base"
  | "bar-vertical-base"

type PieTypes = "pie-analysis-report";

type EChartTypes = BarTypes | PieTypes;

const EchartsReactWrapper = styled.div``

type ChartType = barHorizontalBase | barVerticalBase

function Chart({ type, width, height, override, labels, series }: ChartType) {
  const dom = useRef<HTMLDivElement>(null)
  const [lineWidth, setLineWidth] = useState<number | null>(null)
  
  useEffect(()=>{
    const svg = dom.current?.querySelector("svg > g:last-child > path") as SVGSVGElement
    setLineWidth(svg?.getBBox()?.width)
  },[dom])

  switch (type){
  case "bar-horizontal-base":
    return  <EChartsReact
      option={barHorizontalBaseOption({
        series,
        labels,
      })}
    />

  case "bar-vertical-base": 
    return <EchartsReactWrapper ref={dom}>
      <EChartsReact
        option={barVerticalBaseOption({
          series,
          labels,
          lineWidth
        })}
        opts={{renderer: "svg"}} 
      />
    </EchartsReactWrapper>



  default:
    return (
      <></>
    )
  }
}

export default Chart
