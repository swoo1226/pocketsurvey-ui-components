import React, { useState, useEffect } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import CheckRanking from "./CheckRanking";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: CheckRanking,
  title: "Components/CheckRanking",
  decorators: [withKnobs],
} as Meta;

export function Single() {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    console.log("selected:", selected);
  }, [selected]);
  return (
    <CheckRanking
      selections={[
        { label: "apple" },
        { label: "mango" },
        { label: "banana" },
        { label: "orange" },
      ]}
      selected={selected}
      onItemClick={(index: number) => {
        console.log(index);
        if (selected.includes(index)) {
          setSelected(selected.filter((item) => item != index));
        } else {
          setSelected([...selected, index]);
        }
      }}
    />
  );
}
