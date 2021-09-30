import React from 'react';
import styled from 'styled-components';

const ScaleSelectionWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;

const NumberSlection = styled.div`
  padding: 0px;
  display: flex;
  width: 100%;
  height: 35px;
  place-content: space-around;
  border-radius: 3px;
`;

const NumberSlectionItem = styled.div<{
  isFirst: boolean;
  isLast: boolean;
  isBeforeSelected: boolean;
  selected: boolean;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
}>`
  cursor: pointer;
  padding: 0px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2B2E33;
  background: ${(props) => (props.selected ? props.backgroundColor ?? '#FAC62D' : '')};

  ${(props) => props.isFirst && 'border-radius: 3px 0px 0px 3px;'}
  ${(props) => props.isLast && 'border-radius: 0px 3px 3px 0px;'}

  border: 1px solid #DFDEDD;
  border-right: ${(props) => (props.isLast ? '1px solid #DFDEDD' : 'none')};
  ${(props) => (props.isBeforeSelected
    ? `border-left-color: ${props.backgroundColor ?? '#FAC62D'};`
    : '')}
  ${(props) => (props.selected
    ? `border-color: ${props.backgroundColor ?? '#FAC62D'};`
    : '')}
  &:hover {
    background: ${(props) => (props.selected ? `${props.backgroundColor ?? '#FAC62D'};` : '#F0F0F0')};
  }

  ${(props) => props.fontFamily && `font-family: ${props.fontFamily};`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
  ${(props) => props.fontColor && `color: #${props.fontColor};`}
`;

const LabelContainer = styled.div<{ showLabel: boolean }>`
  display: flex;
  justify-content: space-between;
  ${(props) => props.showLabel === false && 'display:none;'}
`;

const Label = styled.label<{ right?: boolean; fontSize?: string }>`
  display: inline-block;
  font-size: 12px;
  color: #818282;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  margin-top: 7px;
  width: 40%;
  word-break: keep-all;
  ${(props) => props.right && 'text-align: right;'}
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`;

type ScaleSelectionPropsType = {
  width: string;
  leftLabel: string;
  rightLabel: string;
  selected: number | null;
  onItemClick: (index: number | null) => void;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  selection: number[];
  showLabel: boolean;
};

const labelFontSize = (fontSize: string | undefined) => {
  // fontSize => 숫자px 형식
  if (fontSize === undefined) return undefined;
  return `${parseInt(fontSize.replace('px', ''), 10) - 2}px`;
};

function ScaleSelection({
  width,
  leftLabel,
  rightLabel,
  selected,
  onItemClick,
  backgroundColor,
  fontFamily,
  fontSize,
  fontColor,
  selection,
  showLabel,
}: ScaleSelectionPropsType): JSX.Element {
  const selectionLength = selection.length;
  return (
    <ScaleSelectionWrapper width={width}>
      <NumberSlection>
        {selection.map(
          (item, index) => (
            <NumberSlectionItem
              data-testid={`item-${index}`}
              onClick={() => (index === selected ? onItemClick(null) : onItemClick(index))}
              key={index}
              isFirst={index === 0}
              isLast={index === selectionLength - 1}
              isBeforeSelected={
                  selected !== null ? index === selected + 1 : false
                }
              selected={index === selected}
              backgroundColor={backgroundColor}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontColor={fontColor}
            >
              {item}
            </NumberSlectionItem>
          ),
        )}
      </NumberSlection>

      <LabelContainer showLabel={showLabel}>
        <Label fontSize={labelFontSize(fontSize)}>{leftLabel}</Label>
        <Label fontSize={labelFontSize(fontSize)} right>
          {rightLabel}
        </Label>
      </LabelContainer>
    </ScaleSelectionWrapper>
  );
}

export default ScaleSelection;
