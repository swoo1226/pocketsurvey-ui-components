import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react/types-6-0";
import IEWarning from './IEWarning'

export default {
  title: "Components/IEWarning",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index() {
  return (
    <IEWarning showIEWarning={true} setShowIEWarning={() => {}} />
  )
}