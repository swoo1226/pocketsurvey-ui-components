import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import UploadWrapper from '../components/UploadWrapper';
import { uploadFile } from '../util';
import MediaSwitcher from './components/MediaSwitcher';
import { OnUploadType } from '../types';

export interface IMediaUploadProps {
  qrCode: string | null;
  mediaSrc: string | null;
  type: 'video' | 'image';
  onUpload: OnUploadType;
  loading: boolean;
  isMobile?: boolean;
}

const MediaUpload = ({
  qrCode,
  mediaSrc,
  type,
  onUpload,
  loading,
  isMobile,
}: IMediaUploadProps): JSX.Element => {
  const onDrop = useCallback((acceptedFiles) => {
    uploadFile(acceptedFiles[0], type, onUpload);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  const isMobileUploading = !loading && !mediaSrc && !!isMobile;

  return (
    <UploadWrapper
      getRootProps={getRootProps}
      src={mediaSrc}
      isDragActive={isDragActive}
      isMobileUploading={isMobileUploading}
    >
      <MediaSwitcher
        qrCode={qrCode}
        mediaSrc={mediaSrc}
        type={type}
        onUpload={onUpload}
        loading={loading}
        getInputProps={getInputProps}
        isMobile={isMobile}
      />
    </UploadWrapper>
  );
};

export default MediaUpload;
