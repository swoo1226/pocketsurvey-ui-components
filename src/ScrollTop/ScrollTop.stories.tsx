import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react/types-6-0";
import ScrollTop from './ScrollTop'

export default {
  title: "Components/ScrollTop",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index() {
  const [show, setShow] = useState<'none' | 'block'>('block');

  const onScroll = () => {
    if (window.scrollY > 100) {
      setShow('block');
    } else {
      setShow('none');
    }
  };

  return (
    <ScrollTop bottom="" right="" show={show} onScroll={onScroll} />
  )
}