import React from "react"
import styled from "styled-components"

import Icon from "../Icon/Icon"

const PaginationContainer = styled.div``

type ThemeType = "primary" | "secondary" | "tertiary";

export type PaginationType = {
  count: number;
  selected: number;
  theme: ThemeType;
  onClickNext: () => void;
  onClickPrev: () => void;
};

function Pagination({
  count,
  selected,
  theme,
  onClickNext,
  onClickPrev,
}: PaginationType) {
  return (
    <PaginationContainer>
      <Icon icon="paginationArrow" width={50} rotate={0} />

      <Icon icon="paginationArrow" width={50} rotate={180} />
    </PaginationContainer>
  )
}

export default Pagination