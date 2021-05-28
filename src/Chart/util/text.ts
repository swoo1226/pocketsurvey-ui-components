/* eslint-disable semi */
/**
 * 캔버스에 텍스트를 그려 텍스트의 width 값을 반환합니다.
 */
export const displayTextWidth = (text: string, font?: string): number => {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d") as CanvasRenderingContext2D
  context.font = font ?? "normal 12pt Noto Sans CJK KR Medium"
  const metrics = context.measureText(text)
  return metrics.width
}

/**
 * 선택지 중 가장 가로 픽셀값이 큰 텍스트의 가로 크기를 올림해서 반환합니다.
 * @param labels 선택지 텍스트가 담긴 배열
 */
export const getMaxLabelWidth = (labels:string[]) => {
  let maxLabelWidth = 0
  labels.forEach((label) => {
    const labelWidth = displayTextWidth(label)
    if (maxLabelWidth < labelWidth) {
      maxLabelWidth = labelWidth
    }
  })

  if (Math.ceil(maxLabelWidth) < 50){
    return 50
  } else {
    return Math.ceil(maxLabelWidth);
  }
};