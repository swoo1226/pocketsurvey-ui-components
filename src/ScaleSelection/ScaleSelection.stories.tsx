import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import ScaleSelection from "./ScaleSelection";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: ScaleSelection,
  title: "Components/ScaleSelection",
  decorators: [withKnobs],
} as Meta;

export function ScaleSelectionStory() {
  return (
    <ScaleSelection leftLabel='추천하지 않을래요' rightLabel='추천할게요' selectionLength={11} slected={3}/>
  );
}