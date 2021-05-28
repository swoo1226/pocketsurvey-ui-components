/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState, useRef, useEffect } from "react"
import EChartsReact from "echarts-for-react"
import { EChartsOption } from "echarts"
import {
  barHorizontalBaseOption,
  barVerticalBaseOption,
  BarVerticalStacked,
  lineBaseOption,
  PieBaseOption
} from "./options"
import styled from "styled-components"
import { ChartPropsType } from "./types" 
import {getSizeCSS} from "./util" 

const EchartsReactWrapper = styled.div``
 

function Chart({
  type,
  width,
  height,
  override,
  labels,
  series,
  hasMarker,
  smooth,
  labelOption,
  xAxisLabel
}: ChartPropsType) {
  const wrapperDom = useRef<HTMLDivElement>(null)
  const echartDom = useRef<EChartsReact>(null)
  const [echartInstance, setEchartInstance] = useState<any>(null)
  const [lineWidth, setLineWidth] = useState<number | null>(null)
  const [option, setOption] = useState<EChartsOption>({})


  useEffect(() => {
    if(type === "bar-vertical-base"){
      const svg = wrapperDom.current?.querySelector(
        "svg > g:last-child > path"
      ) as SVGSVGElement
      setLineWidth(svg?.getBBox()?.width)
    }
  }, [wrapperDom])

  switch (type) {
  case "bar-horizontal-base":
    return (
      <EChartsReact
        style={getSizeCSS(width, height)}
        option={barHorizontalBaseOption({
          series,
          labels,
          override,
        })}
      />
    )

  case "bar-vertical-base":
    return (
      <EchartsReactWrapper ref={wrapperDom}>
        <EChartsReact
          style={getSizeCSS(width, height)}
          option={barVerticalBaseOption({
            series,
            labels,
            lineWidth,
            override,
          })}
          opts={{ renderer: "svg" }}
        />
      </EchartsReactWrapper>
    )

  case "line-base": 
    return (
      <EChartsReact
        style={getSizeCSS(width, height)}
        option={lineBaseOption({
          series: (series as number[]),
          labels,
          hasMarker: hasMarker ?? false,
          smooth: smooth ?? false,
          labelOption: labelOption ?? "dynamic",
          override,
        })}
      />
    )

  case "pie-base":
    return (
      <EChartsReact
        style={getSizeCSS(width, height)}
        option={PieBaseOption({
          series,
          labels,
          override
        })}
      />
    )

  case "bar-vertical-stacked":
    return (
      <EChartsReact
        style={getSizeCSS(width, height)}
        option={
          BarVerticalStacked({
            series: (series as (number|null)[][]),
            labels, 
            xAxisLabel: (xAxisLabel as string[]), 
            override
          })
        }
      />
    )

  default:
    return <React.Fragment />
  }
}

export default Chart
