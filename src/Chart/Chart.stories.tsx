import React, { useState } from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Chart from './Chart'
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Chart,
  title: "Components/Chart",
  decorators: [withKnobs],
} as Meta;

export function BarHorizontalBase() { 
  return (
    <Chart
        type={"bar-horizontal-base"}
        labels={["인터넷 검색", "네이버 블로그", "브런치", "페이스북 페이지", "지인 소개", "뉴스기사"]}
        series={[74, 24, 5, 2, 23, 5, 2]}
    />  
  );
}


export function BarVerticalBase() { 
  return (
    <Chart
        type={"bar-vertical-base"}
        labels={["한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글한글", "네이버네이버네이버네이버네이버네이버 블로그", "브런치", "페이스북 페이지", "지인 소개", "뉴스기사"]}
        series={[74, 24, 5, 0, 23, 5, 2]}
        height={34}
    />  
  );
}
