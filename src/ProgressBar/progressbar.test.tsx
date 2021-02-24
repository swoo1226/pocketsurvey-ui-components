import React from "react"
import { render, RenderResult } from "@testing-library/react"
import "@testing-library/jest-dom"

import ProgressBar from "./ProgressBar"

describe("프로그래스바 컴포넌트 테스트", () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(
      <ProgressBar percent={75} barColor="#40739e" thickness={10} />
    )
  })

  it("프로그래스바가 렌더링 되는지", () => {
    const { getByTestId } = renderResult
    const progressbar = getByTestId("progressbar")
    expect(progressbar).toBeTruthy()
  })

  it("percent", () => {
    const { getByTestId } = renderResult
    const progressbar = getByTestId("progressbar")

    expect(progressbar).toHaveStyle("width: 75%")
  })

  it("thickness", () => {
    const { getByTestId } = renderResult
    const progressbar = getByTestId("progressbar")

    expect(progressbar).toHaveStyle("height: 10px")
  })

  it("color", () => {
    const { getByTestId } = renderResult
    const progressbar = getByTestId("progressbar")

    expect(progressbar).toHaveStyle("background-color: #40739e")
  })
})
