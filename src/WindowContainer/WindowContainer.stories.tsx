import React from "react"
import { Meta } from "@storybook/react/types-6-0";
import {
  withKnobs,
  color,
  number,
  boolean
} from "@storybook/addon-knobs";
import VirtualizedWindowContainer from './VirtualizedWindowContainer'
import Button from '../Button/Button'
import DropDown from '../DropDown/DropDown'
export default {
  component: VirtualizedWindowContainer,
  title: "Components/VirtualizedWindowContainer",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index() {
  const height = number("height", 500);
  const itemSize = number("itemSize", 100);
  const usingWindowScroller = boolean("usingWindowScroller", false);
    let dataList : JSX.Element[] = []
    for (let i = 0; i < 100; i++) {
      dataList.push(
          <Button
            className="margins"
            theme={"primary"}
            disabled={false}
            onClick={() => alert("BasicButton")}
          >
            버튼 {i + 1}
          </Button>
      );
    }
    for (let i = 0; i < 100; i++) {
      dataList.push(
        <DropDown
          list={[
            {
              selectionName: "객관식 (단일 선택)",
              icon: "singleChoice",
            },
            { selectionName: "객관식 (복수 선택)", icon: "singleChoice" },
            { selectionName: "객관식 (이미지 선택)", icon: "singleChoice" },
            { selectionName: "주관식 (텍스트)", icon: "singleChoice" },
            { selectionName: "주관식 (이미지)", icon: "singleChoice" },
            { selectionName: "객관식 (영상)", icon: "singleChoice" },
            { selectionName: "설명 추가", icon: "singleChoice", hidden: true },
            { selectionName: "순위 설정", icon: "singleChoice" },
          ]}
          selected={0}
          disable={false}
          themeColor={{ mainColor: "#FAC62D", subColor: "fef4ce" }}
          onItemClick={(index: number) => alert(index)}
          iconColor="#FAC62D"
        />
        // <div style={{ marginBottom: "20px", padding: "10px" }}>
        //   <p>{i + 1}번 차트</p>
        //   <Chart.BarVerticalSeparated
        //     xAxisLabel={[
        //       "신차 구매 등 차량 변경",
        //       "거리 등 접근성",
        //       "제휴 혜택 등 가격",
        //       "기타:",
        //     ]}
        //     label={["매우 만족", "만족", "불만족", "매우 불만족"]}
        //     series={[
        //       [28.6, 13.2, 4.1, 2.5, 7.2],
        //       [71.4, 86.8, 95.9, 97.5, 92.8],
        //       [
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //       ],
        //       [
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //         Math.ceil(Math.random() * (50 - 0) + 0),
        //       ],
        //     ]}
        //     hundredPercent={{ tooltip: true, series: true }}
        //   />
        // </div>
      );
     }
    dataList = dataList.sort(() => 0.5 - Math.random());
    return (
        <VirtualizedWindowContainer
          dataList={dataList}
          usingWindowScroller={usingWindowScroller}
          height={height}
          itemSize={itemSize}
          // useIsScrolling={useIsScroll}
          // highlightColor={highlightColor}
          // backgroundColor={backgroundColor}
        />
    );
}