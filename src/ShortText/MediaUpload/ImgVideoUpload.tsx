import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import UploadWrapper from './components/UploadWrapper';
import { uploadFile } from './util';
import ImageVideoContent from './components/ImageVideoContent';

export type ImgVideoType = {
  qrCode: string | null;
  mediaSrc: string | null;
  type: 'video' | 'image';
  onUpload: ({ isValid, file }: { isValid: boolean; file: File }) => void;
  loading: boolean;
};

function ImgVideo({
  qrCode,
  mediaSrc,
  type,
  onUpload,
  loading,
}: ImgVideoType): JSX.Element {
  const onDrop = useCallback((acceptedFiles) => {
    uploadFile(acceptedFiles[0], type, onUpload);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <UploadWrapper
      {...getRootProps()}
      mediaSrc={mediaSrc}
      isDragActive={isDragActive}
    >
      <ImageVideoContent
        qrCode={qrCode}
        mediaSrc={mediaSrc}
        type={type}
        onUpload={onUpload}
        loading={loading}
        getInputProps={getInputProps}
        uploadFile={uploadFile}
      />
    </UploadWrapper>
  );
}

export default ImgVideo;
