import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import Icon from '../../Icon/Icon';
import Input from '../Input';

type PhonePropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function Phone({ value, onChange, isMobile }: PhonePropsType) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [correctMessage, setCorrectMessage] = useState<string>('');
  const [firstTyping, setFirstTyping] = useState<boolean>(false);
  const [innerValue, setInnerValue] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);

  const validation = {
    exceptPhoneNumber: /^([0-9]|-)+$/g,
    exceptNumber: /[^0-9]/g,
    isPhoneNum: /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/,
    isGeneralNum: /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))-(\d{3,4})-(\d{4})$/,
    isStartNumPhone: /(01)/
  };

  const {
    exceptPhoneNumber,
    exceptNumber,
    isPhoneNum,
    isGeneralNum,
    isStartNumPhone
  } = validation;

  useEffect(() => {
    // 컴포넌트 외부에서 value 값을 읽을 때는 -을 제외한 숫자만 있어야함
    const numberCheck =
      isPhoneNum.test(innerValue) || isGeneralNum.test(innerValue);
    if (firstTyping) onChange(innerValue.replace(/[^0-9]/g, ''));
    if (numberCheck) setCorrectMessage('유효한 번호예요!');
    if (!numberCheck) setCorrectMessage('');
  }, [innerValue, firstTyping, isGeneralNum, onChange, isPhoneNum]);

  const hypenAutoComplete = useCallback((phoneNum: string) => {
    if (phoneNum.length <= 3) return phoneNum;
    const startIndex = phoneNum.substr(0, 2) === '02' ? 2 : 3;
    // 02 (서울)만 2자리고 나머지 010, 070, 다른 지역번호는 3자리
    const length = phoneNum.length - startIndex;

    if (length <= 4) {
      return `${phoneNum.substr(0, startIndex)}-${phoneNum.substr(startIndex)}`;
    }
    if (length === 7) {
      return `${phoneNum.substr(0, startIndex)}-${phoneNum.substr(
        startIndex,
        3,
      )}-${phoneNum.substr(startIndex + 3)}`;
    }
    if (length <= 8) {
      return `${phoneNum.substr(0, startIndex)}-${phoneNum.substr(
        startIndex,
        4,
      )}-${phoneNum.substr(startIndex + 4)}`;
    }
    return phoneNum;
  }, []);

  const onPhoneChange = useCallback(
    (inputInnerValue: string) => {
      const phoneOrGenealNum = isStartNumPhone.test(innerValue)
        ? inputInnerValue.length <= 13
        : inputInnerValue.length <= 12;
      if (phoneOrGenealNum) {
        if (!firstTyping) setFirstTyping(true);
        if (exceptPhoneNumber.test(inputInnerValue)) {
          const phoneNumberOnly = inputInnerValue.replace(exceptNumber, '');
          if (phoneNumberOnly.length <= 3) {
            setInnerValue(phoneNumberOnly);
          } else {
            setInnerValue(hypenAutoComplete(phoneNumberOnly));
          }
          setErrorMessage('');
        } else if (inputInnerValue.length === 0) {
          setInnerValue('');
        } else {
          setErrorMessage('숫자만 입력 가능합니다.');
        }
      }
    },
    [
      exceptNumber,
      exceptPhoneNumber,
      firstTyping,
      hypenAutoComplete,
      innerValue,
      isStartNumPhone
    ],
  );

  const onResetButtonClick = () => {
    setInnerValue('');
    setErrorMessage('');
    setCorrectMessage('');
  };

  return (
    <Wrapper>
      <Input
        mode="basic"
        width={329}
        isError={!!errorMessage}
        errorMessage={errorMessage}
        borderColor="#FAC609"
        type="tel"
        fontSize={14}
        fullWidthMode={!!isMobile}
        value={innerValue}
        placeholder="숫자만 입력해주세요."
        onChange={onPhoneChange}
        ignorePlaceholderColor
        correctMessage={correctMessage}
      />

      {innerValue.length > 0 ? (
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
  ${(props) =>
    props.isMobile ? 'top: 12px; right: -20px;' : 'top: 12px; left: 330px'}
`;

export default Phone;
