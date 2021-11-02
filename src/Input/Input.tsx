import React from 'react';
import Icon from '../Icon/Icon';
import Email from './subtype/email';
import Account from './subtype/account';
import Phone from './subtype/phone';
import Number from './subtype/number';
import URL from './subtype/url';
import { InputType } from './type';
import inputStyles from './style';

function Input({
  mode,
  placeholder,
  value,
  onChange,
  width,
  isError,
  errorMessage,
  disabled = false,
  useCancelButton = false,
  readOnly = false,
  tabIndex,
  onFocus,
  onClick,
  onKeyDown,
  onBlur,
  iconButton,
  onClickCancelButton,
  className,
  borderColor,
  autoFocus = false,
  textColor,
  buttonAlways,
  type,
  pattern,
  fontSize,
  fullWidthMode = false,
  inputMode,
  ignorePlaceholderColor,
  abcReportInput = false,
  correctMessage
}: InputType): JSX.Element {
  const { InputContainer, InputBox, InputElement, SubText,CorrectMessage } = inputStyles;
  const showButton = () => {
    if ((value && useCancelButton) || buttonAlways) {
      return true;
    }
    return false;
  };

  const OnInputClick = (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (!onClick) return 
    if(e){
      onClick(e);
    } else{
      onClick()
    }
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  return (
    <InputContainer data-testid="inputcontainer" className={className}>
      <InputBox
        data-testid="inputbox"
        width={width}
        disabled={disabled}
        mode={mode}
        borderColor={borderColor}
        fullWidthMode={fullWidthMode}
        isError={isError}
        abcReportInput={abcReportInput}
      >
        <InputElement
          mode={mode}
          pattern={pattern || undefined}
          type={type ?? 'text'}
          value={value}
          readOnly={readOnly}
          tabIndex={tabIndex}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onClick={OnInputClick}
          onKeyDown={onInputKeyDown}
          onBlur={onBlur}
          placeholder={placeholder}
          width={width * 0.9}
          disabled={disabled}
          autoFocus={autoFocus}
          textColor={disabled ? '#DFDEDD' : textColor}
          fontSize={fontSize}
          fullWidthMode={fullWidthMode}
          inputMode={inputMode}
          ignorePlaceholderColor={ignorePlaceholderColor}
        />
        {showButton() && (
          <Icon
            icon={iconButton || 'exit'}
            width={20}
            color="#818282"
            onClick={onClickCancelButton}
            useCursor={!disabled}
          />
        )}
      </InputBox>
      {isError && <SubText>{errorMessage}</SubText>}
      {correctMessage && <CorrectMessage>{correctMessage}</CorrectMessage>}
    </InputContainer>
  );
}

Input.Email = Email;
Input.Account = Account;
Input.Phone = Phone;
Input.Number = Number;
Input.Url = URL;

export default Input;
