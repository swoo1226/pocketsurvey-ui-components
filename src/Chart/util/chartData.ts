export type ZippedChartDataType = {
  series: number;
  label: string;
};

type ChartDataInputType = {
  seriesList: number[];
  labelsList: string[];
  hasScore?: boolean;
};

export type ChartDataReturnType = {
  series: number[];
  labels: string[];
};

export const zipChartData = (
  seriesList: number[],
  labelsList: string[],
): ZippedChartDataType[] =>
  Array.from(Array(Math.min(seriesList.length, labelsList.length)), (_, i) => ({
    series: seriesList[i],
    label: labelsList[i],
  }));

export const descSortChartData = (
  seriesList: number[],
  labelsList: string[],
): ZippedChartDataType[] =>
  zipChartData(seriesList, labelsList).sort((a, b) => b.series - a.series);

export const convertZipToChartData = (
  chartData: ZippedChartDataType[],
): ChartDataReturnType => ({
  series: chartData.map((item) => item.series),
  labels: chartData.map((item) => item.label),
});

export const ellipsisPieChartData = ({
  seriesList,
  labelsList,
  hasScore,
}: ChartDataInputType): ChartDataReturnType => {
  const sortCondition = getSortRule({
    labelsList,
    hasScore,
    chartType: 'pie',
  });

  if (sortCondition === 'descHasEtc') {
    const MAX_SLICE = 6;
    const dataLength = seriesList.length;

    const chartData = descSortChartData(seriesList, labelsList);
    const sumOfSeries = chartData.reduce((acc, cur) => acc + cur.series, 0);

    let sumOther = 0;
    let lastIndex = 0;

    // '그 외' 처리 조건 1.총합 10% 이하인 데이터는 그 외로 처리한다.
    // 내림차순 정렬 된 데이터를 마지막부터 접근하면서 그 합이 10%를 초과했을 때 인덱스를 구한다.
    for (let i = dataLength - 1; i >= 0; i -= 1) {
      sumOther += chartData[i].series;
      if (sumOther > sumOfSeries / 10) break;
      lastIndex = i;
    }

    // 그 외 처리 조건 2. 1로직을 거치고 나서 데이터가 6개 초과면 6개까지로 제한한다.
    lastIndex = lastIndex >= MAX_SLICE ? MAX_SLICE - 1 : lastIndex;

    const others = chartData.splice(lastIndex).reduce(
      (acc, cur) => {
        acc.series += cur.series;
        return acc;
      },
      {
        series: 0,
        label: '그 외',
      },
    );

    return convertZipToChartData([...chartData, others]);
  }

  return {
    series: seriesList,
    labels: labelsList,
  };
};

export const ellipsisBarChartData = (
  seriesList: number[],
  labelsList: string[],
): ChartDataReturnType => {
  const MAX_BAR_LENGTH = 14;

  const chartData: ZippedChartDataType[] = descSortChartData(
    seriesList,
    labelsList,
  );

  const others: ZippedChartDataType = chartData.splice(MAX_BAR_LENGTH).reduce(
    (acc, cur) => {
      acc.series += cur.series;
      return acc;
    },
    {
      series: 0,
      label: '그 외',
    },
  );

  return convertZipToChartData([...chartData, others]);
};

const isSelectionHasNumber = (labels: string[]): boolean =>
  labels.some((label) => /\d/.test(label));

type GetSortRuleProps = Omit<ChartDataInputType, 'seriesList'> & {
  chartType: 'pie' | 'barHorizontal';
};

const isNotSortLength = (
  chartType: GetSortRuleProps['chartType'],
  selectionLength: number,
) => {
  if (chartType === 'barHorizontal' && selectionLength <= 2) return true;
  if (chartType === 'pie' && selectionLength <= 6) return true;
  return false;
};

export const getSortRule = ({
  labelsList,
  hasScore,
  chartType,
}: GetSortRuleProps): 'none' | 'desc' | 'descHasEtc' => {
  const selectionLength = labelsList.length;
  const selectionHasNumber = isSelectionHasNumber(labelsList);
  const notSort = isNotSortLength(chartType, selectionLength);

  // 선택지에 숫자가 있거나 (10대, 20대, ...), 점수가 있거나, 선택지의 개수가 2(가로 바 차트), 6(파이)개 이하일 때는 정렬을 하지 않는다.
  if (selectionHasNumber || hasScore || notSort) return 'none';

  const MAX_HORIZONTAL_BAR = 14;

  // 바 차트: 14개 초과일 때는 내림차순 정렬 및 "그 외" 처리
  if (chartType === 'barHorizontal') {
    if (selectionLength > MAX_HORIZONTAL_BAR) return 'descHasEtc';
    return 'desc';
  }

  // 파이 차트: 기본적으로 '그 외'를 처리
  if (chartType === 'pie') return 'descHasEtc';
  return 'none';
};

export const normalizeHorizontalBaseChartData = ({
  seriesList,
  labelsList,
  hasScore,
}: ChartDataInputType): ChartDataReturnType => {
  const sortCondition = getSortRule({
    labelsList,
    hasScore,
    chartType: 'barHorizontal',
  });

  if (sortCondition === 'descHasEtc')
    return ellipsisBarChartData(seriesList, labelsList);

  if (sortCondition === 'desc') {
    const seriesDescSortedChartData = zipChartData(seriesList, labelsList).sort(
      (a, b) => b.series - a.series,
    );
    return convertZipToChartData(seriesDescSortedChartData);
  }

  return {
    series: seriesList,
    labels: labelsList,
  };
};

export default {};
