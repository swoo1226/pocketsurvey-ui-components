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
  const selectionList = ['가', '나', '다', '라', '마', '바'];
  const [value, setValue] = useState<string>('가');
  const dropdownRef = React.useRef<ImperativeType>();

  return (
    <>
      <h1>Group 없이 HTML요소 직접 렌더링</h1>
      <Dropdown width={100} value={value} ref={dropdownRef}>
        <div
          onClick={() => {
            console.log('1');
            dropdownRef.current.setRawShowList(false);
          }}
        >
          1 요소
        </div>
        <div
          onClick={() => {
            console.log('2');
            dropdownRef.current.setRawShowList(false);
          }}
        >
          2
        </div>
      </Dropdown>

      <Dropdown width={100} value={value}>
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
