import merge from "lodash/merge"
import cloneDeep from "lodash/cloneDeep"
import { EChartsOption } from "echarts"
import { defaultOption } from "../charts/index"
import hexMap from "./hexMap"

export const getColors = (dataLength: number): string[] | undefined => {
  return hexMap.get(dataLength.toString())
}

type deepMergePropsType = {
  option: EChartsOption;
  override?: EChartsOption;
};

export const mergeOption = ({
  option,
  override,
}: deepMergePropsType): EChartsOption => {
  const _defaultOption = cloneDeep(defaultOption)
  const _option = cloneDeep(option)
  if (override) {
    const _override = cloneDeep(override)
    return merge(_defaultOption, _option, _override)
  }
  return merge(_defaultOption, _option)
}

export const getSizeCSS = (
  width?: number | string,
  height?: number | string
) => {
  const widthCSS = width ? { width: width } : {}
  const heightCSS = height ? { height: height } : {}
  return {
    ...widthCSS,
    ...heightCSS,
  }
}

/**
 * 캔버스에 텍스트를 그려 텍스트의 width 값을 반환
 */
export const displayTextWidth = (text: string, font?: string): number => {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d") as CanvasRenderingContext2D
  context.font = font ?? "normal 12pt Noto Sans CJK KR Medium"
  const metrics = context.measureText(text)
  return metrics.width
}

/**
 * 선택지 중 가장 가로 픽셀값이 큰 텍스트의 가로 크기를 올림해서 반환
 * @param labels 선택지 텍스트가 담긴 배열
 * @param ellipsis 말 줄임표를 적용할 글자 수
 */
export const getMaxLabelWidth = (labels: string[], ellipsis?: number) => {
  let maxLabelWidth = 0
  labels.forEach((_label) => {
    let label = _label
    if(ellipsis){
      label = _label.length >= ellipsis ? `${_label.substr(0,ellipsis)}...` : _label
    }
    const labelWidth = displayTextWidth(label)
    if (maxLabelWidth < labelWidth) {
      maxLabelWidth = labelWidth
    }
  })

  if (Math.ceil(maxLabelWidth) < 50) {
    //최소 50픽셀 지정
    return 50
  } else {
    return Math.ceil(maxLabelWidth)
  }
}

export const verticalStackedFormatter = (params: {
  marker: string,
  seriesName: string,
  data: {
    value: number | null
  },
  axisValueLabel: string
}[], percentTooltip?: boolean) => {
  const maxLabelWidth = getMaxLabelWidth(params.map((item)=>item.seriesName))
  const row = params.map(
    (param) =>
      `<div style="display: flex; justify-content: space-between;">
    <div style="width: ${Math.ceil(maxLabelWidth)+3}px">
      ${param.marker}
      <span>${param.seriesName}</span>
    </div>
    <span style="font-weight:700;">${
  param.data.value ? `${param.data.value}${percentTooltip === true ? "%" : ""}` : "-"
}</span>
    </div>`
  )
  return `
    <div>
  <span>${params[0].axisValueLabel}</span>
    ${row.join("")}
    </div>
  `
}
