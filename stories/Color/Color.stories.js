import React from "react"

import { Color } from "./Color"
import ColorSet from "./colors.json"

export default {
  component: Color,
  title: "Example/Color",
}

export const Index = () => <Color colors={ColorSet} />
