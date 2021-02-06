import React from 'react';
import styled from 'styled-components';

const FontContainer = styled.p<{
  fontFace: string;
  fontWeight: string;
  fontSize: string;
  fontColor: string;
  lineHeight: string;
}>`
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFace};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
`;

export type FontType = {
  children: React.ReactNode;
  fontFace: string;
  fontWeight: string;
  fontSize: string;
  fontColor: string;
};

export const Font = ({
  children,
  fontFace,
  fontWeight,
  fontColor,
  fontSize,
}: FontType) => {
  return (
    <FontContainer
      fontFace={fontFace}
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontColor={fontColor}
      lineHeight="140%"
    >
      {children}
    </FontContainer>
  );
};
