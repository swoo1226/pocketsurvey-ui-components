import { css } from "styled-components"

export const scrollBar = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(195, 195, 195, 0.75);
    -webkit-box-shadow: 0 0 1px rgba(195, 195, 195, 0.75);
  }
`
