import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import Icon from '../../Icon/Icon';
import Input from '../Input';
import hypenAutoComplete from './util/hypenAutoComplete';
import removeHypen from './util/removeHypen';

type PhonePropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function Phone({ value, onChange, isMobile }: PhonePropsType) {
  const MAX_LENGTH = 13;
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [correctMessage, setCorrectMessage] = useState<string>('');
  const [firstTyping, setFirstTyping] = useState<boolean>(false);
  const [innerValue, setInnerValue] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);

  const validationRegex = {
    exceptPhoneNumber: /^([0-9]|-)+$/g,
    isPhoneNum: /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/,
    isGeneralNum: /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))-(\d{3,4})-(\d{4})$/,
  };

  const { exceptPhoneNumber, isPhoneNum, isGeneralNum } = validationRegex;

  useEffect(() => {
    // 컴포넌트 외부에서 value 값을 읽을 때는 -을 제외한 숫자만 있어야함
    if (firstTyping) onChange(removeHypen(innerValue));

    const numberCheck =
      isPhoneNum.test(innerValue) || isGeneralNum.test(innerValue);
    const message = numberCheck ? '유효한 번호예요.' : '';
    setCorrectMessage(message);
  }, [innerValue, isGeneralNum, onChange, isPhoneNum, firstTyping]);

  const onPhoneChange = useCallback(
    (inputInnerValue: string) => {
      if (!firstTyping) setFirstTyping(true);
      if (inputInnerValue.length > MAX_LENGTH) return;
      if (exceptPhoneNumber.test(inputInnerValue) === false) {
        if (inputInnerValue.length === 0) setInnerValue('');
        else setErrorMessage('숫자만 입력 가능합니다.');
        return;
      }

      setInnerValue(hypenAutoComplete(removeHypen(inputInnerValue)));
      setErrorMessage('');
    },
    [exceptPhoneNumber, firstTyping],
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
