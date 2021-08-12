import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Radio from "./Radio";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Radio,
  title: "Components/Radio",
  decorators: [withKnobs],
} as Meta;

export function Single() {
  const [selected, setSelected] = useState<string>("apple"); // const selected = text("selected", "apple");
  const name = text("name", "radio-1");
  const disabled = boolean("disabled", true);
  const selections = [
    { label: "apple" },
    { label: "mango" },
    { label: "baNaNa" },
  ];

  const backgroundColor = text("backgroundColor", "#FAC62D");
  return (
    <Radio
      name={name}
      selections={selections}
      selected={selected}
      disabled={disabled}
      onItemClick={(index: number | null) =>
        index === null ? setSelected("") : setSelected(selections[index].label)
      }
      // disableValue="apple"
      isFocusBackgroundFunc={true}
      backgroundColor={backgroundColor}
      disableHoverBackground
    />
  );
}

export function Multiple() {
  const radio1Selected = text("radio1Selected", "mango");
  const radio1Name = text("radio1Name", "radio-1");

  const radio2Selected = text("radio2Selected", "포도");
  const radio2Name = text("radio2Name", "radio-2");

  return (
    <div>
      <Radio
        name={radio1Name}
        selections={[{ label: "apple" }, { label: "mango" }]}
        selected={radio1Selected}
        onItemClick={(index: number) =>
          alert(`radio-1 ${index}번째 라디오 선택지를 선택함`)
        }
        // itemWidth='200px'
        isFocusBackgroundFunc={true}
      />

      <Radio
        name={radio2Name}
        selections={[{ label: "포도" }, { label: "얼그레이" }]}
        selected={radio2Selected}
        onItemClick={(index: number) =>
          alert(`radio-2 ${index}번째 라디오 선택지를 선택함`)
        }
        // itemWidth='200px'
        isFocusBackgroundFunc={true}
      />
    </div>
  );
}
