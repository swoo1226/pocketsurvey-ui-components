import React from 'react';
import styled, { css } from 'styled-components';
import loadingSpinner from '../Icon/svg/loadingSpinner.svg';
import theme from '../globalStyle';

const isIE = /* @cc_on!@ */ false || !!document.documentMode;

type SizeType = 'medium' | 'small';
type ShapeType = 'square' | 'round';
export type ModeType = 'Yellow' | 'Beige' | 'White' | 'Gray' | 'isLoading';

const getTextColor = (color: ModeType) => {
  switch (color) {
    case 'Yellow' || 'Beige':
      return '#2B2E33';
    case 'White':
      return '#818282';
    case 'Gray':
      return '#818282';
    case 'isLoading':
      return '#FAC62D';
    default:
      return '#2B2E33';
  }
};

const fitContent = isIE
  ? css`
      display: table;
    `
  : css`
      width: fit-content;
    `;

const ButtonContainer = styled.div<{
  mode: ModeType;
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabled: boolean;
  isLoading?: boolean;
  shape: ShapeType;
  size: SizeType;
}>`
  ${fitContent}
  padding: ${(props) =>
    props.size === 'medium' ? '14px 28px 14px 28px' : '7px 14px 7px 14px'};
  background-color: ${(props) =>
    props.disabled
      ? theme.colors.Gray02
      : props.isLoading
      ? '#FEF4CE'
      : props.backgroundColor};
  color: ${(props) => getTextColor(props.mode)};
  border-radius: ${(props) => (props.shape === 'square' ? '3px' : '20px')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? '#DFDEDD'
        : props.isLoading
        ? '#FEF4CE'
        : props.hoverBackgroundColor};
  }
  .loadingSpinner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
      width: calc(1.7 * 14px);
      height: calc(1.2 * 14px);
      -webkit-animation: spin 1s linear infinite;
      -moz-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
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
  }
`;

export type ButtonType = {
  children: React.ReactNode;
  onClick: () => void;
  mode: ModeType;
  size: SizeType;
  shape: ShapeType;
  disabled?: boolean;
  className?: string;
  backgroundColor?: string;
  isLoading?: boolean;
  buttonRef?:
    | React.RefObject<HTMLDivElement>
    | React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

export function getBackgroundColor(mode: string) {
  switch (mode) {
    case 'Yellow':
      return {
        innerBackgroundColor: theme.colors.Yellow,
        innerHoverBackgroundColor: '#F0BD05',
      };
    case 'Beige':
      return {
        innerBackgroundColor: theme.colors.Beige,
        innerHoverBackgroundColor: '#E3D9CA',
      };
    case 'White':
      return {
        innerBackgroundColor: theme.colors.White,
        innerHoverBackgroundColor: '#EBEBEB',
      };
    case 'Gray':
      return {
        innerBackgroundColor: theme.colors.Gray02,
        innerHoverBackgroundColor: theme.colors.Gray02,
      };
    case 'isLoading':
      return {
        innerBackgroundColor: theme.colors.LightYellow,
        innerHoverBackgroundColor: theme.colors.LightYellow,
      };
    default:
      return {
        innerBackgroundColor: theme.colors.Yellow,
        innerHoverBackgroundColor: theme.colors.Yellow,
      };
  }
}

function Button({
  children,
  onClick,
  mode,
  shape,
  size,
  disabled,
  className,
  backgroundColor,
  isLoading,
  buttonRef,
}: ButtonType): JSX.Element {
  function switchMode(): {
    innerBackgroundColor: string;
    innerHoverBackgroundColor: string;
  } {
    if (backgroundColor) {
      return {
        innerBackgroundColor: backgroundColor,
        innerHoverBackgroundColor: backgroundColor,
      };
    }
    return getBackgroundColor(mode);
  }

  const { innerBackgroundColor, innerHoverBackgroundColor } = switchMode();

  return (
    <ButtonContainer
      mode={mode}
      shape={shape}
      size={size}
      onClick={disabled ? undefined : onClick}
      backgroundColor={innerBackgroundColor}
      hoverBackgroundColor={innerHoverBackgroundColor}
      disabled={disabled || false}
      className={className}
      isLoading={isLoading}
      ref={buttonRef}
    >
      {!disabled && isLoading ? (
        <div className="loadingSpinner">
          <img alt="loading" src={loadingSpinner} />
        </div>
      ) : (
        children
      )}
    </ButtonContainer>
  );
}

export default Button;
