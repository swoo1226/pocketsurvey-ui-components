import React from 'react';
import { getColors } from './util/index';
import {
  BarHorizontalBase,
  BarVerticalBase,
  BarVerticalStacked,
  BarHorizontalStacked,
  BarVerticalSeparated,
  LineBase,
  PieBase,
  Bubble,
  BarNegative,
} from './charts';
import { getSortRule } from './util/chartData';

function Chart() {
  return <></>;
}

Chart.BarHorizontalBase = BarHorizontalBase;
Chart.BarVerticalBase = BarVerticalBase;
Chart.BarHorizontalStacked = BarHorizontalStacked;
Chart.BarVerticalStacked = BarVerticalStacked;
Chart.BarVerticalSeparated = BarVerticalSeparated;
Chart.LineBase = LineBase;
Chart.PieBase = PieBase;
Chart.Bubble = Bubble;
Chart.BarNegative = BarNegative;

Chart.util = {
  getColors,
  getSortRule,
};

export default Chart;
