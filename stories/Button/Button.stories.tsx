import React from 'react';

import { Button, ButtonType } from './Button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const BasicSmallButton = Template.bind({});
BasicSmallButton.args = {
  onClick: () => alert('BasicButton'),
  theme: 'primary',
  size: 'small',
  disabled: false,
  children: '버튼',
};
