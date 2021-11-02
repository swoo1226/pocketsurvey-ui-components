import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Icon from '../../Icon/Icon';

type NumberPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function Number({ value, onChange, isMobile }: NumberPropsType): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMobileInputChange = (innerValue: string) => {
    if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
      onChange(innerValue);
      setErrorMessage('');
    } else {
      setErrorMessage('숫자만 입력 가능합니다.');
    }
  };

  const onInputChange = (innerValue: string) => {
    if (/^[+-]?\d*(\.?\d*)$/.test(innerValue)) {
      onChange(innerValue);
      setErrorMessage('');
    } else {
      setErrorMessage('숫자만 입력 가능합니다.');
    }
  };

  const onResetButtonClick = () => {
    onChange('');
  };

  if (isMobile) {
    return (
      <Wrapper>
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
          onChange={onMobileInputChange}
          ignorePlaceholderColor
        />
        {value.length > 0 ? (
          <ResetButton
            icon={isHover ? 'titleInputXHover' : 'titleInputX'}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            width={18}
            color="black"
            onClick={onResetButtonClick}
            isMobile
          />
        ) : null}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Input
        mode="basic"
        width={329}
        isError={!!errorMessage}
        errorMessage={errorMessage}
        borderColor="#FAC609"
        placeholder="숫자를 입력해주세요"
        value={value}
        fontSize={14}
        onChange={onInputChange}
        ignorePlaceholderColor
      />
      {value.length > 0 ? (
        <ResetButton
          icon={isHover ? 'titleInputXHover' : 'titleInputX'}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          width={18}
          color="black"
          onClick={onResetButtonClick}
          isMobile={false}
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const ResetButton = styled(Icon)<{
  isMobile: boolean;
}>`
  position: absolute;
  top: 12px;
  ${(props) => (props.isMobile ? 'right: 10px;' : 'left: 300px;')}
`;

export default Number;
