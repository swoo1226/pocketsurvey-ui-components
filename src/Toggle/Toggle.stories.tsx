import React, { useState } from "react"
import { withKnobs, color } from "@storybook/addon-knobs"

import Toggle from "./Toggle"

export default {
	title: "Components/Toggle", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Toggle, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
}

export function Index() {
	const [isToggleOn, setIsToggleOn] = useState<boolean>(false)

	const toggleOnBackgroundColor = color(
		"Toggle on background-color",
		"#59c4db",
	)
	const hoveredBackgroundColor = color("Hover on background-color", "#818282")

	return (
		<Toggle
			toggleOnBackgroundColor={toggleOnBackgroundColor}
			hoveredBackgroundColor={hoveredBackgroundColor}
			isToggleOn={isToggleOn}
			setIsToggleOn={setIsToggleOn}
		/>
	)
}
