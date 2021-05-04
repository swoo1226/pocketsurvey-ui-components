import React from "react"
import styled from "styled-components"

const ScaleSelectionWrapper = styled.div`
  width: 660px;
`

const NumberSlection = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  place-content: space-around;
  border-radius: 3px;
  border: 1px solid #dfdedd;
`

const NumberSlectionItem = styled.div<{ isLast: boolean, slected: boolean }>`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${(props) => (props.isLast ? "" : "1px solid #DFDEDD")};
  background: ${(props)=> props.slected ? "#FAC62D" : ""};
  &:hover {
     background: ${(props)=> props.slected ? "#FAC62D" : "#F0F0F0"};
  }
`

const Label = styled.p<{right?: boolean}>`
    display: inline-block;
    ${(props) => props.right ? "float: right" : ""};
`

type ScaleSelectionPropsType = {
    leftLabel: string;
    rightLabel: string;
    selectionLength: number;
    slected: number;
};

function ScaleSelection({
  leftLabel,
  rightLabel,
  selectionLength,
  slected
}: ScaleSelectionPropsType): JSX.Element {
  return (
    <ScaleSelectionWrapper>
      <NumberSlection>
        {Array.from({ length: selectionLength }, (_, i) => i + 1).map( //[1,2,3,4,5 ... n]
          (item, index) => {
            return (
              <NumberSlectionItem
                key={index}
                isLast={index === selectionLength - 1}
                slected={index === slected}
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
