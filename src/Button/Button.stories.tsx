import React, { useState, useRef, useEffect } from "react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

import Button from "./Button";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Button,
  title: "Components/Button",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index(): JSX.Element {
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const backgroundColor = text("backgroundColor", "#FAC62D");
  const [isSpinner, setIsSpinner] = useState<boolean>(true);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("buttonRef:", buttonRef?.current);
  }, [buttonRef]);

  return (
    <>
      <Button
        theme={theme}
        disabled={disabled}
        backgroundColor={backgroundColor}
        onClick={() => {
          setIsSpinner(!isSpinner);
        }}
        isLoading={isSpinner}
        buttonRef={buttonRef}
      >
        벝흔
      </Button>
      <br />
      <Button
        theme={theme}
        disabled={disabled}
        onClick={() => alert("BasicButton")}
        backgroundColor={backgroundColor}
      >
        벝흔
      </Button>
    </>
  );
}
