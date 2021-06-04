export const sumReducer = (accumulator: number, currentValue: null | number) =>
  accumulator + (currentValue ?? 0)

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
