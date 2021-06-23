/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import {
  getColors,
  getMaxLabelWidth,
  mergeOption,
  getSizeCSS,
  color,
  seriesToPercentArray
} from "../util/index";
import EChartsReact from "echarts-for-react";
import {stackedFormatter} from "../util/tooltip"
import styled from "styled-components"
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";

const MAX_LABEL_LENGTH = 14

type BarHorizontalStackedOptionPropsType = {
  series: (number | null)[][];
  labels: string[];
  override?: EChartsOption;
  yAxisLabel: string[];
  hundredPercent?: {
    series: boolean,
    tooltip: boolean
  };
  labelOption?: "fixed" | "dynamic";
};

const barHorizontalStackedOption = ({
  series,
  labels,
  yAxisLabel,
  override,
  hundredPercent,
  labelOption="dynamic",
}: BarHorizontalStackedOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: "value",
  };

  option.yAxis = {
    type: "category",
    z: 100,
    data: yAxisLabel,
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
  };

  const colors = getColors.barStacked(series.length)
  const percentSeries = seriesToPercentArray(series)
  
  option.tooltip = {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    }, 
    formatter: (params: any) => {
      return stackedFormatter(params, series, "horizontal", hundredPercent?.tooltip ?? false)
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

  

  option.series = (hundredPercent?.series === true ? percentSeries : series).map((items, index) => {
    return {
      name: labels[index],
      type: "bar",
      stack: "barChart",
      label: {
        show: false,
      },
      barMinHeight: 56,
      data: items.map((item) => ({
        value: item as number,
        itemStyle: {
          color: colors[index]
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
          borderRadius: [0, 4, 4, 0],
        };
        border[index] = true;
      }
    });
    if (border.filter((item) => item === true).length === border.length) break;
  }

  option.grid = {
    left: `${getMaxLabelWidth(yAxisLabel, MAX_LABEL_LENGTH)}px`,
  };

  return mergeOption({
    option,
    override,
  });
};

const EchartsWrapper = styled.div`

`

type BarHorizontalStackedPropsType = {
  width?: number | string;
  height?: number | string;
} & BarHorizontalStackedOptionPropsType;

function BarHorizontalStacked({
  series,
  labels,
  yAxisLabel,
  override,
  width,
  height,
  hundredPercent,
  labelOption="dynamic",
}: BarHorizontalStackedPropsType): JSX.Element {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [minify, setMinify] = React.useState<boolean>(false);
  const minHeight = 67.2 * series.length + 120
  
  const resizeObject = useResizeDetector({ targetRef });

  React.useEffect(() => {
    if(targetRef.current?.clientHeight){
      const clientHeight = targetRef.current?.clientHeight
      if(clientHeight){
        setMinify(minHeight > clientHeight)
      }
    }
  }, [resizeObject.width]);


  return (
    <EchartsWrapper ref={targetRef}>
      <EChartsReact
        style={getSizeCSS(width, minHeight)}
        option={barHorizontalStackedOption({
          series: series as (number | null)[][],
          labels,
          yAxisLabel,
          override,
          hundredPercent,
          labelOption,
        })}
      />
    </EchartsWrapper>
  );
}

export default BarHorizontalStacked;
