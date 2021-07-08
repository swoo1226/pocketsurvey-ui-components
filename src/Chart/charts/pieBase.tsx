/* eslint-disable semi */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { getSizeCSS, mergeOption, getColors } from "../util";
import { piePercentageFormatter, sumReducer } from "../util/tooltip" 
import { sumBy, reverse ,sortBy, findIndex } from 'lodash';
type PieBaseOptionPropsType = {
  series: number[];
  labels: string[];
  override?: EChartsOption;
  showLabel?: boolean;
  labelOption?: "fixed" | "dynamic";
};

const seriesRemoveZero = (sortedData:{id: number, value: number | null}[]) => {
  sortedData.map((item:{id:number,value:number | null}, index:number)=> {
    sortedData[index].value = item.value === 0 ? null : item.value;
  })
};

const makeData = (series: number[], labels: string[]) => {
  let sortedSeries:{id:number; value: number}[] = [];
  const clonedLabels:{id: number; value: string}[] = [];
  const sortedLabelArr:{id:number, value:string}[] = [];

  labels.map((item: string, index:number) => {
    clonedLabels.push({id:index, value: item})
  });

  series.map((item:number, index:number) => {
    sortedSeries.push({id:index, value: item})
  })

  //1. 내림차순 정렬
  sortedSeries = sortBy(sortedSeries, "value").reverse();
  sortedSeries.map((item:{id:number;value:number}) => {
    const index = findIndex(clonedLabels, function(o){ return o.id == item.id});
    sortedLabelArr.push({id: clonedLabels[index].id, value: clonedLabels[index].value});
  })

  //2. 0을 null로 치환
  seriesRemoveZero(sortedSeries)

  //3. 10%에 해당하는 값을 찾고, 그 외로 묶기 
  const portion = sumBy(sortedSeries, function(o) { return o.value}) * 0.1;
  let result = 0;

  //묶인 값들은 label, serires 배열에서 값을 삭제. 
  for(let i = sortedSeries.length -1; i >=0; i-- ) {
    if(sortedSeries[i].value < portion && result + sortedSeries[i].value < portion) {
      result += sortedSeries[i].value;
      const index= findIndex(sortedSeries, function(o) { return o.id == sortedSeries[i].id})
      sortedLabelArr.splice(index,1);
      sortedSeries.splice(i,1);
    }
  }
  if(result !== 0) {
    sortedSeries.push({id:9999, value: result})
    sortedLabelArr.push({id:9999, value: "그 외"})
  }
  return {
    series: sortedSeries,
    label: sortedLabelArr,
  }
};
const PieBaseOption = ({
  series,
  labels,
  override, 
  showLabel,
  labelOption="dynamic",
}: PieBaseOptionPropsType) => {  
  const processedData = makeData(series, labels);
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
      return piePercentageFormatter(params, series.reduce(sumReducer), processedData.label)
    },
    position(
      pos: any,
      params: any,
      el: any,
      elRect: any,
      size: any,
    ) {
      if(labelOption === "fixed") {
        const obj: any = { top: 10 };
        obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    }
  };
  option.legend = {
    orient: "vertical",
    right: "right",
  };
  
  const maxSeries = Math.max.apply(null, series)
  const maxIndex = series.indexOf(maxSeries)
  
  option.series = [
    {
      color: getColors.pie(series.length, maxIndex),
      type: "pie",
      top: "5%",
      bottom: "5%",
      height: "90%",
      radius: "85%",
      data: processedData.series,
      label: {
        show: showLabel === undefined ? true : showLabel,
        color: "#0e0c0c",
        position: "outside",
        alignTo: "edge",
        margin: 20,
        edgeDistance: "25%",
        formatter: function(d) {
          return  d.value;
        }
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
  labelOption="dynamic",
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