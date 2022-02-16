import React, { useState } from 'react';
import Dropdown, { ImperativeType } from './Dropdown2';

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
  const selectionList = ['안녕하세요', '가', '나', '다', '라', '마', '바'];
  const [value, setValue] = useState<string>('안녕하세요');
  const dropdownRef = React.useRef<ImperativeType>();

  return (
    <>
      <Dropdown value={value}>
        <Dropdown.Group>
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
    </>
  );
};
