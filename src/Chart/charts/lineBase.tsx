/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import { getSizeCSS, mergeOption, color } from '../util/index';

type LineBaseOptionPropsType = {
  series: number[];
  labels: string[];
  hasMarker?: boolean;
  smooth?: boolean;
  labelOption?: 'dynamic' | 'fixed';
  override?: any;
};

const lineBaseOption = ({
  series,
  labels,
  hasMarker,
  smooth,
  labelOption = 'dynamic',
  override,
}: LineBaseOptionPropsType) => {
  const option: EChartsOption = {};
  option.color = color.YELLOW;
  option.tooltip = {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
    position: (pos: any, params: any, el: any, elRect: any, size: any) => {
      if (labelOption === 'fixed') {
        const obj: any = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
    extraCssText: 'text-align: left;',
  };
  option.toolbox = {
    show: true,
  };

  const getEllipsisText = (n: number) => (value) =>
    value.length > n + 1 ? `${value.substring(0, n)}...` : value;

  const calculateXAxixformatter = (labels: string[]) => {
    const labelLength = labels.length;
    if (labelLength <= 4) return getEllipsisText(8);
    if (labelLength <= 8) return getEllipsisText(6);
    if (labelLength <= 12) return getEllipsisText(4);
    return getEllipsisText(2);
  };

  option.xAxis = {
    type: 'category',
    data: labels,
    axisLabel: {
      interval: 0,
      formatter: calculateXAxixformatter(labels),
    },
  };
  option.yAxis = {
    type: 'value',
  };

  interface IlineChartMaker {
    name: string;
    xAxis: number;
    yAxis: number;
    value: number;
  }
  const filterMinMaxMarkPoint = (series: number[]) => {
    const min = Math.min(...series);
    const max = Math.max(...series);

    return series.reduce((acc: IlineChartMaker[], cur, idx) => {
      if ([min, max].includes(cur)) {
        const marker: IlineChartMaker = {
          name: '',
          xAxis: idx,
          yAxis: cur,
          value: cur,
        };
        acc.push(marker);
      }
      return acc;
    }, []);
  };

  option.series = [
    {
      type: 'line',
      smooth: smooth === true,
      data: series,
      markPoint:
        hasMarker === true
          ? {
              data: filterMinMaxMarkPoint(series),
            }
          : {
              data: [],
            },
    },
  ];

  return mergeOption({
    option,
    override,
  });
};

type LineBasePropsType = {
  width?: number | string;
  height?: number | string;
} & LineBaseOptionPropsType;

function LineBase({
  width,
  height,
  series,
  labels,
  hasMarker,
  smooth,
  labelOption = 'dynamic',
  override,
}: LineBasePropsType) {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={lineBaseOption({
        series: series as number[],
        labels,
        hasMarker,
        smooth,
        labelOption,
        override,
      })}
      opts={{ renderer: 'svg' }}
    />
  );
}

export default LineBase;
