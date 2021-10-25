import React from 'react';
import { DropzoneInputProps } from 'react-dropzone';
import { ImgVideoType } from '../ImgVideoUpload';
import { UploadFileType } from '../util';
import Loader from './Loader';
import Preview from './Preview';
import UploaderMain from './UploaderMain';

interface IImageVideoContentProps extends ImgVideoType {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  uploadFile: UploadFileType;
}

const ImageVideoContent = ({
  qrCode,
  mediaSrc,
  type,
  onUpload,
  loading,
  getInputProps,
  uploadFile,
}: IImageVideoContentProps): JSX.Element => {
  if (loading) return <Loader />;
  if (mediaSrc) return <Preview type={type} src={mediaSrc} />;
  return (
    <UploaderMain
      qrCode={qrCode}
      getInputProps={getInputProps}
      type={type}
      uploadFile={uploadFile}
      onUpload={onUpload}
    />
  );
};

export default ImageVideoContent;
