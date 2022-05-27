import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
  decorators: [withKnobs],
} as Meta;

export const TypographyPreview = () => {
  return (
    <div>
      <Typography token="caption-l">caption-l</Typography>
      <Typography token="button-l">button-l</Typography>
      <Typography token="title-l">title-l</Typography>
      <Typography token="tooltip-m">tooltip-m</Typography>
    </div>
  );
};
