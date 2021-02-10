import React, { useRef } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type typeProps = 'basic' | 'line';
type sizeProps = 'big' | 'medium' | 'small';

const TextareaContainer = styled.textarea<{
    borderStyle: FlattenSimpleInterpolation;
    fontStyle: FlattenSimpleInterpolation;
}>`
    ${(props) => props.borderStyle}
    ${(props) => props.fontStyle}
`;

const FontSwitch = (type: typeProps, size?: sizeProps) => {
    if (type === 'line') {
        return css`
            font-family: Noto Sans CJK KR;
            font-size: 18px;
        `;
    }
    switch (size) {
        case 'big':
            return css`
                font-family: Noto Sans CJK KR;
                font-size: 28px;
            `;
        case 'medium':
        case 'small':
        default:
            return css`
                font-family: Noto Sans CJK KR;
                font-size: 14px;
            `;
    }
};

const BorderSwitch = (type: typeProps) => {
    switch (type) {
        case 'line':
            return css`
                border: none;
                border-bottom: 1px solid #dfdedd;
                border-radius: 0px;
            `;
        case 'basic':
            return css`
                border: 1px solid #dfdedd;
                border-radius: 3px;
            `;
    }
};

type TextareaPropsType = {
    type: typeProps;
    size?: sizeProps;
    children?: React.ReactNode;
};

export const Textarea = ({ type, size, children }: TextareaPropsType) => {
    const dom = useRef<HTMLTextAreaElement>(null);
    const fontStyle: FlattenSimpleInterpolation = FontSwitch(type, size);
    const borderStyle: FlattenSimpleInterpolation = BorderSwitch(type);

    const resizeHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (dom.current) {
            dom.current.style.height = '1px';
            dom.current.style.height = dom.current.scrollHeight + 'px';
        } else {
            console.log('dom.current is null');
        }
    };

    return (
        <TextareaContainer
            fontStyle={fontStyle}
            borderStyle={borderStyle}
            onChange={resizeHeight}
            ref={dom}
        >
            {children}
        </TextareaContainer>
    );
};
