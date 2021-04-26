import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import Radio from "./Radio";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Radio,
  title: "Components/Radio",
  decorators: [withKnobs],
} as Meta;

export function Single() {
  const name = text("name", "radio-1");
  const selected = number("selected", 1);
  return (
    <Radio
      name={name}
      selections={[{ label: "apple" }, { label: "mango" }]}
      selected={selected}
      onItemClick={(index: number) =>
        alert(`radio-1 ${index}번째 라디오 선택지를 선택함`)
      }
    />
  );
}

export function Multiple() {
  const selected1 = number("selected1", 1);
  const radio1Name = text("radio1Name", "radio-1");
  const selected2 = number("selected2", 0);
  const radio2Name = text("radio2Name", "radio-2");

  return (
    <div>
      <Radio
        name={radio1Name}
        selections={[{ label: "apple" }, { label: "mango" }]}
        selected={selected1}
        onItemClick={(index: number) =>
          alert(`radio-1 ${index}번째 라디오 선택지를 선택함`)
        }
      />

      <Radio
        name={radio2Name}
        selections={[{ label: "포도" }, { label: "얼그레이" }]}
        selected={selected2}
        onItemClick={(index: number) =>
          alert(`radio-2 ${index}번째 라디오 선택지를 선택함`)
        }
      />
    </div>
  );
}
