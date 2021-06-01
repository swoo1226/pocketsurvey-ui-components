/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import React from "react";
import { EChartsOption } from "echarts";
import { getColors, mergeOption, getSizeCSS, verticalStackedFormatter } from "../util/index";
import EChartsReact from "echarts-for-react";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import debounce from "lodash/debounce";

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
  percentTooltip?: boolean
};

const barVerticalStackedOption = ({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  lineWidth,
  percentTooltip
}: BarVerticalStackedOptionPropsType) => {
  const option: EChartsOption = {};

  option.tooltip = {
    show: true,
    showContent: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  };

  if(percentTooltip === true){
    option.tooltip = {
      ...option.tooltip,
      formatter: (params) => {
        return verticalStackedFormatter(params)
      },
    }
  }

  option.yAxis = {
    type: "value",
    // max: 100 추이에서 max가 100일 때 override로 넘기기
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

  const colors = getColors(series.length) as string[];

  option.series = series.map((items, index) => {
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
        symbolSize: 10,
        lineStyle: {
          color: "#59C4DB",
          width: 2,
        },
        itemStyle: {
          color: "#59C4DB",
        },
      });
    }
  }

  return mergeOption({
    option,
    override,
  });
};

type BarVerticalStackedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalStackedOptionPropsType, "lineWidth">;

function BarVerticalStacked({
  series,
  labels,
  xAxisLabel,
  override,
  line,
  width,
  height,
  percentTooltip
}: BarVerticalStackedPropsType) {
  const [option, setOption] = React.useState<EChartsOption | null>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);


  const calcSVGPathLineWidth = () => {
    const svg = targetRef.current?.querySelector(
      "svg > g:last-child > path"
    ) as SVGSVGElement;
    const lineWidth = svg?.getBBox()?.width;
    setOption(
      barVerticalStackedOption({
        series,
        labels,
        xAxisLabel,
        override,
        line,
        lineWidth,
        percentTooltip
      })
    );
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
      {option && (
        <EChartsReact
          style={getSizeCSS(width, height)}
          option={option}
          opts={{ renderer: "svg" }}
        />
      )}
    </div>
  );
}

export default BarVerticalStacked;
