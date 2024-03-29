/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Icon from '../../Icon/Icon';

type URLPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function URL({ value, onChange, isMobile }: URLPropsType) {

  const [isHover, setIsHover] = useState<boolean>(false);

  const onURLInputChange = (_innerValue: string) => {
    const prevValueLength = value.length;
    const innerValue =
      prevValueLength === 0 ? `http://${_innerValue}` : _innerValue;

    const http = innerValue.split('http://').length - 1;
    const https = innerValue.split('https://').length - 1;

    // 크롬 브라우저에서 주소를 복사 붙여넣기 하면 https://가 포함되어 있어서 삭제해준다.
    if (http >= 2) {
      onChange(innerValue.replace('http://', ''));
    } else if (https >= 2) {
      onChange(innerValue.replace('https://', ''));
    } else if (http === 1 && https === 1) {
      // https가 먼저 있어서 https를 삭제하고 http 유지
      onChange(innerValue.replace('https://', ''));
    } else {
      onChange(innerValue);
    }
  }

  const onResetButtonClick = () => {
    onChange("")
  }
  return (
    <Wrapper>
      <Input
        type="url"
        mode="basic"
        width={isMobile ? 300 : 646}
        isError={false}
        errorMessage=""
        fullWidthMode={!!isMobile}
        borderColor="#FAC609"
        value={value ?? 'http://'}
        placeholder="http://"
        fontSize={14}
        onChange={onURLInputChange}
        ignorePlaceholderColor
      />
      {value.length> 0? (
        <ResetButton
          icon={isHover ? 'titleInputXHover' : 'titleInputX'}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          width={18}
          color="black"
          onClick={onResetButtonClick}
          isMobile={isMobile}
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const ResetButton = styled(Icon)<{ isMobile?: boolean }>`
  position: absolute;
  ${(props) => props.isMobile ? 'top: 12px; right: 10px;':'top: 12px; left: 617px;'} 
`;

export default URL;