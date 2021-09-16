import React, { useState } from "react";
import {
  withKnobs,
  number,
  boolean,
  text,
  color,
} from "@storybook/addon-knobs";
import Font from "../Typography/Font";
import Input from "./Input";
import Font from '../Typography/Font'
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
            (Icon 지원이 되는)
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

  const placeholder = text("placeholder", "텍스트를 입력해주세요.");
  const errorMessage = text("errorMessage", "에러메시지");
  const useCancelButton = boolean("useCancelButton", false);
  const isError = boolean("isError", false);
  const readOnly = boolean("readOnly", false);
  const tabIndex = number("tabIndex", 10);
  const borderColor = color("borderColor", "#FAC609");
  const textColor = text("textColor", "#DFDEDD");
  const buttonAlways = boolean("buttonAlways", true);

  return (
    <div>
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="500"
        fontSize='24px'
        fontColor='black'
      >
        포켓서베이에서 사용하는 기본 인풋 컴포넌트
      </Font>
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='16px'
        fontColor='black'
      >
        라인형 인풋
      </Font> 
      <Input
        mode={'line'}
        placeholder={placeholder}
        value={value}
        onChange={(value: string) => setValue(value)}
        width={500}
        isError={isError}
        errorMessage={errorMessage}
        disabled={false}
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
          setValue('')
        }}
        onKeyDown={() => {
          console.log("onKeyDown");
        }}
        borderColor={borderColor}
        iconButton={"exit"}
        textColor={textColor}
        buttonAlways={!!value}
      />
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='16px'
        fontColor='black'
      >
        박스형 인풋
      </Font> 
      <Input
        mode={'basic'}
        placeholder={placeholder}
        value={value}
        onChange={(value: string) => setValue(value)}
        width={200}
        isError={isError}
        errorMessage={errorMessage}
        disabled={false}
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
          setValue('')
        }}
        onKeyDown={() => {
          console.log("onKeyDown");
        }}
        borderColor={borderColor}
        iconButton={"exit"}
        textColor={textColor}
        buttonAlways={!!value}
      />
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='20px'
        fontColor='black'
      >
        비활성화된 인풋
      </Font> 
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='16px'
        fontColor='black'
      >
        라인형 비활성화 인풋
      </Font> 
      <Input
        mode={'line'}
        placeholder={placeholder}
        value={''}
        onChange={() => {}}
        width={200}
        isError={isError}
        errorMessage={errorMessage}
        disabled={true}
        useCancelButton={false}
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
        onKeyDown={() => {
          console.log("onKeyDown");
        }}
        borderColor={borderColor}
        textColor={textColor}
      />
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='16px'
        fontColor='black'
      >
        박스형 비활성화 인풋
      </Font> 
      <Input
        mode={'basic'}
        placeholder={placeholder}
        value={''}
        onChange={() => {}}
        width={200}
        isError={isError}
        errorMessage={errorMessage}
        disabled={true}
        useCancelButton={false}
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
        onKeyDown={() => {
          console.log("onKeyDown");
        }}
        borderColor={borderColor}
        textColor={textColor}
      />
      <Font
        fontFace='Noto Sans CJK KR'
        fontWeight="400"
        fontSize='20px'
        fontColor='black'
      >
        인풋 에러 메시지
      </Font> 
      <Input
        mode={'basic'}
        placeholder={placeholder}
        value={value}
        onChange={(value: string) => setValue(value)}
        width={200}
        isError={true}
        errorMessage={errorMessage}
        disabled={false}
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
          setValue('')
        }}
        onKeyDown={() => {
          console.log("onKeyDown");
        }}
        borderColor={borderColor}
        iconButton={"exit"}
        textColor={textColor}
        buttonAlways={!!value}
      />
    </div>
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
        dropdownSelectCallback={() => {
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
