import React from 'react';
import Loader from '../../components/Loader';
import FileUploadMain from './FileUploadMain';
import FileResult from './FileResult';
import { GetInputPropsType, OnUploadType } from '../../types';
import MobileUploaderMain from '../../components/MobileUploaderMain';

interface IFileUploadSwitcherProps {
  uploadedFile: string | null;
  loading: boolean;
  deleteUploadedFile: () => void;
  getInputProps: GetInputPropsType;
  onUpload: OnUploadType;
  isMobile?: boolean;
}

const FileUploadSwitcher = ({
  uploadedFile,
  loading,
  deleteUploadedFile,
  getInputProps,
  onUpload,
  isMobile,
}: IFileUploadSwitcherProps): JSX.Element => {
  if (loading) return <Loader />;
  if (uploadedFile)
    return (
      <FileResult
        fileName={uploadedFile}
        deleteUploadedFile={deleteUploadedFile}
      />
    );

  if (isMobile) {
    return <MobileUploaderMain type="file" onUpload={onUpload} />;
  }

  return <FileUploadMain getInputProps={getInputProps} onUpload={onUpload} />;
};

export default FileUploadSwitcher;
