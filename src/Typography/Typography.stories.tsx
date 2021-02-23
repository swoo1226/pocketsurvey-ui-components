import React from "react"
import { withKnobs, text, select, color } from "@storybook/addon-knobs"

import Font from "./Font"

export default {
	title: "Core/Typography", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Font, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
}

export function Index() {
	// knobs 만들기
	const fontFace = select(
		"Font Face",
		["Noto Sans CJK KR", "Mont"],
		"Noto Sans CJK KR",
	)
	const fontWeight = select("Font Weight", ["400", "500", "700"], "400")
	const fontSize = text("Font Size", "14px")
	const fontColor = color("Font Color", "#fac62d")
	const children = text("텍스트", "포켓서베이")

	return (
		<Font
			fontFace={fontFace}
			fontWeight={fontWeight}
			fontSize={fontSize}
			fontColor={fontColor}
		>
			{children}
		</Font>
	)
}

Index.story = {
	name: "Default",
}
