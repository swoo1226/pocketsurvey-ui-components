/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, getColors } from "../util";
import { piePercentageFormatter, sumReducer } from "../util/tooltip";

type PieBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: any;
  showLabel?: boolean;
  labelOption?: "fixed" | "dynamic";
};

const PieBaseOption = ({
  series,
  labels,
  override,
  showLabel,
  labelOption = "dynamic",
}: PieBaseOptionPropsType) => {
  const dataLength = series.length;
  // 슬라이스를 최대 6개 까지 제한하고, 나머지는 그 외 로 처리한다.
  const processedData = getPieData(series, labels);

  const option: EChartsOption = {};

  option.center = ["50%", "50%"];
  option.xAxis = {
    show: false,
  };
  option.yAxis = {
    show: false,
  };
  option.tooltip = {
    trigger: "item",
    formatter: (params) => {
      return piePercentageFormatter(params, series.reduce(sumReducer));
    },
    position(pos: any, params: any, el: any, elRect: any, size: any) {
      if (labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
  };
  option.legend = {
    orient: "vertical",
    left: "left",
    width: "180px",
    formatter: (name: string) =>
      name.length > 20 ? `${name.substr(0, 20)}...` : name,
  };

  // 그 외 가 아닌 데이터 중 가장 큰 데이터의 인덱스를 구한다.
  const seriesWithoutOther = processedData
    .filter((item) => item.label !== "그 외")
    .map((item) => item.series);
  const maxSeries = Math.max.apply(null, seriesWithoutOther);
  const maxIndex = seriesWithoutOther.indexOf(maxSeries);

  option.series = [
    {
      color: getColors.pie(dataLength, maxIndex),
      type: "pie",
      top: "5%",
      bottom: "5%",
      height: "90%",
      radius: "85%",
      data: processedData.map((item) => {
        return { value: item.series, name: item.label };
      }),

      label: {
        show: showLabel === undefined ? true : showLabel,
        color: "#0e0c0c",
        position: "outside",
        alignTo: "labelLine",
        margin: 20,
        edgeDistance: "25%",
        formatter: function (d) {
          return d.value;
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
        },
      },
    },
  ];

  return mergeOption({
    option,
    override,
  });
};

type PieBasePropsType = {
  width?: number | string;
  height?: number | string;
} & PieBaseOptionPropsType;

const getPieData = (series: number[], labels: string[]) => {
  const rawData: {
    series: number;
    label: string;
  }[] = [];
  const dataLength = series.length;
  for (let i = 0; i < dataLength; i += 1) {
    rawData.push({
      series: series[i],
      label: labels[i],
    });
  }

  const sumOfSeries = series.reduce((acc, cur) => acc + cur, 0);

  const sortedRawData = rawData.sort((a, b) => b.series - a.series);

  if (dataLength <= 6) {
    // 데이터의 개수가 6개 이하라서 '그 외' 를 처리할 필요가 없다.
    return sortedRawData;
  }

  // 데이터의 개수가 많아서 최대 6개로 제한하고 나머지 데이터는 '그 외' 로 처리한다.
  let sumOther = 0;
  let lastIndex = 0;

  // 그 외 처리 조건 1.총합 10% 이하인 데이터는 그 외로 처리한다.
  // 내림차순 정렬 된 데이터를 마지막부터 접근하면서 그 합이 10%를 초과했을 때 인덱스를 구한다.
  for (let i = dataLength - 1; i >= 0; i -= 1) {
    sumOther += sortedRawData[i].series;
    if (sumOther > sumOfSeries / 10) {
      break;
    }
    lastIndex = i;
  }

  // 그 외 처리 조건 2. 1로직을 거치고 나서 데이터가 6개 초과면 6개까지로 제한한다.
  if (lastIndex > 6) {
    lastIndex = 5;
  }

  return [
    ...sortedRawData.slice(0, lastIndex),
    {
      series: sortedRawData
        .slice(lastIndex)
        .reduce((acc, cur) => acc + cur.series, 0),
      label: "그 외",
    },
  ];
};

function PieBase({
  series,
  labels,
  override,
  width,
  height,
  showLabel,
  labelOption = "dynamic",
}: PieBasePropsType) {
  return (
    <EChartsReact
      style={getSizeCSS(width, height)}
      option={PieBaseOption({
        series,
        labels,
        override,
        showLabel,
        labelOption,
      })}
    />
  );
}

export default PieBase;
