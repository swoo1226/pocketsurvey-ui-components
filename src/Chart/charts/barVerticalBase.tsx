/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import React from "react";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, getColor } from "../util/index";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import debounce from "lodash/debounce";

type BarVerticalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
  lineWidth: number | null;
};

const barVerticalBaseOption = ({
  series,
  labels,
  lineWidth,
  override,
}: BarVerticalBaseOptionPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};

  option.yAxis = { type: "value", show: true };

  const dataLength = series.length;
  const colors = getColor(dataLength) as string[];

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
        color: colors[index],
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
  };

  option.grid = {
    left: "10%",
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
  });
};

type BarVerticalBasePropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalBaseOptionPropsType, "lineWidth"> & {
    reRenderWhenResize?: boolean;
  };

function BarVerticalBase({
  width,
  height,
  series,
  labels,
  override,
  reRenderWhenResize,
}: BarVerticalBasePropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);

  const calcSVGPathLineWidth = () => {
    const svg = targetRef.current?.querySelector(
      "svg > g:last-child > path"
    ) as SVGSVGElement;
    setLineWidth(svg?.getBBox()?.width);
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
    <div ref={targetRef}>
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
    </div>
  );
}

export default BarVerticalBase;