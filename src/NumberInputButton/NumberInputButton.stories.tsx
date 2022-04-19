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
  const [minMax, setMinMax] = useState([0, 10000]);
  const [min, max] = minMax;

  return (
    <>
      <div>
        <span>Enter Min: </span>
        <input
          type="number"
          onChange={(e) => setMinMax([e.target.valueAsNumber || 0, max])}
        />
      </div>
      <div>
        <span>Enter Max: </span>
        <input
          type="number"
          onChange={(e) => setMinMax([min, e.target.valueAsNumber || 10000])}
        />
      </div>
      <div></div>
      <p>{`min: ${min}, max: ${max}`}</p>
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > min) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          if (value < max) {
            setValue(value + 1);
          }
        }}
        handleValueChange={(valueTemp) => {
          if (valueTemp < min) {
            setValue(min);
            return;
          }
          if (valueTemp > max) {
            setValue(max);
            return;
          }
          setValue(valueTemp);
        }}
        formatter={(value) => `${value}일`}
      />
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > min) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          if (value < max) {
            setValue(value + 1);
          }
        }}
        handleValueChange={(valueTemp) => {
          if (valueTemp < min) {
            setValue(min);
            return;
          }
          if (valueTemp > max) {
            setValue(max);
            return;
          }
          setValue(valueTemp);
        }}
      />
      <NumberInputButton
        value={value}
        minusButtonClick={() => {
          if (value > min) {
            setValue(value - 1);
          }
        }}
        plusButtonClick={() => {
          if (value < max) {
            setValue(value + 1);
          }
        }}
        handleValueChange={(valueTemp) => {
          if (valueTemp < min) {
            setValue(min);
            return;
          }
          if (valueTemp > max) {
            setValue(max);
            return;
          }
          setValue(valueTemp);
        }}
        isDisabled
      />
    </>
  );
};
