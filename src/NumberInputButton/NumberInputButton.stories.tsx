import React, { useState } from 'react';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';
import NumberInputButton from './NumberInputButton';

export default {
  title: 'Components/NumberInputButton',
  component: NumberInputButton,
  decorators: [withKnobs],
};

export const Index = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          setValue(value + 1);
        }}
        onChange={(e) => setValue(Number(e.target.value))}
        formatter={(value) => `${value}일`}
      />
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          setValue(value + 1);
        }}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > 0) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          setValue(value + 1);
        }}
        onChange={(e) => setValue(Number(e.target.value))}
        isDisabled
      />
    </>
  );
};
