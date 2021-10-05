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
  ellipsisBarChartData,
  zipChartData,
  ChartDataReturnType,
} from '../util/chartData';

type BarHorizontalBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: any;
  align?: 'descend' | 'ascend';
  labelOption?: 'fixed' | 'dynamic';
};

const MAX_LABEL_LENGTH = 20;

const barHorizontalBaseOption = ({
  series,
  labels,
  override,
  align,
  labelOption = 'dynamic',
}: BarHorizontalBaseOptionPropsType) => {
  const option: EChartsOption = {};

  option.xAxis = {
    type: 'value',
    show: true,
  };
  const seriesCombinedLabels = labels
    .map((label, index) => ({ label, series: series[index] }))
    .sort((a, b) => b.series - a.series);
  const alignedSeries = seriesCombinedLabels.map((item) => item.series);
  const alignedLabels = seriesCombinedLabels.map((item) => item.label);

  option.yAxis = {
    type: 'category',
    z: 100,
    data: align
      ? align === 'descend'
        ? alignedLabels
        : alignedLabels.reverse()
      : labels,
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

  const seriesData: {
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }[] = [];
  const standardSeries = align
    ? align === 'descend'
      ? alignedSeries
      : alignedSeries.reverse()
    : series;
  standardSeries.map((number, index) => {
    seriesData.push({
      value: (number === 0 ? null : parseFloat(number.toFixed(1))) as number,
      itemStyle: {
        color: color.YELLOW,
        borderRadius: [0, 4, 4, 0],
      },
    });
  });

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
    // left: `${getMaxLabelWidth(labels, MAX_LABEL_LENGTH)}px`,
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
} & BarHorizontalBaseOptionPropsType;

function BarHorizontalBase({
  width,
  series,
  labels,
  override,
  align,
  labelOption = 'dynamic',
  notHasEtc,
}: BarHorizontalBasePropsType): JSX.Element {
  const getHeight = (dataLength: number) => {
    const padding = 120;
    const barWidth =
      40 - (Math.floor(dataLength / 5) - (dataLength % 5 === 0 ? 1 : 0)) * 2;
    return barWidth * dataLength + padding;
  };

  const chartData = getChartData(series, labels, notHasEtc);
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

const getChartData = (
  series: number[],
  labels: string[],
  notHasEtc?: boolean,
): ChartDataReturnType => {
  // 그 외를 계산하지 않는 경우, 데이터를 그대로 리턴
  if (notHasEtc === true) {
    return {
      series,
      labels,
    };
  }
  // 데이터를 내림차순 정렬 후 그 외 계산
  return ellipsisBarChartData(series, labels);
};

export default BarHorizontalBase;
