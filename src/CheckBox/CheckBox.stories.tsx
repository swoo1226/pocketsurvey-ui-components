import React, { useState } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import CheckBox from "./CheckBox";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: CheckBox,
  title: "Components/CheckBox",
  decorators: [withKnobs],
} as Meta;

export function Single() {
  const [selected, setSelected] = useState([1]);
  const disabled = boolean("disabled", false);
  return (
    <CheckBox
      selections={[{ label: "apple" }, { label: "mango" }]}
      selected={selected}
      disabled={disabled}
      onItemClick={(index: number) => {
        console.log(index);
        if (selected.includes(index)) {
          setSelected(selected.filter((item) => item != index));
        } else {
          setSelected([...selected, index]);
        }
      }}
      isFocusBackgroundFunc={true}
    />
  );
}
