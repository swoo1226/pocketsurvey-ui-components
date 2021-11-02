import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Icon from '../../Icon/Icon';

const EMAIL_LIST = [
  '@daum.net',
  '@gmail.com',
  '@hanmail.net',
  '@kakao.com',
  '@nate.com',
  '@naver.com',
];

const MAX_VIEW_LIMIT = 5;

type EmailPropsType = {
  value: string;
  onChange: (value: string) => void;
  width?: number | string;
  isMobile: boolean;
  focusingIndex?: number;
};

function Email({
  value,
  onChange,
  width,
  isMobile,
  focusingIndex,
}: EmailPropsType): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  const [autocomplete, setAutocomplete] = useState<string[]>(EMAIL_LIST);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    setAutocomplete([]);
  }, [focusingIndex]);

  useEffect(() => {
    const atSignIndex = value.lastIndexOf('@');
    if (atSignIndex === -1) {
      setSelected(null);
      setAutocomplete([]);
      return;
    }
    if (atSignIndex) {
      const afterAtSign = value.substring(atSignIndex);
      const autoCompleteEmail = EMAIL_LIST.filter(
        (email) => email.includes(afterAtSign) && email !== afterAtSign,
      );
      setAutocomplete(autoCompleteEmail);
      return;
    }
    setSelected(null);
    setAutocomplete([]);
  }, [value]);

  const upDownAutoComplete = (key: 'ArrowUp' | 'ArrowDown') => {
    if (autocomplete.length === 0) {
      setSelected(null);
      return;
    }
    const lastIndex =
      autocomplete.length - 1 >= MAX_VIEW_LIMIT - 1
        ? MAX_VIEW_LIMIT - 1
        : autocomplete.length - 1;

    if (key === 'ArrowUp') {
      if (selected === null || selected === 0) {
        // 마지막으로 가는 케이스
        setSelected(lastIndex);
      } else {
        // 하나 올라가는 케이스
        setSelected(selected - 1);
      }
    }

    if (key === 'ArrowDown') {
      if (selected === null || lastIndex === selected) {
        // 제일 위로 가는 케이스
        setSelected(0);
      } else {
        // 하나 내려가는 케이스
        setSelected(selected + 1);
      }
    }
  };

  const onResetButtonClick = () => {
    onChange('');
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      upDownAutoComplete(event.key);
    }
    if (event.key === 'Enter' || event.keyCode === 32) {
      if (
        autocomplete.length > 0 &&
        selected !== null &&
        autocomplete.length > selected
      ) {
        const afterAtSign = value.substring(value.lastIndexOf('@'));
        onChange(`${value}${autocomplete[selected].replace(afterAtSign, '')}`);
        setSelected(null);
        setAutocomplete([]);
      }
    }
  };

  if (isMobile) {
    return (
      <Wrapper>
        <Input
          fontSize={14}
          fullWidthMode
          mode="basic"
          width={300}
          isError={false}
          errorMessage=""
          borderColor="#FAC609"
          type="email"
          placeholder="email@pocketsurvey.co.kr"
          value={value}
          onChange={onChange}
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
            isMobile={isMobile}
          />
        ) : null}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Input
        fontSize={14}
        mode="basic"
        width={329}
        isError={false}
        errorMessage=""
        borderColor="#FAC609"
        type="email"
        placeholder="email@pocketsurvey.co.kr"
        value={value}
        onChange={onChange}
        onKeyDown={onInputKeyDown}
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
            isMobile={isMobile}
          />
        ) : null}
      {!isMobile && autocomplete.length > 0 && (
        <AutocompleteWrapper onMouseLeave={() => setSelected(null)}>
          {autocomplete.map((email: string, index: number) => {
            if (index >= MAX_VIEW_LIMIT) return null;
            const afterAtSign = value.substring(value.lastIndexOf('@'));
            return (
              <AutocompleteUl
                selected={selected === index}
                onMouseEnter={() => setSelected(index)}
                key={index}
                onClick={() =>
                  onChange(`${value}${email.replace(afterAtSign, '')}`)
                }
              >
                <b>{value}</b>
                {email.replace(afterAtSign, '')}
              </AutocompleteUl>
            );
          })}
        </AutocompleteWrapper>
      )}
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

const AutocompleteWrapper = styled.div`
  width: 329px;
`;

const AutocompleteUl = styled.ul<{ selected: boolean }>`
  height: 35px;
  padding-left: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 330px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  ${(props) => props.selected && 'background-color: #dfdedd;'}
`;

export default Email;
