import React, { useState } from "react";
import {
  withKnobs,
  number,
  boolean,
  text,
  select,
  color,
} from "@storybook/addon-knobs";
import Font from "../Typography/Font";
import Input from "./Input";
import { Meta } from "@storybook/react/types-6-0";
import styled from 'styled-components'

export default {
  component: Input,
  title: "Components/Input",
  decorators: [withKnobs],
} as Meta;

const InputContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    transition: 0.2s ease-in-out;
  }
`

export function Index() {
  return (
    <>
      <Font
        fontFace="Noto Sans CJK KR"
        fontWeight="500"
        fontSize="24px"
        fontColor="black"
      >
        포켓서베이에서 사용하는 Input 컴포넌트
      </Font>
      <InputContainer>
        <Font
          fontFace="Noto Sans CJK KR"
          fontWeight="400"
          fontSize="16px"
          fontColor="black"
        >
          기본적인 Input
          <Font
            fontFace="Noto Sans CJK KR"
            fontWeight="300"
            fontSize="16px"
            fontColor="#818282"
            isInline={true}
          >
            (Knob 조작을 할 수 있습니다.)
          </Font>
        </Font>
        <Default />
      </InputContainer>
      <InputContainer>
        <Font
          fontFace="Noto Sans CJK KR"
          fontWeight="400"
          fontSize="16px"
          fontColor="black"
        >
          이메일 Input
        </Font>
        <Email />
      </InputContainer>
      <InputContainer>
        <Font
          fontFace="Noto Sans CJK KR"
          fontWeight="400"
          fontSize="16px"
          fontColor="black"
        >
          계좌번호 Input
        </Font>
        <Account />
      </InputContainer>
      <InputContainer>
        <Font
          fontFace="Noto Sans CJK KR"
          fontWeight="400"
          fontSize="16px"
          fontColor="black"
        >
          전화번호 Input
        </Font>
        <Phone />
      </InputContainer>
      <InputContainer>
        <Font
          fontFace="Noto Sans CJK KR"
          fontWeight="400"
          fontSize="16px"
          fontColor="black"
        >
          숫자 Input
        </Font>
        <Number />
      </InputContainer>
      <InputContainer>
      <Font
        fontFace="Noto Sans CJK KR"
        fontWeight="400"
        fontSize="16px"
        fontColor="black"
      >
        URL Input
      </Font>
      <URL />
      </InputContainer>
    </>
  );
}

function Default () {
  const [value, setValue] = useState<string>("");

  const width = number("width", 300);
  const placeholder = text("placeholder", "텍스트를 입력해주세요.");
  const errorMessage = text("errorMessage", "에러메시지");
  const disabled = boolean("disabled", false);
  const useCancelButton = boolean("useCancelButton", false);
  const isError = boolean("isError", false);
  const mode = select("mode", ["line", "basic"], "line");
  const readOnly = boolean("readOnly", false);
  const tabIndex = number("tabIndex", 10);
  const borderColor = color("borderColor", "#FAC609");
  const iconButton = text("link", "singleChoice");
  const textColor = text("textColor", "#DFDEDD");
  const buttonAlways = boolean("buttonAlways", true);

  return (
    <Input
      mode={mode}
      placeholder={placeholder}
      value={value}
      onChange={(value: string) => setValue(value)}
      width={width}
      isError={isError}
      errorMessage={errorMessage}
      disabled={disabled}
      useCancelButton={useCancelButton}
      readOnly={readOnly}
      tabIndex={tabIndex}
      onFocus={() => {
        console.log("onFocus");
      }}
      onClick={() => {
        console.log("onClick");
      }}
      onBlur={() => {
        console.log("onBlur");
      }}
      onClickCancelButton={() => {
        console.log("onClickCancelButton");
      }}
      onKeyDown={() => {
        console.log("onKeyDown");
      }}
      borderColor={borderColor}
      iconButton={"link"}
      textColor={textColor}
      buttonAlways={buttonAlways}
    />
  );
}


function Email() {
  const [value, setValue] = useState<string>("");
  const [focusIndex, setFocusIndex] = useState<number>(0);
  return (
    <>
      <Input.Email
        value={value}
        onChange={(value: string) => setValue(value)}
        isMobile={false}
        focusingIndex={focusIndex}
      />
      <p>focusIndex: {focusIndex}</p>
      <button onClick={() => setFocusIndex(focusIndex + 1)}>+1</button>
      <h2>mobile</h2>
      <Input.Email
        value={value}
        onChange={(value: string) => setValue(value)}
        isMobile={true}
        focusingIndex={focusIndex}
      />
    </>
  );
}

function Account() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <p>value: {value}</p>
      <Input.Account
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        dropdownSelectCallback={()=> {
          console.log("드롭다운 선택 완료")
        }}
      />
      <h2>mobile</h2>
      <Input.Account
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        isMobile
      />
    </>
  );
}

function Phone() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <p>value: {value}</p>
      <Input.Phone
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
      />
      <h2>mobile</h2>
      <Input.Phone
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        isMobile={true}
      />
    </>
  );
}

function Number() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <p>value: {value}</p>
      <Input.Number
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
      />

      <h2>mobile</h2>
      <Input.Number
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        isMobile
      />
    </>
  );
}

function URL() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <p>value: {value}</p>
      <Input.Url
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
      />
      <h2>mobile</h2>
      <Input.Url
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        isMobile={true}
      />
    </>
  );
}
