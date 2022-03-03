import React, { useState } from 'react';
import Dropdown2 from './Dropdown2';

export default {
  title: 'Components/Dropdown2',
  component: null,
  argTypes: {
    styletype: {
      control: {
        type: 'select',
        options: [],
      },
    },
  },
};

export const DropdownPreview = () => {
  const selectionList = [
    '값이 없습니다!값이 없습니다!값이 없습니다!값이 없습니다!값이 없습니다!',
    '가',
    '나',
    '다',
    '라',
    '마',
    '바',
  ];
  const [value, setValue] = useState<string>(null);

  return (
    <div
      style={{
        padding: 200,
      }}
    >
      <Dropdown2 value={value} position="right" placeholder="">
        <Dropdown2.Group>
          {selectionList.map((selection) => (
            <Dropdown2.Selection
              key={selection}
              onClick={() => setValue(selection)}
            >
              {selection}
            </Dropdown2.Selection>
          ))}
        </Dropdown2.Group>
      </Dropdown2>
    </div>
  );
};
