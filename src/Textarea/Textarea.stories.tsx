import React from "react"
import { withKnobs, text, select, color } from "@storybook/addon-knobs"

import Textarea from "./Textarea"

export default {
	title: "Components/Textarea", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Textarea, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
}

export function Index() {
	const type = select("타입", ["basic", "line"], "basic")
	const size = select("사이즈", ["small", "medium", "big"], "small")
	const children = text("텍스트", "가나다라마바사아자차카타파하")
	const width = text("가로 크기", "")
	return (
		<Textarea type={type} size={size} width={width}>
			{children}
		</Textarea>
	)
}

Index.story = {
	name: "Default",
}
