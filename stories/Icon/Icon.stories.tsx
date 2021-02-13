import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import Icon, { iconTypes } from './Icon';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: Icon,
  title: 'Core/Icon',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  const theme = select('icon name', iconTypes, 'singleChoice');
  const width = number('width', 50);

  return (
    <Icon icon={theme} width={width} css={{ color: 'red', width: '4rem' }} />
  );
};

export const All = () => {
  return iconTypes.map((item) => (
    <Icon icon={item} width={50} css={{ color: 'red', width: '4rem' }} />
  ));
};
