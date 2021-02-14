import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Button, ButtonType } from './Button';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export const Index = () => {
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary',
  );
  const size = select('size', ['small', 'medium', 'big'], 'small');
  const disabled = boolean('disabled', false);

  return (
    <Button
      theme={theme}
      size={size}
      disabled={disabled}
      onClick={() => alert('BasicButton')}
    >
      버튼
    </Button>
  );
};
