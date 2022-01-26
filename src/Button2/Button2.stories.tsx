import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button2 from './Button2';

export default {
  title: 'Components/Button2',
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

const PreviewWrapper = styled.div`
  button {
    margin-bottom: 10px;
  }
`;

export const ButtonPreview = () => {
  return (
    <PreviewWrapper>
      <h1>primary-main</h1>
      <Button2 preset="primary-main" isLoading>
        엄청 긴 텍스트입니다.
      </Button2>
      <Button2 preset="primary-main" onClick={() => alert('clicked')}>
        엄청 긴 텍스트입니다.
      </Button2>
      <Button2 preset="primary-main" isDisabled={true}>
        엄청 긴 텍스트입니다.
      </Button2>

      <h1>primary-danger</h1>
      <Button2 preset="primary-danger">텍스트</Button2>
      <Button2 preset="primary-danger" isDisabled={true}>
        텍스트
      </Button2>

      <h1>secondary-basic-gray</h1>
      <Button2 preset="secondary-basic-gray">텍스트</Button2>
      <Button2 preset="secondary-basic-gray" isDisabled={true}>
        텍스트
      </Button2>

      <h1>secondary-basic-yellow</h1>
      <Button2 preset="secondary-basic-yellow">텍스트</Button2>
      <Button2 preset="secondary-basic-yellow" isDisabled={true}>
        텍스트
      </Button2>

      <h1>secondary-ghost</h1>
      <Button2 preset="secondary-ghost">텍스트</Button2>
      <Button2 preset="secondary-ghost" isDisabled={true}>
        텍스트
      </Button2>

      <h1>secondary-subtle</h1>
      <Button2 preset="secondary-subtle">텍스트</Button2>
      <Button2 preset="secondary-subtle" isDisabled={true}>
        텍스트
      </Button2>

      <h1>tertiary-text</h1>
      <Button2 preset="tertiary-text">텍스트</Button2>
      <Button2 preset="tertiary-text" isDisabled={true}>
        텍스트
      </Button2>

      <h1>link (개발 중...)</h1>
      <Button2 preset="link">텍스트</Button2>
      <Button2 preset="link" isDisabled={true}>
        텍스트
      </Button2>
    </PreviewWrapper>
  );
};
