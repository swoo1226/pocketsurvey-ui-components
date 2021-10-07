import {
  alphabetData,
  hasNumberData,
  twoXData,
  length10Data,
} from './mocks/chartData';
import {
  normalizeHorizontalBaseChartData,
  ellipsisPieChartData,
  descSortChartData,
  zipChartData,
  convertZipToChartData,
} from '../util/chartData';

describe('차트 데이터 정제 테스트', () => {
  describe('가로 막대 차트', () => {
    it('15개 이상의 데이터가 있으면 15개 에서 자르고, 그 외... 으로 계산한다.', () => {
      const chartData = alphabetData;
      const normalizeData = normalizeHorizontalBaseChartData({
        seriesList: chartData.x,
        labelsList: chartData.y,
      });
      expect(normalizeData.series.length).toEqual(15);
      expect(normalizeData.labels[normalizeData.labels.length - 1]).toEqual(
        '그 외',
      );
    });

    it('선택지에 숫자가 있다면 원래 순서를 반영한다.', () => {
      const normalizeData = normalizeHorizontalBaseChartData({
        seriesList: hasNumberData.x,
        labelsList: hasNumberData.y,
      });
      expect(normalizeData.labels).toEqual(hasNumberData.y);
    });

    it('점수가 있으면 그대로 리턴한다.', () => {
      const normalizeData = normalizeHorizontalBaseChartData({
        seriesList: twoXData.x,
        labelsList: twoXData.y,
        hasScore: true,
      });
      const originalData = {
        series: twoXData.x,
        labels: twoXData.y,
      };
      expect(JSON.stringify(normalizeData) === JSON.stringify(originalData));
    });

    it('점수가 없고, 숫자가 있는 선택지도 없으면 내림차순 정렬', () => {
      const normalizeData = normalizeHorizontalBaseChartData({
        seriesList: length10Data.x,
        labelsList: length10Data.y,
        hasScore: false,
      });

      const descSortedData = convertZipToChartData(
        zipChartData(length10Data.x, length10Data.y).sort(
          (a, b) => b.series - a.series,
        ),
      );

      const isSorted =
        JSON.stringify(descSortedData) === JSON.stringify(normalizeData);

      expect(isSorted).toEqual(true);
    });
  });

  describe('파이차트 및 Separated 차트', () => {
    it('차트 데이터가 6개 초과일 때 최대 슬라이스 개수를 6개로 제한하고, 나머지는 그 외로 처리한다.', () => {
      const normalizeData = ellipsisPieChartData(
        alphabetData.x,
        alphabetData.y,
      );
      expect(normalizeData.series.length).toEqual(6);
      expect(normalizeData.labels[normalizeData.labels.length - 1]).toEqual(
        '그 외',
      );
    });

    it('데이터의 개수가 6개 미만일 때는 그 외를 처리하지 않고 정렬 후 리턴한다.', () => {
      const descSortedData = descSortChartData(twoXData.x, twoXData.y);
      const series = descSortedData.map((item) => item.series);
      const labels = descSortedData.map((item) => item.label);
      const normalizeData = ellipsisPieChartData(twoXData.x, twoXData.y);

      expect(normalizeData.series).toEqual(series);
      expect(normalizeData.labels).toEqual(labels);
    });
  });
});
