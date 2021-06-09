/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import {
  mergeOption,
  getSizeCSS,
  getColors,
  seriesToPercentArray,
  color,
} from "../util/index";
import { stackedFormatter } from "../util/tooltip";
import EChartsReact from "echarts-for-react";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import { getPreset, BarVerticalStackedPresetType } from "../util/preset";
import debounce from "lodash/debounce";
import styled from "styled-components";

type BarVerticalStackedOptionPropsType = {
  series: (number | null)[][];
  labels: string[];
  override?: EChartsOption;
  xAxisLabel: string[];
  line?: {
    name: string;
    series: (number | null)[];
  }[];
  lineWidth: number | null;
  hundredPercent?: {
    series: boolean;
    tooltip: boolean;
  };
  nps?: boolean;
  preset?: BarVerticalStackedPresetType;
};

const barVerticalStackedOption = ({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  lineWidth,
  hundredPercent,
  nps,
  minify,
  preset,
}: BarVerticalStackedOptionPropsType & {
  minify: boolean;
}) => {
  const option: EChartsOption = {};

  option.yAxis = {
    type: "value",
  };

  option.xAxis = {
    type: "category",
    data: xAxisLabel,
    axisLabel: {
      interval: 0,
      margin: 14,
      width: lineWidth ? Math.ceil(lineWidth / xAxisLabel.length) : 0,
      //@ts-ignore
      overflow: "truncate",
    },
    show: lineWidth ? true : false,
  };

  option.barCategoryGap = "40%";

  const percentSeries = seriesToPercentArray(series);

  const colors =
    nps === true
      ? [color.NPS.RED, color.NPS.YELLOW, color.NPS.GREEN]
      : getColors.barStacked(series.length);

  option.series = (hundredPercent?.series === true
    ? percentSeries
    : series
  ).map((items, index) => {
    return {
      name: labels[index],
      type: "bar",
      stack: "barChart",
      label: {
        show: false,
      },
      data: items.map((item) => ({
        value: item as number,
        itemStyle: {
          color: colors[index],
          shadowBlur: 0,
          shadowColor: "#fff",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
      })),
    };
  });

  type DataType = {
    value: number;
    itemStyle: {
      borderRadius?: number[];
    };
  }[];

  type SeriesType = {
    data: DataType;
  }[];

  const border = Array.from({
    length: (option.series[0].data as DataType).length,
  }).fill(false);

  //스택 차트 중 가장 위에 있는 차트에 borderRadius 적용
  for (let i = option.series.length - 1; i >= 0; i -= 1) {
    (option.series[i].data as DataType).forEach((item, index) => {
      if (
        option.series !== undefined &&
        border[index] === false &&
        item.value !== null &&
        item.value !== 0
      ) {
        (option.series as SeriesType)[i].data[index].itemStyle = {
          ...(option.series as SeriesType)[i].data[index].itemStyle,
          borderRadius: [4, 4, 0, 0],
        };
        border[index] = true;
      }
    });
    if (border.filter((item) => item === true).length === border.length) break;
  }

  if (line) {
    for (let i = 0; i < line.length; i++) {
      option.series.push({
        data: line[i].series as number[],
        name: line[i].name,
        type: "line",
        symbolSize: 0,
        lineStyle: {
          color: nps === true ? color.NPS.BLUE : color.BLACK,
          width: 2,
        },
        emphasis: {
          lineStyle: {
            width: 2,
          },
        },
        itemStyle: {
          color: nps === true ? color.NPS.BLUE : color.BLACK,
        },
        yAxisIndex: nps === true ? 1 : undefined,
      });
    }
  }

  option.tooltip = {
    show: true,
    showContent: true,
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
    left: "100px",
    right: "100px",
  };

  return mergeOption({
    option,
    override,
    preset: preset ? getPreset(preset, option) : undefined,
  });
};

type BarVerticalStackedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalStackedOptionPropsType, "lineWidth">;

const EchartsWrapper = styled.div<{
  minify: boolean;
  width?: string | number;
  height?: string | number;
}>`
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
  overflow-y: hidden;
`;

const countSeries = (series: (number | null)[][]) => {
  const n = series.length;
  const m = series[0].length;
  const verticalLengths: number[] = [];
  for (let j = 0; j < m; j++) {
    const vertical = [];
    for (let i = 0; i < series.length; i++) {
      vertical.push(series[i][j]);
    }
    verticalLengths.push(vertical.map((item) => item).length);
  }
  return Math.max.apply(null, verticalLengths);
};

function BarVerticalStacked({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  width,
  height,
  hundredPercent,
  nps,
  preset,
}: BarVerticalStackedPropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const resizeObject = useResizeDetector({ targetRef });
  const [minify, setMinify] = React.useState<boolean>(true);

  const sizeValue = 70;

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

  const delayed = React.useCallback(
    debounce(() => calcSVGPathLineWidth(), 500),
    []
  );

  React.useEffect(() => {
    calcSVGPathLineWidth();
  }, []);

  React.useEffect(() => {
    delayed();
  }, [resizeObject.width, sizeValue]);

  const seriesCounted = countSeries(series);

  return (
    <EchartsWrapper
      ref={targetRef}
      minify={minify}
      width={width}
      height={seriesCounted > 15 ? seriesCounted * 20 : height}
    >
      <EChartsReact
        style={getSizeCSS(
          minify ? minWidth : undefined,
          seriesCounted > 15 ? seriesCounted * 20 : height
        )}
        option={barVerticalStackedOption({
          series,
          labels,
          xAxisLabel,
          override,
          line,
          lineWidth,
          hundredPercent,
          nps,
          minify,
          preset,
        })}
        opts={{ renderer: "svg" }}
      />
    </EchartsWrapper>
  );
}

export default BarVerticalStacked;
