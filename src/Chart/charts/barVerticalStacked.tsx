/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import { 
  mergeOption,
  getSizeCSS,
  getColors,
  seriesToPercentArray,
  color
} from "../util/index";
import { verticalStackedFormatter } from "../util/tooltip";
import EChartsReact from "echarts-for-react";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import debounce from "lodash/debounce";
import merge from "lodash/merge";
import cloneDeep from "lodash/cloneDeep";
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
};

const barVerticalStackedOption = ({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  lineWidth,
  hundredPercent
}: BarVerticalStackedOptionPropsType) => {
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

  const colors = getColors.barStacked(series.length)
  
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
          color: color.BLACK,
          width: 2,
        },
        emphasis: {
          lineStyle: { 
            width: 2,
          },
        },
        itemStyle: {
          color: color.BLACK,
        },
      });
    }
  }
 
  const extendFormatter =
    hundredPercent?.tooltip === true
      ? {
        formatter: (params: any) => {
          return verticalStackedFormatter(params, series);
        },
      }
      : {};

  option.tooltip = {
    show: true,
    showContent: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    ...extendFormatter,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarVerticalStackedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalStackedOptionPropsType, "lineWidth"> & {
  sizeValue: number
}

const EchartsWrapper = styled.div<{ minify: boolean, width?:string | number, height?: string | number }>`
  ${(props) => props.minify && "overflow-x: scroll;"}
  ${(props) => props.width ? typeof props.width === "number" ? `width: ${props.width}px;` : `width: ${props.width};` : "" }
  ${(props) => props.height ? typeof props.height === "number" ? `height: ${props.height}px;` : `height: ${props.height};` : ""}
  overflow-y: hidden;
`;

function BarVerticalStacked({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  width,
  height,
  hundredPercent,
  sizeValue
}: BarVerticalStackedPropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const resizeObject = useResizeDetector({ targetRef });
  const [minify, setMinify] = React.useState<boolean>(true);

  const minWidth = (sizeValue * xAxisLabel.length) 
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

  return (
    <EchartsWrapper ref={targetRef} minify={minify} width={width} height={height}>
      <EChartsReact
        style={getSizeCSS(minify ? minWidth : undefined, height)}
        option={barVerticalStackedOption({
          series,
          labels,
          xAxisLabel,
          override,
          line,
          lineWidth,
          hundredPercent
        })}
        opts={{ renderer: "svg" }}
      />
    </EchartsWrapper>
  );
}

export default BarVerticalStacked;
