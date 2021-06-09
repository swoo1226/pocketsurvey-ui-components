/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from "echarts";
import React from "react";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, chartColor, getColors, seriesToPercentArray } from "../util/index";
import { stackedFormatter } from "../util/tooltip"
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import debounce from "lodash/debounce";

type BarVerticalSeparatedOptionPropsType = {
  series: number[][];
  labels: string[];
  seriesLabel: string[];
  override?: EChartsOption;
  lineWidth: number | null;
  hundredPercent?: {
    tooltip: boolean,
    series: boolean
  }
};

const getSeries = (series: number[][], seriesLabel: string[], colors: string[]) => {
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
      name: seriesLabel[i],
      color: colors[i],
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    })
  }

  return seriesData
}

const barVerticalSeparatedOption = ({
  series,
  seriesLabel,
  labels,
  lineWidth,
  override,
  hundredPercent,
}: BarVerticalSeparatedOptionPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};
  const colors = getColors.barStacked(series.length)
  const percentSeries = seriesToPercentArray(series)

  option.yAxis = { type: "value", show: true };

  option.series = getSeries(hundredPercent?.series === true ? percentSeries : series, seriesLabel, colors) as EChartsOption["series"];

  option.tooltip = {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (params: any) => {
      return stackedFormatter(
        params,
        series,
        "vertical",
        hundredPercent?.tooltip ?? false
      );
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
}

type BarVerticalSeparatedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalSeparatedOptionPropsType, "lineWidth">

function BarVerticalSeparated({
  width,
  height,
  series,
  seriesLabel,
  labels,
  override,
  hundredPercent
}: BarVerticalSeparatedPropsType) {
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
        option={barVerticalSeparatedOption({
          series,
          seriesLabel,
          labels,
          lineWidth,
          override,
          hundredPercent,
        })}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}

export default BarVerticalSeparated;
