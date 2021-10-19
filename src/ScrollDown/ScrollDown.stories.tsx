import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react/types-6-0";
import ScrollDown from './ScrollDown'

export default {
  title: "Components/ScrollDown",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index() {
  return (
    <ScrollDown />
  )
}