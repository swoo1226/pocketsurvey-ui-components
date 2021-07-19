/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import React from "react";
import EChartsReact from "echarts-for-react";
import {
  getSizeCSS,
  mergeOption,
  getColors,
  seriesToPercentArray,
} from "../util/index";
import { stackedFormatter } from "../util/tooltip";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import styled from "styled-components";
import { scrollBar } from "../style"

type BarVerticalSeparatedOptionPropsType = {
  series: number[][];
  xAxisLabel: string[];
  label: string[];
  override?: any;
  lineWidth: number | null;
  hundredPercent?: {
    tooltip: boolean;
    series: boolean;
  };
  labelOption?: "fixed" | "dynamic";
};

const getSeries = (series: number[][], label: string[], colors: string[]) => {
  const seriesData: {
    data: number[];
    type: string;
    name: string;
    color: string;
    itemStyle: {
      borderRadius: number[];
    };
  }[] = [];

  for (let i = 0; i < series.length; i++) {
    seriesData.push({
      data: series[i],
      type: "bar",
      name: label[i],
      color: colors[i],
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    });
  }

  return seriesData;
};

const barVerticalSeparatedOption = ({
  series,
  label,
  xAxisLabel,
  lineWidth,
  override,
  hundredPercent,
  labelOption="dynamic",
}: BarVerticalSeparatedOptionPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};
  const colors = getColors.barStacked(series.length);
  const percentSeries = seriesToPercentArray(series);

  option.yAxis = { type: "value", show: true };

  option.series = getSeries(
    hundredPercent?.series === true ? percentSeries : series,
    label,
    colors
  ) as EChartsOption["series"];

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (params: any) => {
      return stackedFormatter(
        params,
        series,
        "vertical-separated",
        hundredPercent?.tooltip ?? false
      );
    },
    position(
      pos: any,
      params: any,
      el: any,
      elRect: any,
      size: any,
    ) {
      if(labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };

  option.legend = {
    orient: "horizontal",
    x: "center",
    y: "bottom",
  };

  option.grid = {
    left: "100px",
    right: "100px",
  };

  option.xAxis = {
    type: "category",
    data: xAxisLabel,
    axisLabel: {
      interval: 0,
      margin: 14,
      width: lineWidth ? Math.ceil(lineWidth / series.length) : 0,
      //@ts-ignore
      overflow: "truncate",
    },
    show: lineWidth ? true : false,
  };

  option.barCategoryGap = "40%";

  return mergeOption({
    option,
    override,
  });
};

type BarVerticalSeparatedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalSeparatedOptionPropsType, "lineWidth">;

const EchartsWrapper = styled.div<{
  minify: boolean;
  width?: string | number;
  height?: string | number;
}>`
  ${scrollBar}
  ${(props) => props.minify && "overflow-x: scroll;"}
  ${(props) =>
    props.width
      ? typeof props.width === "number"
        ? `width: ${props.width}px;`
        : `width: ${props.width};`
      : ""}
  ${(props) =>
    props.height
      ? typeof props.height === "number"
        ? `height: ${props.height}px;`
        : `height: ${props.height};`
      : ""}
`;

function BarVerticalSeparated({
  width,
  height,
  series,
  label,
  xAxisLabel,
  override,
  hundredPercent,
  labelOption="dynamics",
}: BarVerticalSeparatedPropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const [minify, setMinify] = React.useState<boolean>(true);

  const sizeValue = series.length * 30;
  const minWidth = sizeValue * xAxisLabel.length + 200;

  const calcSVGPathLineWidth = () => {
    const svg = targetRef.current?.querySelector(
      "svg > g:last-child > path"
    ) as SVGSVGElement;
    setLineWidth(svg?.getBBox()?.width);
    const clientWidth = targetRef.current?.clientWidth;
    if (clientWidth) {
      setMinify(minWidth > clientWidth);
    }
  };

  const resizeObject = useResizeDetector({ targetRef });
  React.useEffect(() => {
    calcSVGPathLineWidth();
  }, []);
  React.useEffect(() => {
    calcSVGPathLineWidth();
  }, [resizeObject.width]);

  return (
    <EchartsWrapper ref={targetRef} minify={minify} width={width}>
      <EChartsReact
        style={getSizeCSS(minify ? minWidth : undefined, height)}
        option={barVerticalSeparatedOption({
          series,
          label,
          xAxisLabel,
          lineWidth,
          override,
          hundredPercent,
          labelOption,
        })}
        opts={{ renderer: "svg" }}
      />
    </EchartsWrapper>
  );
}

export default BarVerticalSeparated;
