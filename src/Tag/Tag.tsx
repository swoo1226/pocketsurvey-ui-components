import React from 'react';
import styled from 'styled-components';

type ModeType = 'pastellYellow' | 'pastellBlue' | 'defaultGray';

export type TagType = {
  children: React.ReactNode;
  mode: ModeType;
  disabled: boolean;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  hoverColor?: string;
  fontSize?: number;
};

const TagContainer = styled.div<{
  backgroundColor: string;
  hoverColor: string;
  fontSize: number;
  disabled:boolean;
}>`
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  margin-right: 9.8px;
  font-size: 12px;
  width: fit-content;
  padding: 7px 14px;
  display: inline-block;
  color: #2b2e33;
  font-family: 'Noto Sans CJK KR Regular';
  cursor: ${(props) => props.disabled ? "default" : "pointer"};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
function Tag({
  children,
  onClick,
  mode,
  className,
  backgroundColor,
  hoverColor,
  disabled,
  fontSize,
}: TagType): JSX.Element {
  function switchBackgroundColor(): {
    innerBackgroundColor: string;
  } {
    if (backgroundColor) {
      return {
        innerBackgroundColor: backgroundColor,
      };
    }
    switch (mode) {
      case 'pastellYellow':
        return {
          innerBackgroundColor: '#fef4ce',
        };
      case 'pastellBlue':
        return {
          innerBackgroundColor: '#def3f8',
        };
      case 'defaultGray':
        return {
          innerBackgroundColor: '#e9e1d5',
        };
      default:
        return {
          innerBackgroundColor: '#e9e1d5',
        };
    }
  }

  function setHoverColor(): {
    innerHoverColor: string;
  } {
    if (hoverColor) {
      return {
        innerHoverColor: hoverColor,
      };
    }
    return {
      innerHoverColor: innerBackgroundColor,
    };
  }

  const { innerBackgroundColor } = switchBackgroundColor();
  const { innerHoverColor } = setHoverColor();
  return (
    <TagContainer
      onClick={disabled ? undefined : onClick}
      backgroundColor={innerBackgroundColor}
      hoverColor={innerHoverColor}
      className={className}
      disabled={disabled}
      fontSize={fontSize ?? 12}
    >
      {children}
    </TagContainer>
  );
}

export default Tag;
