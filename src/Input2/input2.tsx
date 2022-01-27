import React, { forwardRef, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { Combine3 } from '../@types/utils';
import getStyle from '../style/getStyle';
import InputClear from './reset';

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
      fontSize,
      isDisabled = false,
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
        value={{ value, width: widthValue, borderColor, onChange, isDisabled }}
      >
        <InputWrapper
          width={widthValue}
          height={height}
          isDisabled={isDisabled}
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
  color: ${(props) => (props.mode === 'correct' ? '#70d473' : '#ff5724')};
  font-size: 11px;
  margin: 8px 0 0 0;
`;

interface ISubComponent {
  Clear: typeof InputClear;
  Container: typeof HStack;
  Message: typeof Message;
}

Input.Clear = InputClear;
Input.Container = HStack;
Input.Message = Message;
export default Input;

const InputWrapper = styled.div<{
  width: string;
  height?: number | string;
  isDisabled?: boolean;
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
`;

const InputCore = styled.input<IOverrideStyle>`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${(props) => (props.isDisabled ? '#f0f0f0' : 'fffff')};
  &:focus {
    outline: none;
    border: none;
  }

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
`;
