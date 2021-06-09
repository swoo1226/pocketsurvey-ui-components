import React, { useState } from "react";
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs";

import Chart from "./Chart";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Chart,
  title: "Components/Chart",
  decorators: [withKnobs],
} as Meta;

export function BarVerticalSeparated() {
  return (
    <Chart.BarVerticalSeparated
      xAxisLabel={[
        "신차 구매 등 차량 변경",
        "거리 등 접근성",
        "제휴 혜택 등 가격",
        "기타:",
      ]}
      label={["매우 만족", "만족", "불만족", "매우 불만족"]}
      series={[
        [28.6, 13.2, 4.1, 2.5, 7.2],
        [71.4, 86.8, 95.9, 97.5, 92.8],
        [
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
        ],
        [
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
          Math.ceil(Math.random() * (50 - 0) + 0),
        ],
      ]}
      hundredPercent={{ tooltip: true, series: true }}
    />
  );
}

export function BarHorizontalBase() {
  const ellipsis = number("ellipsis", 10);
  return (
    <>
      <Chart.BarHorizontalBase
        labels={["라벨 1번", "2번 라벨"]}
        series={[123, 456]}
      />
      <Chart.BarHorizontalBase
        labels={[
          "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
          "네이버 블로그",
          "브런치",
          "페이스북 페이지",
          "네이버네이버네이버네이버네이버네이버 블로그",
          "뉴스기사",
          "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
          "네이버 블로그",
          "브런치",
          "페이스북 페이지",
          "네이버네이버네이버네이버네이버네이버 블로그",
          "뉴스기사",
          "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
          "네이버 블로그",
          "브런치",
          "페이스북 페이지",
          "네이버네이버네이버네이버네이버네이버 블로그",
          "뉴스기사",
        ]}
        series={[
          74,
          24,
          5,
          2,
          23,
          5,
          2,
          74,
          24,
          5,
          2,
          23,
          5,
          2,
          74,
          24,
          5,
          2,
          23,
          5,
          2,
        ]}
      />
    </>
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
      override={{
        series: [
          {
            markLine: {
              symbol: "none",
              data: [{ type: "average", name: "" }],
              label: {
                show: true,
                formatter: " {c}",
                position: "middle",
                fontSize: 14,
              },
              lineStyle: {
                color: "#000000",
                type: "solid",
                width: 1.5,
              },
            },
          },
        ],
      }}
    />
  );
}

export function LineBase() {
  const labelOption = select("labelOption", ["fixed", "dynamic"], "dynamic");
  const hasMarker = boolean("hasMarker", false);
  const smooth = boolean("smooth", false);
  return (
    <Chart.LineBase
      labels={["매우 만족함", "만족함", "보통", "불만족함", "매우 불만족함"]}
      series={[109, 650, 626, 3619, 3483].reverse()}
      labelOption={labelOption}
      hasMarker={hasMarker}
      smooth={smooth}
    />
  );
}

export function PieBase() {
  const showLabel = boolean("showLabel", true);
  return (
    <>
      <Chart.PieBase
        labels={["선택지1", "선택지2"]}
        series={[30, 50]}
        showLabel={showLabel}
      />
      <Chart.PieBase
        labels={["선택지1", "선택지2"]}
        series={[60, 0]}
        showLabel={showLabel}
      />
      <Chart.PieBase
        labels={Array.from({ length: 26 }, (_, i) => String(i + 1)).reverse()}
        series={Array.from({ length: 26 }, (_, i) => i + 1).reverse()}
        showLabel={showLabel}
      />
      <Chart.PieBase
        labels={["매우 만족함", "만족함", "보통", "불만족함", "매우 불만족함"]}
        series={[109, 650, 626, 3619, 3483].reverse()}
        showLabel={showLabel}
      />
    </>
  );
}

export function Bubble() {
  return (
    <>
      <Chart.Bubble
      />
    </>
  );
}


export function BarHorizontalStacked() {
  return (
    <>
      <Chart.BarHorizontalStacked
        labels={[
          "서비스 응대 태도",
          "정비 품질",
          "소요시간",
          "가격",
          "고객대기공간",
        ]}
        series={[
          [9517, 1038],
          [864, 4196],
          [989, 3029],
          [1066, 2171],
          [153, 665],
        ]}
        yAxisLabel={["1순위", "2순위"]}
        hundredPercent={{
          series: true,
          tooltip: true,
        }}
      />
    </>
  );
}

export function BarVerticalStacked() {
  const genCharArray = (charA, charZ) => {
    var a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i).repeat(4));
    }
    return a;
  };

  return (
    <>
      <h3>NPS</h3>
      <Chart.BarVerticalStacked
        nps={true}
        labels={["비추천", "중립", "추천"]}
        series={[
          [60, 67],
          [21, 33],
          [18, 0],
        ]}
        xAxisLabel={["2021-04 (131명)", "2021-05 (3명)"]}
        line={[
          {
            name: "NPS",
            series: [-41.98, -66.67],
          },
        ]}
        hundredPercent={{
          series: false,
          tooltip: true,
        }}
        override={{
          yAxis: [
            {
              type: "value",
              nameLocation: "middle",
              nameGap: 50,
              min: 0,
              max: 100,
              interval: 10,
            },
            {
              opposite: true,
              type: "value",
              min: -100,
              max: 100,
              position: "right",
              interval: 20,
              axisLine: {
                onZero: 0,
              },
              nameLocation: "middle",
              nameGap: 50,
            },
          ],
        }}
      />
      <Chart.BarVerticalStacked
        labels={["매우 만족함", "만족함", "보통", "불만족", "매우 불만족"]}
        series={[
          [71, 64],
          [53, 123],
          [60, null],
          [64, 59],
          [70, 72],
        ]}
        xAxisLabel={[
          "매장 직원의 고객 응대에 대해서 얼마나 만족하셨나요?",
          "매장 및 화장실의 청결 상태에 대해서 얼마나 만족하셨나요?",
        ]}
        hundredPercent={{
          series: true,
          tooltip: true,
        }}
      />

      <Chart.BarVerticalStacked
        labels={[
          "매우 적절함",
          "적절함",
          "보통",
          "적절하지 않음",
          "매우 적절하지 않음",
        ]}
        series={[
          [25, null, 0, 0, 0],
          [25, null, 0, 50, 0],
          [0, null, 50, 0, 0],
          [0, null, 0, 0, 25],
          [0, null, 0, 0, 25],
        ]}
        xAxisLabel={["매우 만족함", "만족함", "보통", "불만족", "매우 불만족"]}
      />
      <Chart.BarVerticalStacked
        labels={genCharArray("a", "y")}
        series={[
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
          [4, 4, 4, 4, 4, 4, 4, 4, 4],
        ]}
        hundredPercent={{
          series: false,
          tooltip: true,
        }}
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
            name: "1부터 9까지",
            series: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
          {
            name: "전부 15",
            series: Array.from({ length: 9 }).fill(15) as number[],
          },
        ]}
        override={{
          yAxis: {
            max: 100,
          },
        }}
      />
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
            name: "1부터 9까지",
            series: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
          {
            name: "랜덤",
            series: Array.from({ length: 9 }).map((item) =>
              Math.ceil(Math.random() * (50 - 0) + 0)
            ),
          },
        ]}
        override={{
          yAxis: {
            max: 100,
          },
        }}
      />
    </>
  );
}
