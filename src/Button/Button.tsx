import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div<{
  width: string;
  height: string;
  fontSize: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabled: boolean;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;

type SizeType = 'small' | 'medium' | 'big';
type ThemeType = 'primary' | 'secondary' | 'tertiary';

export type ButtonType = {
  children: React.ReactNode;
  onClick: () => void;
  theme: ThemeType;
  size: SizeType;
  disabled: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  theme,
  size,
  disabled,
  className,
}: ButtonType) => {
  function switchSize(): {
    width: string;
    height: string;
    fontSize: string;
  } | null {
    switch (size) {
      case 'big':
        return {
          width: '380px',
          height: '60px',
          fontSize: '20px',
        };
      case 'medium':
        return null;
      case 'small':
        return {
          width: '120px',
          height: '50px',
          fontSize: '14px',
        };
      default:
        return {
          width: '120px',
          height: '50px',
          fontSize: '14px',
        };
    }
  }

  function switchTheme(): {
    backgroundColor: string;
    hoverBackgroundColor: string;
  } | null {
    switch (theme) {
      case 'primary':
        return {
          backgroundColor: '#FAC62D',
          hoverBackgroundColor: '#F0BD05',
        };
      case 'secondary':
        return {
          backgroundColor: '#E9E1D5',
          hoverBackgroundColor: '#E3D9CA',
        };
      case 'tertiary':
        return {
          backgroundColor: '#F0F0F0',
          hoverBackgroundColor: '#EBEBEB',
        };
      default:
        return {
          backgroundColor: '#FAC62D',
          hoverBackgroundColor: '#F0BD05',
        };
    }
  }

  const { width, height, fontSize } = switchSize()!;
  const { backgroundColor, hoverBackgroundColor } = switchTheme()!;

  return (
    <ButtonContainer
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
