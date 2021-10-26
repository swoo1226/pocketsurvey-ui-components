import React from 'react';
import MediaPreview from './MediaPreview';
import MediaUploaderMain from './MediaUploaderMain';
import Loader from '../../components/Loader';
import { IMediaUploadProps } from '../MediaUpload';
import MobileUploaderMain from '../../components/MobileUploaderMain';
import { GetInputPropsType } from '../../types';

interface IMediaSwitcherProps extends IMediaUploadProps {
  getInputProps: GetInputPropsType;
}

const MediaSwitcher = ({
  qrCode,
  mediaSrc,
  type,
  onUpload,
  loading,
  getInputProps,
  isMobile,
}: IMediaSwitcherProps): JSX.Element => {
  if (loading) return <Loader />;
  if (mediaSrc) return <MediaPreview type={type} src={mediaSrc} />;

  if (isMobile) {
    return <MobileUploaderMain type={type} onUpload={onUpload} />;
  }
  return (
    <MediaUploaderMain
      qrCode={qrCode}
      getInputProps={getInputProps}
      type={type}
      onUpload={onUpload}
    />
  );
};

export default MediaSwitcher;
