import React from "react"
import { withKnobs, number, color } from "@storybook/addon-knobs"
import styled from "styled-components"

import ProgressBar from "./ProgressBar"

const TestPopUpContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #f0f0f0;
  position: relative;
`

export default {
	title: "Components/ProgressBar", // 스토리북에서 보여질 그룹과 경로를 명시
	component: ProgressBar, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
}

export function Index() {
	const percent = number("percent", 50, { min: 0, max: 100 })
	const thickness = number("thickness", 5)
	const barColor = color("Bar color", "#FAC62D")

	return (
		<TestPopUpContainer>
			<ProgressBar
				percent={percent}
				barColor={barColor}
				thickness={thickness}
			/>
			<h1>Test Popup</h1>
		</TestPopUpContainer>
	)
}
