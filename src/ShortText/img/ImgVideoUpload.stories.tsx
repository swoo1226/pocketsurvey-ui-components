import React, { useState } from 'react';
import ImgVideo from './ImgVideoUpload';
import { Meta } from '@storybook/react/types-6-0';
import chunsicpng from './chunsicpng.png';
import sampleVideo from './sampleVideo.mp4';

export default {
  component: ImgVideo,
  title: 'Components/ShortText/ImgVideoUpload',
} as Meta;

export function Index() {
  const [imagSrc, setImgSrc] = useState<string>(chunsicpng);
  const [videoSrc, setVideoSrc] = useState<string>(sampleVideo);

  return (
    <>
      <h2> 이미지 업로드 대기 상태</h2>
      <ImgVideo
        qrCode={null}
        type="image"
        mediaSrc={null}
        onClick={() => {
          setImgSrc(null);
        }}
        onUpload={() => alert('upload!')}
      />
      <h2>이미지 업로드 완료 후</h2>
      <ImgVideo
        qrCode={null}
        type="image"
        mediaSrc={imagSrc}
        onClick={() => {
          setImgSrc(null);
        }}
        onUpload={() => alert('upload!')}
      />
      <h2>영상 업로드</h2>
      <ImgVideo
        qrCode={null}
        mediaSrc={null}
        type="video"
        onClick={() => {
          setVideoSrc(null);
        }}
        onUpload={() => alert('upload!')}
      />
      <h2>영상 업로드 후</h2>
      <ImgVideo
        qrCode={null}
        mediaSrc={videoSrc}
        type="video"
        onClick={() => {
          setVideoSrc(null);
        }}
        onUpload={() => alert('upload!')}
      />
    </>
  );
}