import React, { useState, useRef, useEffect } from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Button from './Button';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs], // 애드온 적용
} as Meta;

const BasicButtonContainer = styled.div`
  div {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export function Index(): JSX.Element {
  const disabled = boolean('disabled', false);

  return (
    <>
      <p>포켓서베이에서 사용하는 버튼 컴포넌트</p>
      <p>
        Square , Medium 버튼
        <p>(mode 지원이 되는)</p>
      </p>

      <BasicButtonContainer style={{ display: 'block' }}>
        <Button
          className="margins"
          mode="Yellow"
          shape="square"
          size="medium"
          onClick={() => alert('BasicButton')}
        >
          Yellow
        </Button>
        <Button
          className="margins"
          mode="Beige"
          shape="square"
          size="medium"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
        >
          Beige
        </Button>
        <Button
          shape="square"
          className="margins"
          mode="Gray"
          size="medium"
          disabled={true}
          onClick={() => alert('BasicButton')}
        >
          Gray(Disabled)
        </Button>
        <Button
          className="margins"
          shape="square"
          mode="White"
          size="medium"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
        >
          White
        </Button>
        <Button
          className="margins"
          shape="square"
          mode="White"
          size="medium"
          disabled={disabled}
          isLoading={true}
          onClick={() => alert('BasicButton')}
        >
          White
        </Button>
      </BasicButtonContainer>
      <BasicButtonContainer>
        <p>Small, Round 버튼</p>
        <Button
          shape="round"
          mode="Yellow"
          size="small"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
        >
          Yellow
        </Button>
        <Button
          shape="round"
          mode="Beige"
          size="small"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
        >
          Beige
        </Button>
        <Button
          shape="round"
          mode="Beige"
          size="small"
          disabled={true}
          onClick={() => alert('BasicButton')}
        >
          Gray
        </Button>
      </BasicButtonContainer>
      <p>버튼은 텍스트 길이에 맞게 크기가 달라집니다</p>
      <Button
        mode="Yellow"
        size="small"
        shape="round"
        disabled={disabled}
        onClick={() => alert('BasicButton')}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Button>
      <p>로딩 버튼</p>
      <div style={{ display: 'block' }}>
        <Button
          mode="Yellow"
          size="small"
          shape="round"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
          isLoading={true}
        >
          버튼
        </Button>
        <p>비활성화된 버튼</p>
        <Button
          mode="Yellow"
          size="small"
          shape="round"
          disabled={true}
          onClick={() => alert('BasicButton')}
          isLoading={true}
        >
          버튼
        </Button>
      </div>
      <p>
        버튼의 배경 색을 직접 지정할 수도 있습니다. 하지만 hover시 배경색이
        동일하게 적용됩니다
      </p>
      <BasicButtonContainer style={{ display: 'flex' }}>
        <Button
          className="margins"
          mode="Yellow"
          size="small"
          shape="round"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
          backgroundColor="#59C4DB"
        >
          버튼
        </Button>
        <Button
          className="margins"
          mode="Yellow"
          size="small"
          shape="round"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
          backgroundColor="#F37165"
        >
          버튼
        </Button>
        <Button
          className="margins"
          mode="Yellow"
          size="small"
          shape="round"
          disabled={disabled}
          onClick={() => alert('BasicButton')}
          backgroundColor="#59BF51"
        >
          버튼
        </Button>
      </BasicButtonContainer>
      <br />
    </>
  );
}
