import React, { useState } from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import ScaleSelection from "./ScaleSelection";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: ScaleSelection,
  title: "Components/ScaleSelection",
  decorators: [withKnobs],
} as Meta;

export function ScaleSelectionStory() {
  const [selected, setSelected] = useState<number | null>(null);
  const leftLabel = text("leftLabel", "추천하지 않을래요");
  const rightLabel = text("rightLabel", "추천할게요");
  const selectionLength = number("selectionLength", 11);
  const width = text("width", "660px");
  return (
    <ScaleSelection
      leftLabel={leftLabel}
      rightLabel={rightLabel}
      selectionLength={selectionLength}
      selected={selected}
      onItemClick={(index: number | null) => {
        setSelected(index);
      }}
      width={width}
    />
  );
}
