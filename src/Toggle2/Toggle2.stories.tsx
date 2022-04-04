import React, { useState } from 'react';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';
import Toggle2 from './Toggle2';

export default {
  title: 'Components/Toggle2', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Toggle2, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export const Index = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Toggle2
        active={active}
        onClick={(e) => {
          setActive(!active);
        }}
      />
      <Toggle2
        isDisable
        active={active}
        onClick={(e) => {
          setActive(!active);
        }}
      />
    </>
  );
};
