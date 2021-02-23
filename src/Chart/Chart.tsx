import React from "react"

type BarTypes =
  | "bar-horizontal-analysis-report"
  | "bar-horizontal-stacked-analysis-report";

//bar-horizontal-analysis-report => 인공지능 보고서에서 사용하는 가로 바 차트
//bar-horizontal-stacked-analysis-report => 인공지능 보고서에서 사용하는 가로 바 차트. 데이터를 스택 형태로 쌓음.

type PieTypes = "pie-analysis-report";

//pie-analysis-report => 인공지능 보고서에서 사용하는 파이 차트

type EChartTypes = BarTypes & PieTypes;

type ChartType = {
  type: EChartTypes;
};

function ChartRouter(type: EChartTypes): React.ReactNode {
  switch (type) {
  case "bar-horizontal-analysis-report":
    return <React.Fragment>bar-horizontal-analysis-report</React.Fragment>
  }
}

function Chart({ type }: ChartType): React.ReactNode {
  return <React.Fragment>{ChartRouter(type)}</React.Fragment>
}

export default Chart
