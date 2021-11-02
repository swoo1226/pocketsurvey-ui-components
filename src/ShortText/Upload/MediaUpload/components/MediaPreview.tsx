import React from 'react';
import styled from 'styled-components';

interface IMediaPreviewProps {
  type: 'image' | 'video';
  src: string;
}

const MediaPreview = ({ type, src }: IMediaPreviewProps): JSX.Element => {
  if (type === 'image')
    return <MediaPreviewImg src={src} alt="MediaPreview image" />;
  if (type === 'video')
    return (
      <video controls>
        <track kind="captions" />
        <source src={src} />
      </video>
    );

  return <></>;
};

export default MediaPreview;

const MediaPreviewImg = styled.img`
  width: 300px;
`;
