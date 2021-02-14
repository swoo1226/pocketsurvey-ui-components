import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import CheckBox, { CheckBoxType } from './CheckBox';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: CheckBox,
  title: 'Components/CheckBox',
  decorators: [withKnobs],
} as Meta;

export const Single = () => {
  const selected = array('selected', ['1']);
  const name = text('name', 'CheckBox-1');

  return (
    <CheckBox
      name={name}
      selections={[{ label: 'apple' }, { label: 'mango' }]}
      selected={selected}
      onItemClick={(index: number) =>
        alert(`CheckBox-1 ${index}번째 라디오 선택지를 선택함`)
      }
    />
  );
};

export const Multiple = () => {
  const CheckBox1Selected = array('CheckBox1Selected', ['1']);
  const CheckBox1Name = text('CheckBox1Name', 'CheckBox-1');

  const CheckBox2Selected = array('CheckBox2Selected', ['0']);
  const CheckBox2Name = text('CheckBox2Name', 'CheckBox-2');

  return (
    <div>
      <CheckBox
        name={CheckBox1Name}
        selections={[{ label: 'apple' }, { label: 'mango' }]}
        selected={CheckBox1Selected}
        onItemClick={(index: number) =>
          alert(`CheckBox-1 ${index}번째 라디오 선택지를 선택함`)
        }
      />

      <CheckBox
        name={CheckBox2Name}
        selections={[{ label: '포도' }, { label: '얼그레이' }]}
        selected={CheckBox2Selected}
        onItemClick={(index: number) =>
          alert(`CheckBox-2 ${index}번째 라디오 선택지를 선택함`)
        }
      />
    </div>
  );
};
