import React from 'react';
import Loader from '../../components/Loader';
import FileUploadMain from './FileUploadMain';
import FileResult from './FileResult';
import { GetInputPropsType, OnUploadType } from '../../types';

interface IFileUploadSwitcherProps {
  uploadedFile: string | null;
  loading: boolean;
  deleteUploadedFile: () => void;
  getInputProps: GetInputPropsType;
  onUpload: OnUploadType;
}

const FileUploadSwitcher = ({
  uploadedFile,
  loading,
  deleteUploadedFile,
  getInputProps,
  onUpload,
}: IFileUploadSwitcherProps): JSX.Element => {
  if (loading) return <Loader />;
  if (uploadedFile)
    return (
      <FileResult
        fileName={uploadedFile}
        deleteUploadedFile={deleteUploadedFile}
      />
    );
  // 여기서 모바일인지 아닌지 props를 받아서 처리
  return <FileUploadMain getInputProps={getInputProps} onUpload={onUpload} />;
};

export default FileUploadSwitcher;
