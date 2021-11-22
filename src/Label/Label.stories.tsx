import React from "react"
import { withKnobs, select } from "@storybook/addon-knobs"

import Label from "./Label"

export default {
  title: "Components/Label", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Label, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export const Index = () => {
    const labelSize = select('medium',['medium','small'],'medium')
    return (
        <>
        <p>테이블 뷰 및 그룹맵에서 사용하는 label 입니다.</p>
        <p>테이블 뷰는 'medium' 그룹맵은 'small'을 사용합니다.</p>

        <p>medium</p>
        <Label
        size={labelSize}
        backgroundColor={"#95CAC733"}
        fontColor={"#95CAC7"}
        value='민트초코프라푸치노'
        />
        <p>small</p>
        <Label
        size={'small'}
        backgroundColor={"#8056DA"}
        fontColor={"#ffffff"}
        value='Root'
        />
        </>
    )
}


