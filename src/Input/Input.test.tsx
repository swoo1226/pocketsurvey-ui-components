import React from "react"
import { render, RenderResult, fireEvent } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import Input from "./Input"

describe("인풋 컴포넌트 테스트", () => {
  let renderResult: RenderResult
  const fakeOnChangeFn = jest.fn()
  beforeEach(() => {
    renderResult = render(
      <Input
        mode="line"
        placeholder="텍스트를 입력해주세요."
        value="테스트입니다."
        onChange={fakeOnChangeFn}
        width={400}
        isError={true}
        errorMessage="에러메시지입니다."
        disabled={false}
        useCancelButton={false}
        borderColor='#fac609'
      ></Input>
    )
  })

  describe("인풋 박스", () => {
    it("인풋 박스가 존재하는가", () => {
      const { getByTestId } = renderResult
      const inputbox = getByTestId("inputbox")
      expect(inputbox).toBeTruthy()
    })

    it("인풋 박스의 width가 알맞게 들어가는가", () => {
      const { getByTestId } = renderResult
      const inputbox = getByTestId("inputbox")
      expect(inputbox).toHaveAttribute("width", "400")
    })

    it("모드가 라인일 때, border-bottom이 스타일로 설정되어있는가", () => {
      const { getByTestId } = renderResult
      const inputbox = getByTestId("inputbox")
      expect(inputbox).toHaveStyle("border-bottom: 1px solid #dfdedd")
    })
  })

  describe("인풋", () => {
    it("의도한 플레이스 홀더 값을 가지고 있는가", () => {
      const { getByPlaceholderText } = renderResult
      expect(getByPlaceholderText("텍스트를 입력해주세요.")).toBeTruthy()
    })

    it("의도한 value를 가지고 있는가", () => {
      const { getByPlaceholderText } = renderResult
      const inputNode = getByPlaceholderText("텍스트를 입력해주세요.")
      expect(inputNode).toHaveAttribute("value", "테스트입니다.")
    })

    it("width는 인풋 박스 width의 *0.9로 들어가는가", () => {
      const { getByPlaceholderText } = renderResult
      const inputNode = getByPlaceholderText("텍스트를 입력해주세요.")
      expect(inputNode).toHaveAttribute("width", "360")
    })

    it("체인지 이벤트가 잘 발생하는가", async () => {
      const { getByPlaceholderText } = renderResult
      const inputNode = getByPlaceholderText("텍스트를 입력해주세요.")

      fireEvent.change(inputNode, { target: { value: "체인지" } })
      expect(fakeOnChangeFn).toBeCalledWith("체인지")
      // userEvent.change()
    })
  })

  describe("에러메시지", () => {
    it("에러메세지가 있다면, 의도한 에러메시지가 화면에 표시되는가", () => {
      const { getByText } = renderResult
      // const inputcontainer = getByTestId('inputcontainer');
      expect(getByText("에러메시지입니다.")).toBeTruthy()
    })
  })
})
