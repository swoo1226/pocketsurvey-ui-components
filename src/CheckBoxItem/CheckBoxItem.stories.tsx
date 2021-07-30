import React, { useState } from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import CheckBoxItem from "./CheckBoxItem";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: CheckBoxItem,
  title: "Components/CheckBoxItem",
  decorators: [withKnobs],
} as Meta;

export function Single() {
  const [checked, setChecked] = useState<boolean>(false);
  const backgroundColor = text("backgroundColor", "#f2ab28")

  return (
    <CheckBoxItem
      checked={checked}
      onClick={(checked) => setChecked(checked)}
      backgroundColor={backgroundColor}
    />
  );
}
