import React from "react"
import Radio from "./Radio"
import "@testing-library/jest-dom"
import { render, RenderResult, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

interface HTMLElementHasChecked extends HTMLElement {
  checked: string;
}

describe("라디오 테스트", () => {
  let renderResult: RenderResult
  beforeEach(() => {
    renderResult = render(
      <Radio
        name={"radio"}
        selections={[
          {
            label: "apple",
          },
          {
            label: "mango",
          },
        ]}
        selected={1}
        onItemClick={(index: number) => alert(index)}
      ></Radio>
    )
  })

  it("Rendering Test", () => {
    const { container } = renderResult
    expect(container)
  })

  it("Checked Test", async () => {
    const { getByTestId } = renderResult
    const radiobtn = getByTestId("radio-selection-item-1")
    const radioItem = getByTestId("radio-item-1")
    jest.spyOn(window, "alert").mockImplementation()
    userEvent.click(radioItem)
    await waitFor(() => {
      expect((radiobtn as HTMLElementHasChecked).checked).toEqual("checked")
      expect(radiobtn).toHaveStyle("box-shadow: 0 0 0 4px #f2ab28 inset;")
    })
    afterEach(cleanup)
  })
})
