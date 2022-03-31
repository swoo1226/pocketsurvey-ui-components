import React, { useState } from 'react';
import styled from 'styled-components';
import SelectButton from './SelectButton';

export default {
  title: 'Components/SelectedButton',
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

export const SelectButtonPreview = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [isSelectWithIcon, setIsSelectWithIcon] = useState(false);
  return (
    <PreviewWrapper>
      <SelectButton isSelected withIcon>
        아이콘
      </SelectButton>
      <SelectButton isSelected={false} withIcon>
        아이콘
      </SelectButton>
      <SelectButton isSelected withIcon={false}>
        선택
      </SelectButton>
      <SelectButton isSelected={false} withIcon={false}>
        선택
      </SelectButton>
      <SelectButton
        isSelected={isSelect}
        withIcon={false}
        onClick={(e) => {
          setIsSelect(!isSelect);
        }}
      >
        클릭
      </SelectButton>
      <SelectButton
        isSelected={isSelectWithIcon}
        withIcon
        onClick={(e) => {
          setIsSelectWithIcon(!isSelectWithIcon);
        }}
      >
        클릭
      </SelectButton>
    </PreviewWrapper>
  );
};

const PreviewWrapper = styled.div`
  button {
    margin-bottom: 10px;
  }
`;
