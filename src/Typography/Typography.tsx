import React, { forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { typographyCssUtil } from './typograph.cssUtil';

type TitleType =
  | 'title-xxxl'
  | 'title-xxl'
  | 'title-xl'
  | 'title-l'
  | 'title-l-medium'
  | 'title-m'
  | 'title-s'
  | 'title-xs'
  | 'title-xxs';
type ButtonType = 'button-l' | 'button-m' | 'button-m-regular' | 'button-s';
type CaptionType = 'caption-l' | 'caption-m' | 'caption-s';
type TooltipType = 'tooltip-m' | 'tooltip-s';
type TextType = 'text-l' | 'text-m';
export type TokenType =
  | TitleType
  | ButtonType
  | CaptionType
  | TooltipType
  | TextType;

interface ITypograph {
  token: TokenType;
  children: React.ReactNode;
  color?: string;
  extraCSS?: FlattenSimpleInterpolation;
}

const Typography = forwardRef(
  (
    { token, children, color = '#2b2e33', extraCSS, ...props }: ITypograph,
    ref: React.Ref<HTMLParagraphElement>,
  ) => {
    return (
      <>
        <TypographWrapper
          ref={ref}
          token={token}
          extraCSS={extraCSS}
          {...props}
        >
          {children}
        </TypographWrapper>
      </>
    );
  },
);

export default Typography;

const TypographWrapper = styled.p<{
  token: TokenType;
  extraCSS?: FlattenSimpleInterpolation;
  color?: string;
}>`
  ${(props) => typographyCssUtil.getTypographyCSS(props.token)}
  ${(props) => props.extraCSS}
  color: ${(props) => props.color}
`;
