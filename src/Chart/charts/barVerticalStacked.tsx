import React from 'react';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import { useResizeDetector } from 'react-resize-detector/build/withPolyfill';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { getPreset, BarVerticalStackedPresetType } from '../util/preset';
import { stackedFormatter } from '../util/tooltip';
import {
  mergeOption,
  getSizeCSS,
  getColors,
  seriesToPercentArray,
  color,
} from '../util/index';
import { scrollBar } from '../style';
import getLineWidth from '../util/getLineWidth';

type BarVerticalStackedOptionPropsType = {
  series: (number | null)[][];
  labels: string[];
  override?: any;
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
  labelOption?: 'fixed' | 'dynamic';
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
  labelOption = 'dynamic',
}: BarVerticalStackedOptionPropsType & {
  minify: boolean;
}) => {
  const option: EChartsOption = {};

  option.yAxis = {
    type: 'value',
  };

  option.xAxis = {
    type: 'category',
    data: xAxisLabel,
    axisLabel: {
      interval: 0,
      margin: 14,
      width: lineWidth ? Math.ceil(lineWidth / xAxisLabel.length) : 0,
      // @ts-ignore
      overflow: 'truncate',
    },
    show: !!lineWidth,
  };

  option.barCategoryGap = '40%';

  const percentSeries = seriesToPercentArray(series);

  const colors =
    nps === true
      ? [color.NPS.RED, color.NPS.YELLOW, color.NPS.GREEN]
      : getColors.barStacked(series.length);

  option.series = (hundredPercent?.series === true
    ? percentSeries
    : series
  ).map((items, index) => ({
    name: labels[index],
    type: 'bar',
    stack: 'barChart',
    label: {
      show: false,
    },
    data: items.map((item) => ({
      value: item as number,
      itemStyle: {
        color: colors[index],
        shadowBlur: 0,
        shadowColor: '#fff',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
      },
    })),
  }));

  option.legend = {
    orient: 'horizontal',
    type: 'scroll',
    width: 700,
    x: 'center',
    y: 'bottom',
  };

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

  // 스택 차트 중 가장 위에 있는 차트에 borderRadius 적용
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
        color: getColors.barStacked(series.length),
        //  color: getColors.pie(series.length, maxIndex),
        data: line[i].series.map((item) =>
          item ? parseFloat(item.toFixed(1)) : null,
        ) as number[],
        name: line[i].name,
        type: 'line',
        symbolSize: nps === true ? 3 : 0,
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
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: (params: any) =>
      stackedFormatter(
        params,
        series,
        'vertical',
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

  option.color = colors;
  option.grid = {
    left: '100px',
    right: '100px',
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
} & Omit<BarVerticalStackedOptionPropsType, 'lineWidth'>;

const EchartsWrapper = styled.div<{
  minify: boolean;
  width?: string | number;
  height?: string | number;
  isOverflow: boolean;
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
  ${(props) => props.isOverflow && 'overflow-y: scroll;'}
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
  labelOption = 'dynamic',
}: BarVerticalStackedPropsType) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = React.useState<number | null>(null);
  const resizeObject = useResizeDetector({ targetRef });
  const [minify, setMinify] = React.useState<boolean>(true);
  const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

  const sizeValue = 70;

  const minWidth = sizeValue * xAxisLabel.length + 200;
  const calcSVGPathLineWidth = async () => {
    const svgLineWidth = await getLineWidth(targetRef);
    setLineWidth(svgLineWidth);
    const clientWidth = targetRef.current?.clientWidth;
    if (clientWidth) {
      setMinify(minWidth > clientWidth);
    }
  };

  const delayed = React.useCallback(
    debounce(() => calcSVGPathLineWidth(), 500),
    [],
  );

  React.useEffect(() => {
    calcSVGPathLineWidth();
  }, []);

  React.useEffect(() => {
    delayed();
  }, [resizeObject.width, sizeValue]);

  React.useEffect(() => {
    if (resizeObject.height) setIsOverflow(resizeObject.height < minHeight);
  }, [resizeObject.height]);

  const seriesCounted = countSeries(series);
  const minHeight = 40 * seriesCounted + 120;
  const defaultHeight = 350;

  return (
    <EchartsWrapper
      ref={targetRef}
      minify={minify}
      width={width}
      height={height ?? defaultHeight}
      isOverflow={isOverflow}
    >
      <EChartsReact
        style={getSizeCSS(
          minify ? minWidth : undefined,
          minHeight > defaultHeight ? minHeight : undefined,
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
          labelOption,
        })}
        opts={{ renderer: 'svg' }}
      />
    </EchartsWrapper>
  );
}

export default BarVerticalStacked;
