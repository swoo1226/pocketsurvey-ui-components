/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable semi */
import { EChartsOption } from 'echarts';
import React from 'react';
import EChartsReact from 'echarts-for-react';
import { useResizeDetector } from 'react-resize-detector/build/withPolyfill';
import styled from 'styled-components';
import {
  getSizeCSS,
  mergeOption,
  getColors,
  seriesToPercentArray,
} from '../util/index';
import { stackedFormatter } from '../util/tooltip';
import { scrollBar } from '../style';
import { ellipsisPieChartData, zipChartData } from '../util/chartData';
import getLineWidth from '../util/getLineWidth';

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
  labelOption?: 'fixed' | 'dynamic';
};

const compressedSeries = (series: number[][], label: string[]) => {
  const compressSeriesArr: any[] = [];
  const labelIndexMap = new Map<string, number>();
  label.forEach((item, index) => {
    labelIndexMap.set(item, index);
  });

  for (let i = 0; i < series.length; i += 1) {
    const compressSeries = Array.from({ length: label.length + 1 }).fill(0);
    const ellipsisChartData: any = ellipsisPieChartData({
      seriesList: series[i],
      labelsList: label,
    });
    for (let j = 0; j < ellipsisChartData.labels.length; j += 1) {
      const labelIndex = labelIndexMap.get(ellipsisChartData.labels[j]);
      if (labelIndex !== undefined) {
        compressSeries[labelIndex] = ellipsisChartData.series[j];
      } else {
        compressSeries[compressSeries.length - 1] = ellipsisChartData.series[j];
      }
    }

    compressSeriesArr.push(compressSeries);
    // const sortedRawData = series.map((item,index) => item.sort((a, b) => b - a));
    // const sumOfSeriesArr = series.map((item, index) => item.reduce((acc, cur) => acc + cur, 0))

    // let sumOther = 0;
    // let lastIndex = 0;

    // for (let j = sortedRawData[i].length - 1; j >= 0; j -= 1) {
    //   sumOther += sortedRawData[i][j];
    //   if (sumOther > sumOfSeriesArr[i] / 10) {
    //     break;
    //   }
    //   lastIndex = j;
    // }

    // if (lastIndex >= 6) {
    //   lastIndex = 5;
    // }

    // compressSeriesArr.push([...sortedRawData[i].slice(0, lastIndex),
    //   sortedRawData[i]
    //     .slice(lastIndex)
    //     .reduce((acc, cur) => acc + cur, 0),
    // ])
  }
  // console.log("compressSeriesArr", compressSeriesArr)

  const arr2D = Array(series.length + 1)
    .fill(0)
    .map((x) => Array(series[0].length).fill(0));
  for (let i = 0; i < compressSeriesArr.length; i += 1) {
    for (let j = 0; j < compressSeriesArr[i].length; j += 1) {
      arr2D[j][i] = compressSeriesArr[i][j];
    }
  }
  return arr2D;
};

const getSeries = (
  isHundredPercent: boolean,
  series: number[][],
  label: string[],
  colors: string[],
) => {
  series = isHundredPercent ? seriesToPercentArray(series) : series;
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
      // data: series[i].map((item) => item && +item.toFixed(1)),
      data: series[i].map((item) => item && +item.toFixed(1)),
      type: 'bar',
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
  labelOption = 'dynamic',
}: BarVerticalSeparatedOptionPropsType & {
  lineWidth: number | null;
}) => {
  const option: EChartsOption = {};
  const colors = getColors.barStacked(series.length);
  const percentSeries = seriesToPercentArray(series);

  const rawData = series.map((_, colIndex) =>
    series.map((row) => row[colIndex]),
  );
  const dataLength = rawData[0].length;

  if (dataLength > 6) {
    series = compressedSeries(rawData, label);
    label = [...label, '그 외'];
  }

  option.yAxis = { type: 'value', show: true };

  option.series = getSeries(
    !!hundredPercent?.series,
    series,
    label,
    colors,
  ) as EChartsOption['series'];

  const toFixedSeries = series.map((series) =>
    series.map((item) => (item ? parseFloat(item.toFixed(1)) : null)),
  );
  option.tooltip = {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: (params: any) =>
      stackedFormatter(
        params,
        toFixedSeries,
        'vertical-separated',
        hundredPercent?.tooltip ?? false,
      ),
    position(pos: any, params: any, el: any, elRect: any, size: any) {
      if (labelOption === 'fixed') {
        const obj: any = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };

  option.legend = {
    orient: 'vertical',
    left: 'left',
    width: 200,
    textStyle: {
      width: 150,
      overflow: 'truncate',
    },
    type: 'scroll',
  };

  option.grid = {
    left: 250,
    right: '100px',
  };

  option.xAxis = {
    type: 'category',
    data: xAxisLabel,
    axisLabel: {
      interval: 0,
      margin: 14,
      width: lineWidth ? Math.ceil(lineWidth / series.length) : 0,
      // @ts-ignore
      overflow: 'truncate',
    },
    show: !!lineWidth,
  };

  option.barCategoryGap = '40%';

  return mergeOption({
    option,
    override,
  });
};

type BarVerticalSeparatedPropsType = {
  width?: number | string;
  height?: number | string;
} & Omit<BarVerticalSeparatedOptionPropsType, 'lineWidth'>;

const EchartsWrapper = styled.div<{
  minify: boolean;
  width?: string | number;
  height?: string | number;
}>`
  ${scrollBar}
  ${(props) => props.minify && 'overflow-x: scroll;'}
  ${(props) =>
    props.width
      ? typeof props.width === 'number'
        ? `width: ${props.width}px;`
        : `width: ${props.width};`
      : ''}
  ${(props) =>
    props.height
      ? typeof props.height === 'number'
        ? `height: ${props.height}px;`
        : `height: ${props.height};`
      : ''}
`;

function BarVerticalSeparated({
  width,
  height,
  series,
  label,
  xAxisLabel,
  override,
  hundredPercent,
  labelOption = 'dynamics',
}: BarVerticalSeparatedPropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const [minify, setMinify] = React.useState<boolean>(true);

  const sizeValue = series.length * 30;
  const minWidth = sizeValue * xAxisLabel.length + 200;

  const calcSVGPathLineWidth = async () => {
    const svgLineWidth = await getLineWidth(targetRef);
    setLineWidth(svgLineWidth);
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
        opts={{ renderer: 'svg' }}
      />
    </EchartsWrapper>
  );
}

export default BarVerticalSeparated;
