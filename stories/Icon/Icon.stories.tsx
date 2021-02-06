import React from 'react';

import { Icon, IconType } from './Icon';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  component: Icon,
  title: 'Core/Icon',
} as Meta;

const Template: Story<IconType> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  stroke: 'blue',
  width: '20px',
};
