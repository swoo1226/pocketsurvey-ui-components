import React, { useState } from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Chart from "./Chart";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Chart,
  title: "Components/Chart",
  decorators: [withKnobs],
} as Meta;

export function BarHorizontalBase() {
  return (
    <Chart.BarHorizontalBase
      labels={[
        "인터넷 검색",
        "네이버 블로그",
        "브런치",
        "페이스북 페이지",
        "지인 소개",
        "뉴스기사",
      ]}
      series={[74, 24, 5, 2, 23, 5, 2]}
    />
  );
}

export function BarVerticalBase() {
  return (
    <Chart.BarVerticalBase
      labels={[
        "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
        "네이버네이버네이버네이버네이버네이버 블로그",
        "브런치",
        "페이스북 페이지",
        "지인 소개",
        "뉴스기사",
      ]}
      series={[74, 24, 5, 0, 23, 5, 2]}
      reRenderWhenResize={true}
    />
  );
}

export function LineBase() {
  return (
    <Chart.LineBase
      labels={["매우 만족함", "만족함", "보통", "불만족함", "매우 불만족함"]}
      series={[109, 650, 626, 3619, 3483].reverse()}
      labelOption="dynamic"
      hasMarker={true}
      smooth={true}
    />
  );
}

export function PieBase() {
  return (
    <Chart.PieBase
      labels={["매우 만족함", "만족함", "보통", "불만족함", "매우 불만족함"]}
      series={[109, 650, 626, 3619, 3483]}
    />
  );
}

export function BarHorizontalStacked() {
  return (
    <Chart.BarHorizontalStacked
      labels={["A", "B", "기타:"]}
      series={[
        [30, 20, 10],
        [20, 10, 5],
        [10, 5, 0],
      ]}
      yAxisLabel={["1순위", "2순위", "3순위"]}
    />
  );
}

export function BarVerticalStacked() {
  return (
    <Chart.BarVerticalStacked
      labels={[
        "인터넷 검색",
        "네이버 블로그",
        "브런치",
        "페이스북 페이지",
        "지인 소개",
        "뉴스",
        "기타:",
      ]}
      series={[
        [50, 57.9, 63, 50, 37.5, 50, 50, null, 100],
        [null, 15.8, 11.1, 16.7, null, null, null, 100, null],
        [null, null, 3.7, 5.6, 12.5, null, null, null, null],
        [null, 5.3, null, null, null, null, null, null, null],
        [null, 15.8, 18.5, 16.7, 37.5, 50, 50, null, null],
        [50, null, 3.7, 5.6, 12.5, null, null, null, null],
        [null, 5.3, null, 5.6, null, null, null, null, null],
      ]}
      xAxisLabel={[
        "날짜: 2019-11-17",
        "날짜: 2019-11-24",
        "날짜: 2019-12-01",
        "날짜: 2019-12-08",
        "날짜: 2019-12-15",
        "날짜: 2019-12-22",
        "날짜: 2019-12-29",
        "날짜: 2020-01-05",
        "날짜: 2020-01-12",
      ]}
      line={[
        {
          name: "구간 평균 점수",
          series: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        {
          name: "전체 평균 점수",
          series: Array.from({ length: 9 }).fill(15) as number[]
        },
      ]}
    />
  );
}