import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import WholeLoading from './WholeLoading';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: WholeLoading,
  title: 'Components/WholeLoading',
  decorators: [withKnobs],
} as Meta;

export function Index() {
  return <WholeLoading isLoading />;
}
