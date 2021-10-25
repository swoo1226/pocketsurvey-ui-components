import React from 'react';
import styled from 'styled-components';

interface IPreviewProps {
  type: 'image' | 'video';
  src: string;
}

const Preview = ({ type, src }: IPreviewProps): JSX.Element => {
  if (type === 'image') return <PreviewImg src={src} alt="preview image" />;
  if (type === 'video')
    return (
      <video controls>
        <track kind="captions" />
        <source src={src} />
      </video>
    );

  return <></>;
};

export default Preview;

const PreviewImg = styled.img`
  width: 300px;
`;
