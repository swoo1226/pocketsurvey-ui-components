import React, { useRef } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

type typeProps = 'basic' | 'line';
type sizeProps = 'big' | 'medium' | 'small';

const TextareaContainer = styled.textarea<{
    borderStyle: FlattenSimpleInterpolation;
    fontStyle: FlattenSimpleInterpolation;
    widthStyle: FlattenSimpleInterpolation;
}>`
    resize: none;
    ${(props) => props.borderStyle}
    ${(props) => props.fontStyle}
    ${(props) => props.widthStyle}

    &:focus {
        outline: none;
    }
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

    return (
        <TextareaContainer
            fontStyle={fontStyle}
            borderStyle={borderStyle}
            ref={dom}
        >
            {children}
        </TextareaContainer>
    );
};
