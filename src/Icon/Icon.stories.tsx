import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

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
  const color = text('color', 'black');
  const rotate = number('rotate', 0);

  return <Icon icon={theme} width={width} color={color} rotate={rotate} />;
};

export const All = () => {
  return iconTypes.map((item) => (
    <Icon icon={item} width={50} color={'black'} rotate={0} />
  ));
};
