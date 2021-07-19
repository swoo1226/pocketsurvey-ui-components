/* eslint-disable semi */
import merge from "lodash/merge";
import cloneDeep from "lodash/cloneDeep";
import { EChartsOption } from "echarts";
import { defaultOption } from "../charts/index";
import hexMap from "./hexMap";
import { sumReducer } from "./tooltip";
import chroma from "chroma-js";

import { getColors, color } from "./color";
export { getColors, color };

type deepMergePropsType = {
  option: EChartsOption;
  preset?: EChartsOption;
  override?: any;
};

export const mergeOption = ({
  option,
  preset,
  override
}: deepMergePropsType): EChartsOption => {
  const _defaultOption = cloneDeep(defaultOption);
  const _option = cloneDeep(option);
  const _preset = preset ? cloneDeep(preset) : {};
  const _override = override ? cloneDeep(override) : {};
  
  return merge(_defaultOption, _option, _preset, _override)
};

export const getSizeCSS = (
  width?: number | string,
  height?: number | string
) => {
  const widthCSS = width ? { width: width } : {};
  const heightCSS = height ? { height: height } : {};
  return {
    ...widthCSS,
    ...heightCSS,
  };
};

/**
 * 캔버스에 텍스트를 그려 텍스트의 width 값을 반환
 */
export const displayTextWidth = (text: string, font?: string): number => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.font = font ?? "normal 12pt Noto Sans CJK KR Medium";
  const metrics = context.measureText(text);
  return metrics.width;
};

/**
 * 선택지 중 가장 가로 픽셀값이 큰 텍스트의 가로 크기를 올림해서 반환
 * @param labels 선택지 텍스트가 담긴 배열
 * @param ellipsis 말 줄임표를 적용할 글자 수
 */
export const getMaxLabelWidth = (labels: string[], ellipsis?: number) => {
  let maxLabelWidth = 0;
  labels.forEach((_label) => {
    let label = _label;
    if (ellipsis) {
      label =
        _label.length >= ellipsis ? `${_label.substr(0, ellipsis)}...` : _label;
    }
    const labelWidth = displayTextWidth(label);
    if (maxLabelWidth < labelWidth) {
      maxLabelWidth = labelWidth;
    }
  });

  if (Math.ceil(maxLabelWidth) < 50) {
    //최소 50픽셀 지정
    return 50;
  } else {
    return Math.ceil(maxLabelWidth);
  }
};

const generate2DArray = (n: number, m: number) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(new Array(m).fill(null));
  }
  return arr;
};

export const seriesToPercentArray = (series: (number | null)[][]) => {
  const n = series.length;
  const m = series[0].length;
  const percentArray = generate2DArray(n, m);

  for (let j = 0; j < m; j++) {
    const vertical = [];
    for (let i = 0; i < series.length; i++) {
      vertical.push(series[i][j]);
    }
    const verticalSum = vertical.reduce(
      sumReducer as (
        accumulator: number | null,
        currentValue: null | number
      ) => number
    ) as number;

    for (let i = 0; i < n; i++) {
      const value = series[i][j];
      percentArray[i][j] = value
        ? parseFloat(((value / verticalSum) * 100).toFixed(2))
        : null;
    }
  }

  return percentArray;
};
