import React, { useEffect, useState, useRef } from 'react';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import {
  getSizeCSS,
  mergeOption,
  getMaxLabelWidth,
  color,
} from '../util/index';
import {
  ChartDataReturnType,
  convertZipToChartData,
  normalizeHorizontalBaseChartData,
  zipChartData,
  ZippedChartDataType,
} from '../util/chartData';
import { parseFloatSafe } from '../util/safeParse';

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: any;
  align?: 'descend' | 'ascend';
  labelOption?: 'fixed' | 'dynamic';
};

const MAX_LABEL_LENGTH = 20;

const getAlignData = (
  series: number[],
  labels: string[],
  align: 'descend' | 'ascend' | undefined,
): {
  series: number[];
  labels: string[];
} => {
  const zippedChartData = zipChartData(series, labels);

  if (!align)
    return {
      series,
      labels,
    };

  const sortFunction: (
    a: ZippedChartDataType,
    b: ZippedChartDataType,
  ) => number =
    align === 'ascend'
      ? (a, b) => a.series - b.series
      : (a, b) => b.series - a.series;

  return convertZipToChartData(zippedChartData.sort(sortFunction));
};

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
  align,
  labelOption = 'dynamic',
}: BarHorizontalBaseOptionPropsType) => {
  const alignedData = getAlignData(series, labels, align);

  const option: EChartsOption = {};

  option.xAxis = {
    type: 'value',
    show: true,
  };

  option.yAxis = {
    type: 'category',
    z: 100,
    data: alignedData.labels,
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
  } as EChartsOption['yAxis'];

  const seriesData = alignedData.series.map((value) => ({
    value: parseFloatSafe(value) as number,
    itemStyle: {
      color: color.YELLOW,
      borderRadius: [0, 4, 4, 0],
    },
  }));

  option.series = [
    {
      data: seriesData,
      barWidth: 26,
      type: 'bar',
      barCategoryGap: 40,
      label: {
        show: true,
        color: '#000',
        position: 'right',
      },
    },
  ];

  option.tooltip = {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    extraCssText: 'text-align: left;',
    position(pos: any, params: any, el: any, elRect: any, size: any) {
      if (labelOption === 'fixed') {
        const obj: any = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };

  option.grid = {
    left: 220,
  };

  return mergeOption({
    option,
    override,
  });
};

type BarHorizontalBasePropsType = {
  width?: number | string;
  align?: 'descend' | 'ascend';
  labelOption?: 'fixed' | 'dynamic';
  notHasEtc?: boolean;
  hasScore?: boolean;
} & BarHorizontalBaseOptionPropsType;

const getBarWidth = (dataLength: number) => {
  // '그 외'를 처리하지 않는 차트에서 데이터 개수가 많은 경우 40으로 고정한다.
  if (dataLength >= 16) return 40;

  // 1 ~ 5개 40 / 6 ~ 10개 38 / 11 ~ 15개 40
  return 40 - (Math.floor(dataLength / 5) - (dataLength % 5 === 0 ? 1 : 0)) * 2;
};

function BarHorizontalBase({
  width,
  series,
  labels,
  override,
  align,
  labelOption = 'dynamic',
  notHasEtc,
  hasScore,
}: BarHorizontalBasePropsType): JSX.Element {
  const getHeight = (dataLength: number) => {
    const padding = 120;
    const barWidth = getBarWidth(dataLength);
    return barWidth * dataLength + padding;
  };

  const chartData = getChartData({ series, labels, notHasEtc, hasScore });
  return (
    <EChartsReact
      style={getSizeCSS(width, getHeight(chartData.series.length))}
      option={barHorizontalBaseOption({
        series: chartData.series,
        labels: chartData.labels,
        override,
        align,
        labelOption,
      })}
      opts={{ renderer: 'svg' }}
    />
  );
}

const getChartData = ({
  series,
  labels,
  notHasEtc,
  hasScore,
}: {
  series: number[];
  labels: string[];
  notHasEtc?: boolean;
  hasScore?: boolean;
}): ChartDataReturnType => {
  // 그 외를 계산하지 않는 경우, 데이터를 그대로 리턴
  if (notHasEtc === true) {
    return {
      series,
      labels,
    };
  }
  // 데이터를 내림차순 정렬 후 그 외 계산
  return normalizeHorizontalBaseChartData({
    seriesList: series,
    labelsList: labels,
    hasScore,
  });
};

export default BarHorizontalBase;
