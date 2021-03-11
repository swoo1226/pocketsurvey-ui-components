import React from "react"
import styled from "styled-components"

const ProgressBarDiv = styled.div<{
  percent: number
  barColor: string
  thickness: number
}>`
  position: absolute;
  height: ${(props) => props.thickness}px;
  width: ${(props) => props.percent}%;
  background-color: ${(props) => props.barColor};
  transition: width 0.2s;
  border-radius: 0 ${(props) => props.thickness / 1.7}px ${(props) => props.thickness / 1.7}px ${(props) => props.thickness / 1.7}px;
`

type ProgressBarType = {
  percent: number
  barColor: string
  thickness: number
  className?: string
}

function ProgressBar({ percent, barColor, thickness, className }: ProgressBarType): JSX.Element {
  return <ProgressBarDiv data-testid="progressbar" percent={percent} barColor={barColor} thickness={thickness} className={className} />
}

export default ProgressBar
