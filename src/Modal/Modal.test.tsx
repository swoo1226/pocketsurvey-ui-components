import React from "react"
import { fireEvent, render, RenderResult } from "@testing-library/react"
// import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom"

import Modal from "./Modal"

describe("모달 컴포넌트 테스트", () => {
  let renderResult: RenderResult
  const fakeOnClickFn = jest.fn()

  beforeEach(() => {
    renderResult = render(
      <Modal title="모달 타이틀" buttonName="버튼클릭" onClick={fakeOnClickFn}>
        <p>버튼을 클릭해주세요.</p>
      </Modal>
    )
  })

  it("의도한 모달 타이틀이 뜨는가", () => {
    const { getByText } = renderResult
    expect(getByText("모달 타이틀")).toBeTruthy()
  })

  it("의도한 children이 렌더링되는가", () => {
    const { getByText } = renderResult
    expect(getByText("버튼을 클릭해주세요.")).toBeTruthy()
  })

  it("의도한 모달 버튼이 뜨는가", () => {
    const { getByText } = renderResult
    expect(getByText("버튼클릭")).toBeTruthy()
  })

  it("취소 버튼이 렌더링 되는가", () => {
    const { getByText } = renderResult
    expect(getByText("취소")).toBeTruthy()
  })

  it("모달 버튼의 클릭 이벤트가 잘 동작하는가", () => {
    const { getByText } = renderResult
    const button = getByText("버튼클릭")

    fireEvent.click(button)
    expect(fakeOnClickFn).toHaveBeenCalledTimes(1)
  })
})
