// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

type LabelType = 'medium' | 'small';

interface ILabelProps {
  size: LabelType;
  backgroundColor: string;
  fontColor: string;
  value: string;
  heigth?: number;
}

const Label = ({
  size,
  backgroundColor,
  fontColor,
  value,
  heigth = 18,
}: ILabelProps): JSX.Element => (
  <LabelValue
    size={size}
    backgroundColor={backgroundColor}
    fontColor={fontColor}
    heigth={heigth}
  >
    {value}
  </LabelValue>
);

export default Label;

const LabelValue = styled.span<{
  size: LabelType;
  backgroundColor: string;
  fontColor: string;
  heigth: number;
}>`
  padding: 2px 10px;
  font-size: ${(props) => (props.size === 'medium' ? `14px` : `12px`)};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-radius: 20px;
  height: ${(props) => `${props.heigth}px`};
`;
