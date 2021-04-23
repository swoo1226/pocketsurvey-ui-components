import React from "react"
import styled from "styled-components"

const CheckRankingContainer = styled.div``
const CheckRankingList = styled.div``
const CheckRankingItem = styled.div`
  display: flex;
  margin-bottom: 14px;
`
const CheckRankingSelectionLabel = styled.label`
  margin-left: 14px;
`
const CheckRankingSelectionItem = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 2px;

  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;

  background-color: ${(props) => (props.checked ? "#f2ab28" : "#FFFFFF")};
  border: ${(props) => (props.checked ? "" : "0.5px solid rgba(0, 0, 0, 0.3)")};

  &:hover {
    ${(props) => (props.checked ? "" : "border: 1px solid #f2ab28;")};
  }

  p {
    color: #fff;
  }
`

export type CheckRankingType = {
  selections: {
    label: string;
  }[];
  selected: number[];
  onItemClick: (index: number) => void;
  className?: string;
};

function CheckRanking({
  selections,
  selected,
  onItemClick,
  className,
}: CheckRankingType): JSX.Element {
  return (
    <CheckRankingContainer className={className}>
      <CheckRankingList>
        {selections.map((item, index) => {
          return (
            <CheckRankingItem
              key={index}
              onClick={() => onItemClick(index)}
              data-testid="CheckRanking-item"
            >
              <CheckRankingSelectionItem
                data-testid={`CheckRanking-${index}`}
                checked={selected.includes(index)}
              >
                {selected.indexOf(index) !== -1 ? (
                  <p>{selected.indexOf(index)}</p>
                ) : null}
              </CheckRankingSelectionItem>
              <CheckRankingSelectionLabel>
                {item.label}
              </CheckRankingSelectionLabel>
            </CheckRankingItem>
          )
        })}
      </CheckRankingList>
    </CheckRankingContainer>
  )
}

export default CheckRanking
