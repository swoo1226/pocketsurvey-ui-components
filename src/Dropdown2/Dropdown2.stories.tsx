import React, { useState } from 'react';
import Dropdown from './Dropdown2';

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
  const selectionList = ['가', '나', '다', '라', '마', '바'];
  const [value, setValue] = useState<string>('가');
  return (
    <>
      <Dropdown width={200} value={value}>
        <Dropdown.Group height={100}>
          {selectionList.map((selection) => (
            <Dropdown.Selection
              onClick={() => setValue(selection)}
              isSelected={selection === value}
              key={selection}
            >
              {selection}
            </Dropdown.Selection>
          ))}
        </Dropdown.Group>
      </Dropdown>

      <h1>크기 커스텀</h1>
      <Dropdown width={200} value={value} height={25}>
        <Dropdown.Group height={100}>
          {selectionList.map((selection) => (
            <Dropdown.Selection
              height={20}
              onClick={() => setValue(selection)}
              isSelected={selection === value}
              key={selection}
            >
              {selection}
            </Dropdown.Selection>
          ))}
        </Dropdown.Group>
      </Dropdown>
    </>
  );
};
