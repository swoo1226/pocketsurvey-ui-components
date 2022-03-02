import React, { useState } from 'react';
import Dropdown from './Dropdown2';
import styled, { css } from 'styled-components';
import Group from './components/group';
import Selection from './components/selection';

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

  // 예전 방식
  const CustomDropdown = styled(Dropdown)`
    width: 300px;
    background-color: yellow;
  `;

  // 새로운 방식
  const customCSS = css`
    width: 300px;
    background-color: yellow;
  `;

  return (
    <Dropdown value={value} extraCSS={customCSS}>
      <Group>
        {selectionList.map((selection) => (
          <Selection key={selection} onClick={() => setValue(selection)}>
            {selection}
          </Selection>
        ))}
      </Group>
    </Dropdown>
  );

  return (
    <div
      style={{
        padding: 200,
      }}
    >
      <Dropdown value={value} position="up" placeholder="">
        <Group>
          {selectionList.map((selection) => (
            <Selection key={selection} onClick={() => setValue(selection)}>
              {selection}
            </Selection>
          ))}
        </Group>
      </Dropdown>
    </div>
  );
};
