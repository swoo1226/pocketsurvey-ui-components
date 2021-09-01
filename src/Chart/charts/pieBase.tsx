/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, getColors } from "../util";
import { piePercentageFormatter, sumReducer } from "../util/tooltip";
import { ellipsisPieChartData } from "../util/chartData";

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
  const processedData = ellipsisPieChartData(series, labels);

  console.log("processedData", processedData)
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
  const hasOther = processedData.labels.indexOf("그 외")
  
  const seriesWithoutOther = hasOther === -1 ? processedData.series : processedData.series.filter((_,index) => index !== hasOther)
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
      data: { value: processedData.series, name: processedData.labels },
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
