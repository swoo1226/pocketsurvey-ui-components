import React from "react"
import { withKnobs, select, boolean, color } from "@storybook/addon-knobs"

import PaginationComponent from "./Pagination"
import { Meta } from "@storybook/react/types-6-0"

export default {
  component: PaginationComponent,
  title: "Components/Pagination",
  decorators: [withKnobs],
} as Meta

export const Index = () => {
  const size = select("size", ["normal", "small", "large"], "normal")
  const count = select("count", [1, 7, 8, 10], 8)
  const disabled = boolean("disabled", false)
  const defaultPage = select("defaultPage", [1, 3], 1)
  const siblingCount = select("siblingCount", [1, 3, 4], 1)
  const boundaryCount = select("boundaryCount", [1, 3, 4], 1)
  const selectedBackgroundColor = color("selected background color", "#FAC62D")
  const selectedTextColor = color("selected text color", "#FFFFFF")
  const hoveredBackgroundColor = color("hovered background color", "#F0F0F0")
  const hoveredTextColor = color("hovered text color", "#2B2E33")
  return (
    <PaginationComponent
      count={count}
      size={size}
      defaultPage={defaultPage}
      disabled={disabled}
      siblingCount={siblingCount}
      boundaryCount={boundaryCount}
      onChangeFn={(page: number) => alert(page)}
      selectedBackgroundColor={selectedBackgroundColor}
      hoveredBackgroundColor={hoveredBackgroundColor}
      selectedTextColor={selectedTextColor}
      hoveredTextColor={hoveredTextColor}
    />
  )
}
