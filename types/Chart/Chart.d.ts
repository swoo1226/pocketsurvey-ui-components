declare function Chart(): JSX.Element;
declare namespace Chart {
    var BarHorizontalBase: typeof import("./charts/barHorizontalBase").default;
    var BarVerticalBase: typeof import("./charts/barVerticalBase").default;
    var BarHorizontalStacked: typeof import("./charts/barHorizontalStacked").default;
    var BarVerticalStacked: typeof import("./charts/barVerticalStacked").default;
    var BarVerticalSeparated: typeof import("./charts/barVerticalSeparated").default;
    var LineBase: typeof import("./charts/lineBase").default;
    var PieBase: typeof import("./charts/pieBase").default;
    var Bubble: typeof import("./charts/Bubble").default;
    var BarNegative: typeof import("./charts/BarNegative").default;
    var util: {
        getColors: {
            pie: (seriesLength: number, maxIndex: number) => string[];
            barStacked: (seriesLength: number) => string[];
            bubble: (seriesLength: number, maxIndex: number) => string[];
        };
    };
}
export default Chart;
