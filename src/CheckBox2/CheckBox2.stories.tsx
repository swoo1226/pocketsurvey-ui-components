import React, { useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import CheckBox2 from './CheckBox2';

export default {
  component: CheckBox2,
  title: 'Components/CheckBox2',
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
      <h1>체크 모양 SVG: children을 넘기지 않음</h1>
      <CheckBox2
        isDisabled={isDisabled}
        isSelected={isSelected}
        onClick={() => {
          setIsSelected((value) => !value);
        }}
      />
      <h1>숫자: children에 숫자를 넘김</h1>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          flexDirection: 'column',
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <CheckBox2
            isDisabled={isDisabled}
            isSelected={isSelected}
            onClick={() => {
              setIsSelected((value) => !value);
            }}
          >
            {index + 1}
          </CheckBox2>
        ))}
      </div>
    </>
  );
};
