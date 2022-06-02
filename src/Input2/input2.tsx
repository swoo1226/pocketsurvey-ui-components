import React, { forwardRef, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { Combine3 } from '../@types/utils';
import getStyle from '../style/getStyle';
import IconFlex from './iconFlex';
import InputClear from './reset';
import InputSearch from './search';

export type InputSizeType = 'medium' | 'small';
type InputType = React.ForwardRefExoticComponent<
  IInputProps & React.RefAttributes<HTMLInputElement>
> &
  ISubComponent;
interface IInputProps
  extends Combine3<
    IContextProps,
    IOverrideStyle,
    React.ComponentPropsWithoutRef<'input'>
  > {
  children?: React.ReactNode;
  wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
  height?: number | string;
}

interface IOverrideStyle {
  fontSize?: React.CSSProperties['fontSize'];
  color?: React.CSSProperties['color'];
  placeholderColor?: React.CSSProperties['color'];
  isDisabled?: boolean;
  isError?: boolean;
  size?: InputSizeType;
}

export interface ChangeInputEventLike {
  target: {
    value: string;
  };
}

interface IContextProps {
  width?: number | string;
  borderColor?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | ChangeInputEventLike,
  ) => any;
  isDisabled?: boolean;
  size?: InputSizeType;
}

export const InputContext = React.createContext<Required<IContextProps> | null>(
  null,
);

const isChildrenClearButton = (children?: React.ReactNode) => {
  if (!children) return false;
  return ((children as unknown) as any)?.type?.displayName === 'InputClear';
};

const Input = forwardRef(
  (
    {
      children,
      value,
      width = 'auto',
      height,
      borderColor = '#FAC609',
      onChange,
      wrapperProps,
      fontSize = 12,
      isDisabled = false,
      isError = false,
      size = 'medium',
      ...props
    }: IInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const widthValue = getStyle.getSize(width);
    const showChildren = useMemo(() => {
      const isClearButton = isChildrenClearButton(children);
      if (isClearButton) return !!value && value.length > 0; // 인풋 초기화 버튼은 입력값이 있을 때만 보여진다.
      return true; // 아닌경우 그냥 보여준다.
    }, [value, children]);

    return (
      <InputContext.Provider
        value={{
          value,
          width: widthValue,
          borderColor,
          onChange,
          isDisabled,
          size,
        }}
      >
        <InputWrapper
          width={widthValue}
          height={height}
          isDisabled={isDisabled}
          isError={isError}
          size={size}
          {...wrapperProps}
        >
          <InputCore
            isDisabled={isDisabled}
            value={value}
            onChange={!isDisabled ? onChange : () => {}}
            readOnly={isDisabled}
            fontSize={fontSize}
            {...props}
            ref={ref}
          />
          {showChildren && children}
        </InputWrapper>
      </InputContext.Provider>
    );
  },
) as InputType;

const HStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p<{ mode: 'correct' | 'error' }>`
  color: ${(props) => (props.mode === 'correct' ? '#70d473' : '#F37165')};
  font-size: 11px;
  margin: 4px 0 0 0;
`;

interface ISubComponent {
  Clear: typeof InputClear;
  Container: typeof HStack;
  Message: typeof Message;
  Search: typeof InputSearch;
  Flex: typeof IconFlex;
}

Input.Clear = InputClear;
Input.Container = HStack;
Input.Message = Message;
Input.Search = InputSearch;
Input.Flex = IconFlex;
export default Input;

const InputWrapper = styled.div<{
  width: string;
  height?: number | string;
  isDisabled?: boolean;
  isError?: boolean;
  size?: InputSizeType;
}>`
  background-color: #ffffff;
  border: 1px solid #dfdedd;
  padding: 13px;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  border-radius: 3px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  height: 40px;

  background-color: ${(props) => (props.isDisabled ? '#f0f0f0' : 'ffffff')};
  &:hover,
  &:focus-within {
    border-color: ${(props) => (props.isDisabled ? '#dfdedd' : '#fac609')};
  }

  ${(props) =>
    props.height &&
    css`
      height: ${getStyle.getSize(props.height)};
    `}
  
  ${(props) =>
    props.isError &&
    css`
      border-color: #f37165;
      &:hover,
      &:focus-within {
        border-color: #f37165;
      }
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 32px;
      padding: 9.5px 13px;
    `}
`;

const InputCore = styled.input<IOverrideStyle>`
  width: 100%;
  outline: none;
  border: none;
  background-color: 'fffff';
  font-family: 'Spoqa Han Sans Neo Regular';
  &:focus {
    outline: none;
    border: none;
  }

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${getStyle.getSize(props.fontSize)};
    `}


  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.placeholderColor &&
    css`
      &::placeholder {
        color: ${props.placeholderColor};
      }
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      color: #c9c8c7;
      background-color: #f0f0f0;
      border-color: #dfdedd;
    `}
    
  &::placeholder {
    color: #c9c8c7;
  }

`;
