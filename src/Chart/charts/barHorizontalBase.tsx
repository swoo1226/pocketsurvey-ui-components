/* eslint-disable semi */
import React, { useEffect, useState, useRef } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  mergeOption,
  getMaxLabelWidth,
  color,
} from "../util/index";
import styled from "styled-components";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import { scrollBar } from "../style"
import {ellipsisBarChartData} from "../util/chartData"

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: any;
  align?: "descend" | "ascend";
  labelOption?: "fixed" | "dynamic";
};

const MAX_LABEL_LENGTH = 14;

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
  align,
  labelOption = "dynamic",
}: BarHorizontalBaseOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
    show: true,
  };
  const seriesCombinedLabels = labels
    .map((label, index) => [label, series[index]])
    .sort((a, b) => b[1] - a[1]);
  const alignedSeries = seriesCombinedLabels.map((item) => item[1]);
  const alignedLabels = seriesCombinedLabels.map((item) => item[0]);

  option.yAxis = {
    type: "category",
    z: 100,
    data: align
      ? align === "descend"
        ? alignedLabels
        : alignedLabels.reverse()
      : labels,
    show: true,
    inverse: true,
    axisLabel: {
      showMaxLabel: true,
      height: 100,
      margin: 14,
      formatter: (value: string) => {
        if (value.length >= MAX_LABEL_LENGTH) {
          return `${value.substr(0, MAX_LABEL_LENGTH)}...`;
        }
        return value;
      },
    },
  } as EChartsOption["yAxis"];

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = [];
  const standardSeries = align
    ? align === "descend"
      ? alignedSeries
      : alignedSeries.reverse()
    : series;
  standardSeries.map((number, index) => {
    seriesData.push({
      value: (number === 0 ? null : number) as number,
      itemStyle: {
        color: color.YELLOW,
        borderRadius: [0, 4, 4, 0],
      },
    });
  });

  option.series = [
    {
      data: seriesData,
      barMinWidth: 26,
      type: "bar",
      label: {
        show: true,
        color: "#000",
        position: "right",
      },
    },
  ];

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    extraCssText: "text-align: left;",
    position(pos: any, params: any, el: any, elRect: any, size: any) {
      if (labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };

  option.grid = {
    left: `${getMaxLabelWidth(labels, MAX_LABEL_LENGTH)}px`,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarHorizontalBasePropsType = {
  width?: number | string;
  height?: number | string;
  align?: "descend" | "ascend";
  labelOption?: "fixed" | "dynamic";
  defaultHeight?: number;
} & BarHorizontalBaseOptionPropsType;

const EChartsWrapper = styled.div<{
  height: number | string;
  isOverflow: boolean;
}>`
  ${scrollBar}
  ${(props) =>
    props.height && typeof props.height === "number"
      ? `height: ${props.height}px;`
      : `height: ${props.height};`}
  ${(props) => props.isOverflow && "overflow-y: scroll;"}
  overflow-x: hidden;
`;

function BarHorizontalBase({
  width,
  height,
  series,
  labels,
  override,
  align,
  labelOption = "dynamic"
}: BarHorizontalBasePropsType): JSX.Element {
  const targetRef = useRef<HTMLDivElement>(null);
  const [domHeight, setDomHeight] = useState<number>(0)
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const sizeValue = 26;
  const marginBetweenBar = 10;
  const minHeight = sizeValue * series.length + 120 + marginBetweenBar * series.length;
  // 120: 60 top padding + 60 bottom padding, marginBetweenBar: 바 차트 사이의 간격
  const defaultHeight = 560; //14개의 요소는 스크롤 없이 보여주도록 수정 

  const resizeObject = useResizeDetector({ targetRef });

  useEffect(() => {
    if (resizeObject.height){
      setIsOverflow(resizeObject.height < minHeight);
      const chartElemet = targetRef?.current?.querySelector(".echarts-for-react") ?? null
      if(chartElemet){
        const px = parseInt(getComputedStyle(chartElemet).height.replace("px",""),10)
        setDomHeight(px)
      }
    }
  }, [resizeObject.height]);

  let wrapperHeight = 0
  if(domHeight < defaultHeight){
    // 차트 돔 크기 < 기본 세로 지정 값 (14개 차트)
    if(minHeight < domHeight){
      wrapperHeight = domHeight
    } else {
      wrapperHeight = minHeight
    }
  } else {
    wrapperHeight = defaultHeight
  }

  console.log("debug",height ?? wrapperHeight, minHeight > defaultHeight ? minHeight : undefined)
 
  const chartData = ellipsisBarChartData(series, labels)
  return (
    <EChartsWrapper
      height={height ?? wrapperHeight}
      ref={targetRef}
      isOverflow={isOverflow}
    >
      <EChartsReact
        style={getSizeCSS(
          width,
          minHeight
        )}
        option={barHorizontalBaseOption({
          series: chartData.series,
          labels: chartData.labels,
          override,
          align,
          labelOption,
        })}
      />
    </EChartsWrapper>
  );
}

export default BarHorizontalBase;
