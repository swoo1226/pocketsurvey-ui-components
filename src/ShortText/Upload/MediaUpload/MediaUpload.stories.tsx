import React, { useState } from 'react';
import MediaUpload from './MediaUpload';
import { Meta } from '@storybook/react/types-6-0';
import chunsicpng from './samples/chunsicpng.png';
import sampleVideo from './samples/sampleVideo.mp4';

export default {
  component: MediaUpload,
  title: 'Components/ShortText/MediaUpload',
} as Meta;

export function Index() {
  const [imagSrc, setImgSrc] = useState<string>(chunsicpng);
  const [videoSrc, setVideoSrc] = useState<string>(sampleVideo);

  return (
    <>
      <h2>이미지 업로드 모바일</h2>
      <MediaUpload
        qrCode={null}
        mediaSrc={null}
        type="image"
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={false}
        isMobile
      />
      <h2>이미지 업로드</h2>
      <MediaUpload
        qrCode={null}
        type="image"
        mediaSrc={null}
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={false}
      />
      <h2>이미지 업로드 완료 후</h2>
      <MediaUpload
        qrCode={null}
        type="image"
        mediaSrc={imagSrc}
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={false}
      />
      <h2>이미지 업로드 로딩</h2>
      <MediaUpload
        qrCode={null}
        type="image"
        mediaSrc={imagSrc}
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={true}
      />
      <h2>영상 업로드 모바일</h2>
      <MediaUpload
        qrCode={null}
        mediaSrc={null}
        type="video"
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={false}
        isMobile
      />
      <h2>영상 업로드</h2>
      <MediaUpload
        qrCode={null}
        mediaSrc={null}
        type="video"
        onUpload={({ isValid, file }) => console.log(isValid, file)}
        loading={false}
      />
      <h2>영상 업로드 후</h2>
      <MediaUpload
        qrCode={null}
        mediaSrc={videoSrc}
        type="video"
        onUpload={() => alert('upload!')}
        loading={false}
      />
      <h2>영상 업로드 로딩</h2>
      <MediaUpload
        qrCode={null}
        mediaSrc={null}
        type="video"
        onUpload={() => alert('upload!')}
        loading={true}
      />
    </>
  );
}
