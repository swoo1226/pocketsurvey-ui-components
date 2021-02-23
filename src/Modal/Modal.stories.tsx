import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import Modal from "./Modal"
import { Meta } from "@storybook/react/types-6-0"

export default {
	component: Modal,
	title: "Components/Modal",
	decorators: [withKnobs],
} as Meta

export function Index() {
	return (
		<div>
			<Modal title="대량 입력 업로드" buttonName="업로드">
				<p>
          입력이 완료 된 엑셀 템플릿을 업로드해주세요. 이 설문지에서 다운로드
          받은 템플릿만 유효합니다. 양식을 다운로드 받기 전이라면, 먼저 템플릿을
          다운로드 받아주세요.
				</p>
			</Modal>
		</div>
	)
}
