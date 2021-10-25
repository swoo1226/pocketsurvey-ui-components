import React from 'react';
import { DropzoneInputProps } from 'react-dropzone';
import { ImgVideoType } from '../ImgVideoUpload';
import { UploadFileType } from '../../util';
import MediaPreview from './MediaPreview';
import MediaUploaderMain from './MediaUploaderMain';
import Loader from '../../components/Loader';

interface IMediaSwitcherProps extends ImgVideoType {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  uploadFile: UploadFileType;
}

const MediaSwitcher = ({
  qrCode,
  mediaSrc,
  type,
  onUpload,
  loading,
  getInputProps,
  uploadFile,
}: IMediaSwitcherProps): JSX.Element => {
  if (loading) return <Loader />;
  if (mediaSrc) return <MediaPreview type={type} src={mediaSrc} />;
  return (
    <MediaUploaderMain
      qrCode={qrCode}
      getInputProps={getInputProps}
      type={type}
      uploadFile={uploadFile}
      onUpload={onUpload}
    />
  );
};

export default MediaSwitcher;
