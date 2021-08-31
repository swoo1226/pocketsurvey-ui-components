const zip = (a: any[], b: any[]) =>
  Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]])

export const ellipsisBarChartData = (
  seriesList: number[],
  labelsList: string[]
): {
  series: number[];
  labels: string[];
} => {
  const chartData: (number | string)[][] = zip(seriesList, labelsList).sort(
    (a, b) => b[0] - a[0]
  )
  // 0번째 요소에 series, 1번째 요소에 label 값이 들어감

  const others: (string | number)[] =
    seriesList.length <= 14
      ? []
      : chartData.splice(14).reduce(
        (acc, cur) => {
          (acc[0] as number) += cur[0] as number
          return acc
        },
        [0, "그 외"]
      )

  return {
    series: [...chartData, others].map((item) => item[0]) as number[],
    labels: [...chartData, others].map((item) => item[1]) as string[],
  }
}

export default {}
