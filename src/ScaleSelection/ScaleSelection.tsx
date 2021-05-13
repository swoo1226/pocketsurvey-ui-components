import React from "react"
import styled from "styled-components"

const ScaleSelectionWrapper = styled.div<{width: string}>`
  width: ${(props)=> props.width};
`

const NumberSlection = styled.div`
  padding: 0px;
  display: flex;
  width: 100%;
  height: 35px;
  place-content: space-around;
  border-radius: 3px;
`

const NumberSlectionItem = styled.div<{
  isFirst: boolean;
  isLast: boolean;
  isBeforeSelected: boolean;
  selected: boolean;
  backgroundColor?: string
}>`
  font-family: 14px;
  padding: 0px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2B2E33;
  background: ${(props) => (props.selected ? props.backgroundColor ?? "#FAC62D" : "")};

  ${(props) => props.isFirst && "border-radius: 3px 0px 0px 3px;"}
  ${(props) =>
    props.isLast &&
    "border-radius: 0px 3px 3px 0px;"}

  border: 1px solid #DFDEDD;
  border-right: ${(props) => (props.isLast ? "1px solid #DFDEDD" : "none")};
  ${(props) => (props.isBeforeSelected ? `border-left-color: ${props.backgroundColor ?? "#FAC62D"};` : "")}
  ${(props) => (props.selected ? `border-color: ${props.backgroundColor ?? "#FAC62D"};` : "")}
  &:hover {
    background: ${(props) => (props.selected ? `${props.backgroundColor ?? "#FAC62D"};` : "#F0F0F0")};
  }
`
const LeftLabel = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #818282;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  margin-top: 7px;
  width: 40%;
  word-break:keep-all;
  float:left;
`

const RightLabel = styled.p<{ right?: boolean }>`
  display: inline-block;
  font-size: 12px;
  color: #818282;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  margin-top: 7px;
  width: 40%;
  word-break:keep-all;
  text-align: right;
  float:right;
`

type ScaleSelectionPropsType = {
  width: string;
  leftLabel: string;
  rightLabel: string;
  selectionLength: number;
  selected: number | null;
  onItemClick: (index: number | null) => void;
  backgroundColor?: string;
};

function ScaleSelection({
  width,
  leftLabel,
  rightLabel,
  selectionLength,
  selected,
  onItemClick,
  backgroundColor
}: ScaleSelectionPropsType): JSX.Element {
  return (
    <ScaleSelectionWrapper width={width}>
      <NumberSlection>
        {Array.from({ length: selectionLength }, (_, i) => i + 1).map(
          //[1,2,3,4,5 ... n]
          (item, index) => {
            return (
              <NumberSlectionItem
                data-testid={`item-${index}`}
                onClick={() =>
                  index === selected ? onItemClick(null) : onItemClick(index)
                }
                key={index}
                isFirst={index === 0}
                isLast={index === selectionLength - 1}
                isBeforeSelected={
                  selected !== null ? index === selected + 1 : false
                }
                selected={index === selected}
                backgroundColor={backgroundColor}
              >
                {item}
              </NumberSlectionItem>
            )
          }
        )}
      </NumberSlection>

      <LeftLabel>{leftLabel}</LeftLabel>
      <RightLabel right={true}>{rightLabel}</RightLabel>
    </ScaleSelectionWrapper>
  )
}

export default ScaleSelection
