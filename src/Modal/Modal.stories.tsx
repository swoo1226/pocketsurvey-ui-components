import React, {useState} from "react"
import {
  withKnobs,
  number,
  boolean,
  text,
  select,
} from "@storybook/addon-knobs";

import Modal from "./Modal"
import Input from "../Input/Input"
import Icon from "../Icon/Icon"
import { Meta } from "@storybook/react/types-6-0"

export default {
	component: Modal,
	title: "Components/Modal",
	decorators: [withKnobs],
} as Meta

export function MassiveUpload() {
	return (
    <div>
      <Modal title="대량 입력 업로드" buttonName="업로드" hasBorderTop={false}>
        <p>
          입력이 완료 된 엑셀 템플릿을 업로드해주세요. 이 설문지에서 다운로드
          받은 템플릿만 유효합니다. 양식을 다운로드 받기 전이라면, 먼저 템플릿을
          다운로드 받아주세요.
        </p>
      </Modal>
    </div>
  );
}

export function Title2Setting() {
	const [value, setValue] = useState<string>("");

  const width = number("width", 300);
  const placeholder = text("placeholder", "텍스트를 입력해주세요.");
  const errorMessage = text("errorMessage", "에러메시지");
  const disabled = boolean("disabled", false);
  const useCancleButton = boolean("useCancleButton", false);
  const isError = boolean("isError", false);
  const mode = select("mode", ["line", "basic"], "basic");
	return (
    <div>
      <Modal title="관리 제목 설정" buttonName="저장" hasBorderTop={false}>
        <Input
          mode={mode}
          placeholder={placeholder}
          value={value}
          onChange={(value: string) => setValue(value)}
          width={width}
          isError={isError}
          errorMessage={errorMessage}
          disabled={disabled}
          useCancleButton={useCancleButton}
        />
        <p>
          관리 제목은 “내 설문” 목록에서 설문 제목 대신 표시됩니다. 설문
          응답자에게는 원래 제목이 표시됩니다.
        </p>
      </Modal>
    </div>
	)}

export function ImageSetting() {
	const [imageSrc, setImageSrc] = useState<string>(
    "https://home.pocketsurvey.co.kr/wp-content/uploads/2021/02/form_header.jpg"
  );
	return (
		<div>
			<Modal title="이미지 편집" buttonName="확인" hasBorderTop={false}>
				<img src={imageSrc} style={{maxWidth: "100%", maxHeight: "200px"}}/>
			</Modal>
		</div>
	)
}

export function ImageUploadSuccess() {
	return (
		<div>
			<Modal title="이미지 업로드" buttonName="확인" hasBorderTop={true}>
				<p>
					이미지 업로드를 성공하였습니다. 확인을 눌러주세요.
				</p>
			</Modal>
		</div>
	)
}

export function ImageUploadFail() {
  return (
    <div>
      <Modal title="이미지 업로드" buttonName="업로드" hasBorderTop={true}>
        <p style={{ color: "#ff5724" }}>업로드를 실패한 파일입니다.</p>
        <div
          className="imageUploadFailList"
          style={{
            maxHeight: "200px",
            width: "100%",
            backgroundColor: "#F0F0F0",
			overflowY: "scroll"
          }}
        >
			{Array.from("qkljrehtklwjerbtlskjdbfgsjdbf").map((item: any,index: number) => {return <div>{item}{index}.jpg</div>})}
		</div>
      </Modal>
    </div>
  );
}
