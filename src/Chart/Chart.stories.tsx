import React, { useState, useEffect } from "react";
import {
  withKnobs,
  boolean,
  number,
  select,
  color,
} from "@storybook/addon-knobs";
import DropDown from "../DropDown/DropDown";
import Chart from "./Chart";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Chart,
  title: "Components/Chart",
  decorators: [withKnobs],
} as Meta;

export function BarVerticalSeparated() {
  const CHART_DATA_LENGTH = 8;

  const getRandomNumberArray = (length: number) =>
    Array(length)
      .fill(0)
      .map((_) => Math.ceil(Math.random() * (50 - 0) + 0));

  const series = Array(CHART_DATA_LENGTH)
    .fill(number)
    .map((_) => getRandomNumberArray(CHART_DATA_LENGTH));

  return (
    <Chart.BarVerticalSeparated
      xAxisLabel={[
        "신차 구매 등 차량 변경",
        "거리 등 접근성",
        "제휴 혜택 등 가격",
        "기타:",
      ]}
      label={["매우 만족", "만족", "불만족", "매우 불만족", "복숭아", "사탕탕", "냠냠냠", "맛있어"]}
      series={series}
      hundredPercent={{ tooltip: true, series: true }}
    />
  );
}

export function BarHorizontalBase() {
  const [selected, setSelected] = useState(0);
  const alignment = [null, "descend", "ascend"];
  const disabled = boolean("disabled", false);
  const mainColor = color("bold color", "#FAC62D");
  const subColor = color("light color", "#fef4ce");
  const [align, setAlign] = useState(null);
  const len = 20
    
  const getRandom = () => Math.ceil(Math.random() * (50 - 0) + 0);
  const dummy = Array(len)
    .fill(0)
    .map((_) => getRandom());

    const koreanDummy = dummy.reduce((acc, cur)=> {
      const raw = [
        "훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한",
        "모든 국민은 인간다운 생활을 할 권리를 가진다. 탄핵소추의",
        "모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로",
        "대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을",
        "법원은 최고법원인 대법원과 각급법원으로 조직된다. 비상계",
        "대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일",
        "헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수",
        "군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다",
        "대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여",
        "국무위원은 국무총리의 제청으로 대통령이 임명한다. 헌법개"
    ]
    acc.push(raw[Math.ceil(Math.random() * (9 - 0) + 0)])
    return acc  
  }, [])

  return (
    <>
      <Chart.BarHorizontalBase 
        labels={koreanDummy}
        series={dummy}
      />
      <DropDown
        list={[
          { selectionName: "정렬 없음" },
          { selectionName: "내림차순" },
          { selectionName: "오름차순" },
        ]}
        selected={selected}
        disable={disabled}
        themeColor={{ mainColor, subColor }}
        onItemClick={(index: number) => {
          setSelected(index);
          setAlign(alignment[index]);
        }}
        iconColor="#FAC62D"
      />
      <Chart.BarHorizontalBase
        labels={[
          "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
          "네이버네이버네이버네이버네이버네이버 블로그",
          "브런치",
          "페이스북 페이지",
          "지인 소개",
          "뉴스기사",
        ]}
        series={[74, 24, 5, 1, 23, 5, 2]}
        align={align}
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
      series={[60.1341234, 24.23423132123, 5.1235545209, 0, 23, 5, 2]}
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

  const mockData = [
    ["가나다라마가나다라마가나다라마가나다라마가", 10],
    ["B", 20],
    ["C", 11],
    ["D", 13],
    ["E", 2],
    ["F", 5],
    ["G", 7],
    ["H", 8],
    ["I", 1],
    ["J", 3],
    ["K", 4],
  ];

  return (
    <>
      <Chart.PieBase
        labels={mockData.map((mock) => mock[0]) as string[]}
        series={mockData.map((mock) => mock[1]) as number[]}
        showLabel={showLabel}
        labelOption={"fixed"}
      />
      <Chart.PieBase
        labels={[
          "선택지1",
          "선택지2",
          "선택지3",
          "선택지4",
          "선택지5",
          "선택지6",
        ]}
        series={[60, 0, 280, 439, 30.2, 4092]}
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
      <Chart.Bubble width={700} height={400} />
    </>
  );
}

export function BarNegative() {
  const [selected, setSelected] = useState(0);
  const means = [40, 27, 15];
  const disabled = boolean("disabled", false);
  const mainColor = color("bold color", "#FAC62D");
  const subColor = color("light color", "#fef4ce");
  const [mean, setMean] = useState(means[0]);
  useEffect(() => {
    setMean(means[selected]);
  }, [selected]);
  return (
    <>
      <DropDown
        list={[
          { selectionName: "전체 평균" },
          { selectionName: "Q3" },
          { selectionName: "Q6" },
        ]}
        selected={selected}
        disable={disabled}
        themeColor={{ mainColor, subColor }}
        onItemClick={(index: number) => setSelected(index)}
        iconColor="#FAC62D"
      />
      <Chart.BarNegative
        width={700}
        height={400}
        labels={[
          "한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글",
          "네이버 블로그",
          "브런치",
          "페이스북 페이지",
          "네이버네이버네이버네이버네이버네이버 블로그",
          "뉴스기사",
        ]}
        series={[74.1203, 24.102345, 5.234, 2.05, 23.12, 27.23]}
        standard={mean}
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
