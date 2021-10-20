import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import CustomTooltip from './CustomTooltip';

export default {
  title: 'Components/CustomTooltip',
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index() {
  return (
    <CustomTooltip
      content="설문 현황"
      distance={5}
      tipContentClassName="custom-tooltip"
    >
      <span>설문 현황</span>
    </CustomTooltip>
  );
}
