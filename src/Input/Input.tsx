import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon/Icon'

const InputContainer = styled.div``
const InputBox = styled.div<{
  width: number
  disabled: boolean
  mode: 'line' | 'basic'
  borderColor: string
}>`
  padding: 6px ${props => props.width * 0.04}px;
  ${props =>
    `${
      props.mode == 'line'
        ? `
                border-bottom: 1px solid #dfdedd;
            `
        : `
                border: 1px solid #dfdedd; 
            `
    }`}
  &:hover {
    ${props =>
      !props.disabled
        ? props.mode == 'line'
          ? `border-bottom: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
          : `border: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
        : ''}
  }
  &:focus-within {
    ${props =>
      !props.disabled
        ? props.mode == 'line'
          ? `border-bottom: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
          : `border: 1px solid ${
              props.disabled ? '#dfdedd' : props.borderColor
            }`
        : ''}
  }
  display: flex;
  align-items: center;
  width: ${props => props.width}px;
  border-radius: ${props => (props.mode == 'line' ? '0px' : '3px')};
  justify-content: space-between;
  ${props =>
    `${
      props.mode == 'line'
        ? props.disabled && 'border-bottom: 1px dashed #dfdedd;'
        : props.disabled && 'background-color: #F0F0F0;'
    }`}
`
const InputElement = styled.input<{ width: number }>`
  all: unset;
  width: ${props => props.width}px;
  &::placeholder {
    color: #dfdedd;
  }
`
const SubText = styled.p`
  margin-top: 4px;
  color: #ff5724;
  font-size: 11px;
`

export type InputType = {
  mode: 'line' | 'basic'
  placeholder: string
  value: string
  onChange: (value: string) => void
  width: number
  isError: boolean
  errorMessage: string
  disabled?: boolean
  useCancelButton?: boolean
  tabIndex?: number
  readOnly?: boolean
  onFocus?: () => void
  onClick?: (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onClickCancelButton?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  className?: string
  borderColor: string
}

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
  onClickCancelButton,
  className,
  borderColor,
}: InputType): JSX.Element {
  return (
    <InputContainer data-testid="inputcontainer" className={className}>
      <InputBox
        data-testid="inputbox"
        width={width}
        disabled={disabled}
        mode={mode}
        borderColor={borderColor}
      >
        <InputElement
          type="text"
          value={value}
          readOnly={readOnly}
          tabIndex={tabIndex}
          onChange={e => onChange(e.target.value)}
          onFocus={onFocus}
          onClick={e => (onClick && e ? onClick(e) : undefined)}
          onKeyDown={e => {
            onKeyDown ? onKeyDown(e) : undefined
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          width={width * 0.9}
          disabled={disabled}
        />
        {value && useCancelButton && (
          <Icon
            icon="exit"
            width={20}
            color="#DFDEDD"
            onClick={onClickCancelButton}
          />
        )}
      </InputBox>
      {isError && <SubText>{errorMessage}</SubText>}
    </InputContainer>
  )
}

export default Input
