import React, { useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import Radio2 from './Radio2';

export default {
  component: Radio2,
  title: 'Components/Radio2',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  return (
    <>
      isDisabled: {JSON.stringify(isDisabled)}
      <button onClick={() => setIsDisabled((value) => !value)}>
        setIsDisabled
      </button>
      <Radio2
        isSelected={isSelected}
        isDisabled={isDisabled}
        onClick={() => setIsSelected((v) => !v)}
      />
    </>
  );
};
