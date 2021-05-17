import React, { useState } from "react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import ScaleSelection from "./ScaleSelection";
import { Meta } from "@storybook/react/types-6-0";
import styled from 'styled-components'
export default {
  component: ScaleSelection,
  title: "Components/ScaleSelection",
  decorators: [withKnobs],
} as Meta;

export function ScaleSelectionStory() {
  const [selected, setSelected] = useState<number | null>(null);
  const leftLabel = text("leftLabel", "추천하지 않을래요");
  const rightLabel = text("rightLabel", "추천할게요");
  const width = text("width", "660px");
  const backgroundColor = text("backgroundColor", "#FAC62D")
  const showLabel = boolean("showLabel", true)
  const selection = [10,20,30,40,50]
  //Array.from({ length: selectionLength }, (_, i) => i + 1)

  return (
    <ScaleSelection
      leftLabel={leftLabel}
      rightLabel={rightLabel} 
      selected={selected}
      onItemClick={(index: number | null) => {
        setSelected(index);
      }}
      width={width}
      backgroundColor={backgroundColor}
      showLabel={showLabel}
      selection={selection}
      // fontFamily="Noto Serif KR Bold"
      // fontSize="18px"
      // fontColor="fff000"
    />
  );
}
