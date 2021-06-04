import {getMaxLabelWidth} from "./index"

export const sumReducer = (accumulator: number, currentValue: null | number) =>
  accumulator + (currentValue ?? 0)

export const verticalStackedFormatter = (
  params: {
      dataIndex: number;
      seriesIndex: number;
      marker: string;
      seriesName: string;
      data:
        | {
            value: number | null;
          }
        | number
        | null;
      axisValueLabel: string;
    }[], 
  series: (number |null)[][]
) => {
  const maxLabelWidth = getMaxLabelWidth(params.map((item) => item.seriesName))
  
  const row = params.map((param) => { 
    const tooltipValue = series[param.seriesIndex][param.dataIndex]
    const value = `${tooltipValue ? tooltipValue : "-"}`
    const _percent = typeof param.data === "number" ? param.data : param.data?.value
    const percent = _percent ? `${_percent}%` : "0%"
    return `<div style="display: flex; justify-content: space-between;">
        <div style="width: ${Math.ceil(maxLabelWidth) + 10}px; text-align: left;">
          ${param.marker}
          <span>${param.seriesName}</span>
        </div>
        <span style="font-weight:700;">${value} (${percent})</span>
        </div>`
  })
  return `
      <div style="text-align: left;">
    <span>${params[0].axisValueLabel}</span>
      ${row.join("")}
      </div>
    `
}

export const piePercentageFormatter = (
  params: {
    data: {
      name: string;
      value: number | null;
    };
    marker: string;
  },
  seriesSum: number
): string => {
  const percentValue = params.data.value
    ? (params.data.value / seriesSum) * 100
    : 0
  const percent = params.data.value ? `${percentValue.toFixed(2)}%` : "0%"

  return `
  <div style="text-align: left;">
  ${params.marker} ${params.data.name} <p style="font-weight: 700; display: inline; margin-left: 10px;">${params.data.value} (${percent})</p>
    </div>
    `
}
