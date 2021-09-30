import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';

type NumberPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function Number({ value, onChange, isMobile }: NumberPropsType) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (isMobile) {
    return (
      <Input
        inputMode="decimal"
        type="text"
        mode="basic"
        width={300}
        fullWidthMode
        fontSize={14}
        isError={!!errorMessage}
        errorMessage={errorMessage}
        borderColor="#FAC609"
        placeholder="숫자를 입력해주세요"
        pattern="[0-9]*"
        value={value}
        onChange={(innerValue: string) => {
          if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
            onChange(innerValue);
            setErrorMessage('');
          } else {
            setErrorMessage('숫자만 입력 가능합니다.');
          }
        }}
        ignorePlaceholderColor
      />
    );
  }

  return (
    <Input
      mode="basic"
      width={329}
      isError={!!errorMessage}
      errorMessage={errorMessage}
      borderColor="#FAC609"
      placeholder="숫자를 입력해주세요"
      value={value}
      fontSize={14}
      onChange={(innerValue: string) => {
        if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
          onChange(innerValue);
          setErrorMessage('');
        } else {
          setErrorMessage('숫자만 입력 가능합니다.');
        }
      }}
      ignorePlaceholderColor
    />
  );
}

export default Number;
