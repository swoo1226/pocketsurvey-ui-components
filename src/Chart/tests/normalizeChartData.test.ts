import {
  alphabetData,
  hasNumberData,
  twoXData,
  length10Data,
} from './mocks/chartData';
import { normalizeBarChartData } from '../util/chartData';

describe('차트 데이터 정제 테스트', () => {
  describe('가로 막대 차트', () => {
    it('15개 이상의 데이터가 있으면 15개 에서 자르고, 그 외... 으로 계산한다.', () => {
      const chartData = alphabetData;
      const normalizeData = normalizeBarChartData(chartData.x, chartData.y);
      expect(normalizeData.series.length).toEqual(15);
    });

    it('선택지에 숫자가 있다면 원래 순서를 반영한다.', () => {
      const normalizeData = normalizeBarChartData(
        hasNumberData.x,
        hasNumberData.y,
      );
      expect(normalizeData.labels).toEqual(hasNumberData.y);
    });

    it('점수가 있고, 선택지의 개수가 2개 이하일 때는 내림차순으로 정렬', () => {
      const normalizeData = normalizeBarChartData(twoXData.x, twoXData.y, 1);
      expect(normalizeData.series[0] > normalizeData.series[1]);
    });

    it('점수가 없고, 숫자가 있는 선택지도 없으면 내림차순으로 정렬', () => {
      const normalizeData = normalizeBarChartData(
        length10Data.x,
        length10Data.y,
      );
      const isSorted = JSON.stringify(normalizeData.series)
        === JSON.stringify(length10Data.x.sort((a, b) => b - a));

      expect(isSorted).toEqual(true);
    });
  });
});
