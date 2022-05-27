import React, { useState } from 'react';
import {
  withKnobs,
  number,
  boolean,
  text,
  color,
} from '@storybook/addon-knobs';
import Input from './Input';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

export default {
  component: Input,
  title: 'Components/Input',
  decorators: [withKnobs],
} as Meta;

const InputContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    transition: 0.2s ease-in-out;
  }
`;

export function Index() {
  return (
    <>
      <p>포켓서베이에서 사용하는 Input 컴포넌트</p>
      <p>x 버튼이 밀리는 현상은 웹설문에서는 정상적으로 보입니다.</p>
      <InputContainer>
        <p>기본적인 Input</p>
        <p>인풋 메세지</p>
        <Default />
      </InputContainer>
      <InputContainer>
        <p>이메일 Input</p>
        <Email />
      </InputContainer>
      <InputContainer>
        <p>계좌번호 Input</p>
        <Account />
      </InputContainer>
      <InputContainer>
        <p>전화번호 Input</p>
        <Phone />
      </InputContainer>
      <InputContainer>
        <p>숫자 Input</p>
        <Number />
      </InputContainer>
      <InputContainer>
        <p>URL Input</p>
        <URL />
      </InputContainer>
    </>
  );
}

function Default() {
  const [value, setValue] = useState<string>('');

  const placeholder = text('placeholder', '텍스트를 입력해주세요.');
  const errorMessage = text('errorMessage', '에러메시지');
  const useCancelButton = boolean('useCancelButton', false);
  const isError = boolean('isError', false);
  const readOnly = boolean('readOnly', false);
  const tabIndex = number('tabIndex', 10);
  const borderColor = color('borderColor', '#FAC609');
  const textColor = text('textColor', '#000000');
  const buttonAlways = boolean('buttonAlways', true);

  return (
    <div>
      <p>포켓서베이에서 사용하는 기본 인풋 컴포넌트</p>
      <p>라인형 인풋</p>
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
          console.log('onFocus');
        }}
        onClick={() => {
          console.log('onClick');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onClickCancelButton={() => {
          setValue('');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        borderColor={borderColor}
        iconButton={'exit'}
        textColor={textColor}
        buttonAlways={!!value}
      />
      <p>박스형 인풋</p>
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
          console.log('onFocus');
        }}
        onClick={() => {
          console.log('onClick');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onClickCancelButton={() => {
          setValue('');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        borderColor={borderColor}
        iconButton={'exit'}
        textColor={textColor}
        buttonAlways={!!value}
      />
      <p>비활성화된 인풋</p>
      <p>라인형 비활성화 인풋</p>
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
          console.log('onFocus');
        }}
        onClick={() => {
          console.log('onClick');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        borderColor={borderColor}
        textColor={textColor}
      />
      <p>박스형 비활성화 인풋</p>
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
          console.log('onFocus');
        }}
        onClick={() => {
          console.log('onClick');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        borderColor={borderColor}
        textColor={textColor}
      />
      <p>인풋 에러 메시지</p>
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
          console.log('onFocus');
        }}
        onClick={() => {
          console.log('onClick');
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
        onClickCancelButton={() => {
          setValue('');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        borderColor={borderColor}
        iconButton={'exit'}
        textColor={textColor}
        buttonAlways={!!value}
      />
    </div>
  );
}

function Email() {
  const [value, setValue] = useState<string>('');
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
  const [value, setValue] = useState<string>('');
  return (
    <>
      <p>value: {value}</p>
      <Input.Account
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        dropdownSelectCallback={() => {
          console.log('드롭다운 선택 완료');
        }}
        id="desktop-account"
      />
      <h2>mobile</h2>
      <Input.Account
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
        isMobile
        id="mobile-account"
      />
    </>
  );
}

function Phone() {
  const [value, setValue] = useState<string>('');
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
  const [value, setValue] = useState<string>('');
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
  const [value, setValue] = useState<string>('');
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
