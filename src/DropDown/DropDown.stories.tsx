import React, { useState } from "react";
import { withKnobs, boolean, select, color } from "@storybook/addon-knobs";

import DropDown from "./DropDown";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: DropDown,
  title: "Components/DropDown",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function TypeSelector() {
  const disabled = boolean("disabled", false);

  const mainColor = color("bold color", "#FAC62D");
  const subColor = color("light color", "#fef4ce");

  return (
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
        { selectionName: "순위 설정", icon: "singleChoice" },
        { selectionName: "설명 추가", icon: "singleChoice" },
      ]}
      selected={1}
      disable={disabled}
      themeColor={{ mainColor, subColor }}
      onItemClick={(index: number) => alert(`${index + 1}번째 아이템 클릭`)}
      iconColor="#FAC62D"
    />
  );
}

export function BranchSelector() {
	const [selected,setSelected] = useState(null);

  const disabled = boolean("disabled", false);

  const mainColor = color("bold color", "#59C4DB");
  const subColor = color("light color", "#DEF3F8");

  return (
    <DropDown
      placeholder={"선택해주세요"}
      list={[
        { selectionName: "다음 문항" },
        { selectionName: "Q1. 일이삼오육칠팔구십" },
        { selectionName: "Q2. 일이삼오육칠팔구십" },
        { selectionName: "Q3. 일이삼오육칠팔구십" },
        { selectionName: "Q4. 일이삼오육칠팔구십" },
        { selectionName: "Q5. 일이삼오육칠팔구십" },
        { selectionName: "Q6. 일이삼오육칠팔구십" },
        { selectionName: "Q7. 일이삼오육칠팔구십" },
        { selectionName: "종료메시지로" },
      ]}
      selected={selected}
      disable={disabled}
      themeColor={{ mainColor, subColor }}
      iconColor="#FAC62D"
      //   onItemClick={(index: number) => alert(`${index + 1}번째 아이템 클릭`)}
      onItemClick={(index: number) => setSelected({ group: 1, item: index })}
    />
  );
}
