import React from "react"

import { Color } from "./Color"
import ColorSet from "./colors.json"

export default {
  component: Color,
  title: "Core/Colors",
}

export function Index() {
  return <Color colors={ColorSet} />
}
