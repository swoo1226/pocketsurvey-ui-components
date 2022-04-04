import React, { useState } from 'react';
import { withKnobs, select, boolean, color } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import GroupButton from './groupButton';

export default {
  component: GroupButton,
  title: 'Components/groupButton',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <h1>{value}</h1>
      <GroupButton
        selections={[
          {
            title: '첫 선택지',
            onMouseLeave: () => {
              console.log('onMouseLeave!');
            },
          },
          {
            title: 'middle',
          },
          {
            title: '중간 선택지입니다.',
          },
          {
            title: '마지막',
          },
        ]}
        value={value}
        setValue={(value) => {
          setValue(value);
        }}
      />
    </>
  );
};
