type ZippedChartDataType = {
  series: number;
  label: string;
};

type ChartDataReturnType = {
  series: number[];
  labels: string[];
};

export const zipChartData = (
  seriesList: number[],
  labelsList: string[],
): ZippedChartDataType[] => Array.from(Array(Math.min(seriesList.length, labelsList.length)), (_, i) => ({
  series: seriesList[i],
  label: labelsList[i],
}));

const descSortChartData = (
  seriesList: number[],
  labelsList: string[],
): ZippedChartDataType[] => zipChartData(seriesList, labelsList).sort(
  (a, b) => b.series - a.series,
);

const convertZipToChartData = (
  chartData: ZippedChartDataType[],
): ChartDataReturnType => ({
  series: chartData.map((item) => item.series),
  labels: chartData.map((item) => item.label),
});

export const ellipsisPieChartData = (
  seriesList: number[],
  labelsList: string[],
): ChartDataReturnType => {
  const MAX_SLICE = 6;
  const dataLength = seriesList.length;
  const chartData = descSortChartData(seriesList, labelsList);

  const sumOfSeries = chartData.reduce((acc, cur) => acc + cur.series, 0);

  // 데이터의 개수가 6개 이하라서 '그 외' 를 처리할 필요가 없다.
  if (dataLength <= MAX_SLICE) return convertZipToChartData(chartData);

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
};

export const ellipsisBarChartData = (
  seriesList: number[],
  labelsList: string[],
): ChartDataReturnType => {
  const MAX_BAR_LENGTH = 14;
  if (seriesList.length <= MAX_BAR_LENGTH) {
    return {
      series: seriesList,
      labels: labelsList,
    };
  }

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

const isSelectionHasNumber = (labels: string[]): boolean => labels.some((label) => /\d/.test(label));

type NormalizedBarChartDataType = ChartDataReturnType & {
  score?: number;
};

export const normalizeBarChartData = (
  seriesList: number[],
  labelsList: string[],
  score?: number,
): NormalizedBarChartDataType => {
  const MAX_BAR_LENGTH = 14;
  const selectionLength = labelsList.length;
  const selectionHasNumber = isSelectionHasNumber(labelsList);
  const hasScore = !!score;

  if (selectionLength > MAX_BAR_LENGTH) {
    return {
      // 내림차순 정렬, '그 외' 처리하기
      ...ellipsisBarChartData(seriesList, labelsList),
      score,
    };
  }
  if (selectionHasNumber) {
    return {
      // 원래 순서 반영
      series: seriesList,
      labels: labelsList,
      score,
    };
  }
  if (hasScore || selectionLength <= 2) {
    // 선택지 순서대로 정렬 (asc)
    const selectionSortedChartData = zipChartData(
      seriesList,
      labelsList,
    ).sort((a, b) => (a.label < b.label ? -1 : 1));
    return {
      ...convertZipToChartData(selectionSortedChartData),
      score,
    };
  }
  // 응답 수 기준으로 내림차순 정렬
  const seriesDescSortedChartData = zipChartData(seriesList, labelsList).sort(
    (a, b) => b.series - a.series,
  );
  return {
    ...convertZipToChartData(seriesDescSortedChartData),
    score,
  };
};

export default {};
