import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '..';
import getStyle from '../style/getStyle';

type PresetType =
  | 'primary-main'
  | 'primary-danger'
  | 'secondary-basic-gray'
  | 'secondary-basic-yellow'
  | 'secondary-ghost'
  | 'secondary-subtle'
  | 'tertiary-text'
  | 'link';

type ButtonSizeType = 'large' | 'medium' | 'small' | 'xsmall';

interface IButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'> {
  preset: PresetType;
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: ButtonSizeType;
}

const Button = forwardRef(
  (
    {
      preset,
      size = 'medium',
      children,
      isLoading = false,
      isDisabled = false,
      ...props
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <ButtonWrapper
        {...props}
        ref={ref}
        size={size}
        preset={preset}
        isDisabled={isDisabled}
      >
        <ChildrenWrapper isLoading={isLoading}>{children}</ChildrenWrapper>
        {isLoading && <Loader />}
      </ButtonWrapper>
    );
  },
);

const ChildrenWrapper = styled.div<{ isLoading: boolean }>`
  ${(props) =>
    props.isLoading &&
    css`
      visibility: hidden;
    `}
`;

const Loader = () => (
  <LoaderWrapper>
    <Icon icon="loadingSpinner" width={21} color={'#2B2E33'} />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  position: absolute;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const ButtonWrapper = styled.button<{
  preset: PresetType;
  isDisabled: boolean;
  size: ButtonSizeType;
}>`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  line-height: 100%;
  letter-spacing: -0.5px;
  border-radius: 3px;
  border: none;
  background: transparent;
  font-family: "Spoqa Han Sans Neo Medium";

  ${(props) => getButtonCSS(props.preset, props.isDisabled)}
  ${(props) => getButtonSizeCSS(props.size)}
  ${(props) => getStyle.getCursorCSS(props.isDisabled)} 
`;

export default Button;

const getButtonSizeCSS = (size: ButtonSizeType) => {
  if (size === 'large')
    return css`
      padding: 16px 32px;
      font-size: 16px;
      height: 48px;
    `;

  if (size === 'medium')
    return css`
      padding: 13px 24px;
      font-size: 14px;
      height: 40px;
    `;

  if (size === 'small')
    return css`
      padding: 16px 10px;
      font-size: 12px;
      height: 32px;
    `;

  if (size === 'xsmall')
    return css`
      padding: 8px 7px;
      font-size: 11px;
      height: 25px;
    `;
};

const getButtonCSS = (preset: PresetType, isDisabled: boolean) => {
  if (preset === 'primary-main') {
    if (isDisabled)
      return css`
        color: #2b2e3333;
        background: rgba(250, 198, 45, 0.3);
        border: 1px solid rgba(242, 171, 40, 0.1);
      `;

    return css`
      color: #2b2e33;
      background: #fac62d;
      border: 1px solid #f2ab28;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #f0bd05;
        border: 1px solid #f2ab28;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      }
    `;
  }

  if (preset === 'primary-danger') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: rgba(251, 250, 248, 0.4);
        border: 1px solid rgba(223, 222, 221, 0.3);
      `;

    return css`
      color: #f37165;
      background: #fff1f1;
      border: 1px solid #ffafa8;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #ffdddd;
        border: 1px solid #ffafa8;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      }
    `;
  }

  if (preset === 'secondary-basic-gray') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: rgba(251, 250, 248, 0.4);
        border: 1px solid rgba(223, 222, 221, 0.3);
      `;

    return css`
      color: #2b2e33;
      background: #ffffff;
      border: 1px solid #dfdedd;

      &:hover {
        background: #f0f0f0;
        border: 1px solid #dfdedd;
      }
    `;
  }

  if (preset === 'secondary-basic-yellow') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: rgba(251, 250, 248, 0.4);
      `;

    return css`
      color: #f2ab28;
      background: #fef4ce;

      &:hover {
        background: #f5e6bf;
      }
    `;
  }

  if (preset === 'secondary-ghost') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: #ffffff;
        border: 1px solid #dfdedd;
      `;

    return css`
      color: #f2ab28;
      background: #ffffff;
      border: 1px solid #f2ab28;

      &:hover {
        background: #fef4ce;
        border: 1px solid #f2ab28;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      }
    `;
  }

  if (preset === 'secondary-subtle') {
    if (isDisabled)
      return css`
        color: #dfdedd;
        background: rgba(233, 225, 213, 0.3);
      `;

    return css`
      color: #2b2e33;
      background: #fef4ce;
      &:hover {
        background: #f5e6bf;
      }
    `;
  }

  if (preset === 'tertiary-text') {
    if (isDisabled)
      return css`
        color: #dfdedd;
      `;

    return css`
      color: #2b2e33;
      &:hover {
        background: #fbfaf8;
      }
    `;
  }

  if (preset === 'link') {
  }
};
