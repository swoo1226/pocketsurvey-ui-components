import React, {useState, useEffect} from "react"
import { withKnobs, text, select, color } from "@storybook/addon-knobs"
import Textarea from '../Textarea/Textarea';
import Font from "./Font"
import styled from 'styled-components';
export default {
	title: "Core/Typography", // 스토리북에서 보여질 그룹과 경로를 명시
	component: Font, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
}

const Container = styled.div`
	font-size: 15px;
	textarea {
		font-size: 15px;
	}
`;


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

	const [InputValue, setValue] = useState<string>("포켓서베이");
	const [selected, setSelected] = useState(0);
	const [fontWeightSelected, setFontWeightSelected] = useState(0);
	const mainColor = color("bold color", "#FAC62D");
	const subColor = color("light color", "#fef4ce");

	return (
		<Container>
			<Textarea
			type={"basic"}
			onChange = {(value:string) => setValue(value)}
			value={InputValue}
			borderColor={"#FAC609"}
			size="big"
			cols={120}
			/>
			<Font
				fontFace={fontFace}
				fontWeight={fontWeight}
				fontSize={fontSize}
				fontColor={fontColor}
			>
				{InputValue}
			</Font>
		</Container>
	)
}

Index.story = {
	name: "Default",
}