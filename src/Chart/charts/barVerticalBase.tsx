/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import React from "react";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, color } from "../util/index";
import { getPreset, BarVerticalBasePresetType } from "../util/preset";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import debounce from "lodash/debounce";
import styled from "styled-components";
import { scrollBar } from "../style"

type BarVerticalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
  lineWidth: number | null;
  preset?: BarVerticalBasePresetType;
  labelOption?: "fixed" | "dynamic";
};

const barVerticalBaseOption = ({
  series,
  labels,
  lineWidth,
  override,
  preset,
  labelOption = "dynamic",
}: BarVerticalBaseOptionPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};

  option.yAxis = { type: "value", show: true };

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = [];

  series.map((number, index) => {
    seriesData.push({
      value: (number === 0 ? null : number) as number,
      itemStyle: {
        color: color.YELLOW,
        borderRadius: [4, 4, 0, 0],
      },
    });
  });

  option.series = [
    {
      data: seriesData,
      type: "bar",
      label: {
        show: true,
        color: "#000000",
        position: "top",
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
    left: "100px",
    right: "100px",
  };

  option.xAxis = {
    type: "category",
    data: labels,
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
    preset: preset ? getPreset(preset) : undefined,
  });
};

type BarVerticalBasePropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalBaseOptionPropsType, "lineWidth">;

const EChartsWrapper = styled.div<{
  minify: boolean;
  width?: string | number;
}>`
  ${scrollBar}
  ${(props) => props.minify && "overflow-x: scroll;"}
  ${(props) =>
    props.width
      ? typeof props.width === "number"
        ? `width: ${props.width}px;`
        : `width: ${props.width};`
      : ""}
`;

function BarVerticalBase({
  width,
  height,
  series,
  labels,
  override,
  preset,
  labelOption = "dynamic",
}: BarVerticalBasePropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const [minify, setMinify] = React.useState<boolean>(true);

  const sizeValue = 70;
  const minWidth = sizeValue * series.length + 200;

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

  const delayed = React.useCallback(
    debounce(() => calcSVGPathLineWidth(), 500),
    []
  );

  const resizeObject = useResizeDetector({ targetRef });
  React.useEffect(() => {
    calcSVGPathLineWidth();
  }, []);
  React.useEffect(() => {
    delayed();
  }, [resizeObject.width]);

  return (
    <EChartsWrapper ref={targetRef} width={width} minify={minify}>
      <EChartsReact
        style={getSizeCSS(minify ? minWidth : undefined, height)}
        option={barVerticalBaseOption({
          series,
          labels,
          lineWidth,
          override,
          preset,
          labelOption,
        })}
        opts={{ renderer: "svg" }}
      />
    </EChartsWrapper>
  );
}

export default BarVerticalBase;
