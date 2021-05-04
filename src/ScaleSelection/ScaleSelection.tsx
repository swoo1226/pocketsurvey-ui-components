import React from "react"
import styled, { css } from "styled-components"

const ScaleSelectionWrapper = styled.div`
  width: 660px;
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
}>`
  font-family: 14px;
  padding: 0px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2B2E33;
  background: ${(props) => (props.selected ? "#FAC62D" : "")};

  ${(props) => props.isFirst && "border-radius: 3px 0px 0px 3px;"}
  ${(props) =>
    props.isLast &&
    "border-radius: 0px 3px 3px 0px;"}

  border: 1px solid #DFDEDD;
  border-right: ${(props) => (props.isLast ? "1px solid #DFDEDD" : "none")};
  ${(props) => (props.isBeforeSelected ? "border-left-color: #FAC62D;" : "")}
  ${(props) => (props.selected ? "border-color: #FAC62D;" : "")}
  &:hover {
    background: ${(props) => (props.selected ? "#FAC62D" : "#F0F0F0")};
  }
`
const Label = styled.p<{ right?: boolean }>`
  display: inline-block;
  ${(props) => (props.right ? "float: right" : "")};
  font-size: 12px;
  color: #818282;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  margin-top: 7px;
`

type ScaleSelectionPropsType = {
  leftLabel: string;
  rightLabel: string;
  selectionLength: number;
  selected: number | null;
  onItemClick: (index: number | null) => void;
};

function ScaleSelection({
  leftLabel,
  rightLabel,
  selectionLength,
  selected,
  onItemClick,
}: ScaleSelectionPropsType): JSX.Element {
  return (
    <ScaleSelectionWrapper>
      <NumberSlection>
        {Array.from({ length: selectionLength }, (_, i) => i + 1).map(
          //[1,2,3,4,5 ... n]
          (item, index) => {
            return (
              <NumberSlectionItem
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
              >
                {item}
              </NumberSlectionItem>
            )
          }
        )}
      </NumberSlection>

      <Label>{leftLabel}</Label>
      <Label right={true}>{rightLabel}</Label>
    </ScaleSelectionWrapper>
  )
}

export default ScaleSelection
