import React from "react"
import { withKnobs, select, number, text } from "@storybook/addon-knobs"

import Icon, {IconType}  from "./Icon"
import { Meta }from "@storybook/react/types-6-0";
import {chart100Solid,singleChoice,indiReport} from "./svg/index";

export default {
	component: Icon,
	title: "Core/Icon",
	decorators: [withKnobs],
} as Meta

export function Index() {
	const theme = select("icon name", IconType, "singleChoice")
	const width = number("width", 50)
	const color = text("color", "black")
	const rotate = number("rotate", 0)
console.log(theme,color)
	return <Icon icon={theme} width={width} color={color} rotate={rotate} />
}

export const All = () => {
	return(
		<>
		<Icon icon={"singleChoice"} width={50} color={"black"} rotate={0} />
		</>
	)
	
}
