import React, { useState, useRef, useEffect } from "react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

import Button from "./Button";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Button,
  title: "Components/Button",
  decorators: [withKnobs], // 애드온 적용
} as Meta;

export function Index(): JSX.Element {
  const disabled = boolean("disabled", false);

  return (
    <>
      <h3>포켓서베이에서 사용하는 버튼 컴포넌트</h3>
      <p>기본적인 버튼</p>
      <div style={{ display: 'flex' }} >
        <Button
          theme={'primary'}
          disabled={disabled}
          onClick={() => alert("BasicButton")}
        >
          버튼
        </Button>
        <Button
          theme={'secondary'}
          disabled={disabled}
          onClick={() => alert("BasicButton")}
        >
          버튼
        </Button>
        <Button
          theme={'tertiary'}
          disabled={disabled}
          onClick={() => alert("BasicButton")}
        >
          버튼
        </Button>
      </div>
      <p>비활성화 버튼</p>
      <Button
        theme={'primary'}
        disabled={true}
        onClick={() => alert("BasicButton")}
      >
        버튼
      </Button>
      <p>버튼은 텍스트 길이에 맞게 크기가 달라집니다</p>
      <Button
        theme={'primary'}
        disabled={disabled}
        onClick={() => alert("BasicButton")}
      >
        로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨로렘입숨
      </Button>
      <p>로딩 버튼</p>
      <div style={{ display: 'flex' }} >
        <Button
          theme={'primary'}
          disabled={disabled}
          onClick={() => alert("BasicButton")}
          isLoading={true}
        >
          버튼
        </Button>
      </div>
      <br />
    </>
  );
}
