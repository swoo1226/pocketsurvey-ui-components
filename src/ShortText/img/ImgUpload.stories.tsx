import React, { useState} from 'react';
import ImgVideo from "./ImgUpload";
import { Meta } from "@storybook/react/types-6-0";
import chunsicpng from "./chunsicpng.png"

export default {
    component: ImgVideo,
    title: "Components/ImgVideoUpload",
} as Meta;

export function Index() {
    const [imgSrc, setImgSrc] = useState<string>(chunsicpng)
    return (
        <>
        <h2> 파일업로드 대기 상태</h2>
           <ImgVideo qrCode = {null} imgSrc={null} onClick={() => {
               setImgSrc(null)
            }}/>
        <h2>파일 업로드 완료 후</h2>
            <ImgVideo qrCode = {null} imgSrc={chunsicpng} onClick={() => {
               setImgSrc(null)
            }}/>
           
        </>
    )
}