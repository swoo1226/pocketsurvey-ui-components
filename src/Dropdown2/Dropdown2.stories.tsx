import React, { useState, useRef } from 'react';
import Dropdown2, { IDropdownContextProps } from './Dropdown2';

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
  ];
  const [value, setValue] = useState<string>(null);
  const ref = useRef(null);

  return (
    <div
      style={{
        padding: 0,
      }}
    >
      <Dropdown2 value={value} position="left" ref={ref}>
        <Dropdown2.Group>
          {selectionList.map((selection) => (
            <Dropdown2.Selection
              key={selection}
              onClick={() => {
                console.log('ref:', ref);
                setValue(selection);
              }}
              isSelected={selection === value}
            >
              {selection}
            </Dropdown2.Selection>
          ))}
        </Dropdown2.Group>
      </Dropdown2>
    </div>
  );
};
