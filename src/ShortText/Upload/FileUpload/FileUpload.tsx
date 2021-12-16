import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadWrapper from '../components/UploadWrapper';
import { OnUploadType } from '../types';
import { uploadFile } from '../util';
import FileUploadSwitcher from './components/FileUploadSwitcher';

interface IFileUploadProps {
  answeredText: string | null;
  onCancelClick?: () => void;
  onUpload: OnUploadType;
  loading: boolean;
  isMobile?: boolean;
}

const FileUpload = ({
  answeredText,
  onCancelClick,
  onUpload,
  loading,
  isMobile,
}: IFileUploadProps): JSX.Element => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const deleteUploadedFile = () => {
    if (onCancelClick) onCancelClick();
    setUploadedFile('');
  };

  useEffect(() => {
    if (answeredText) {
      setUploadedFile(answeredText);
    }
  }, [answeredText]);

  const onDrop = useCallback((acceptedFiles) => {
    uploadFile(acceptedFiles[0], 'file', onUpload);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  const isMobileUploading = !loading && !uploadedFile && !!isMobile;

  return (
    <>
      <UploadWrapper
        getRootProps={getRootProps}
        src={answeredText}
        isDragActive={isDragActive}
        isMobileUploading={isMobileUploading}
      >
        <FileUploadSwitcher
          uploadedFile={uploadedFile}
          loading={loading}
          deleteUploadedFile={deleteUploadedFile}
          getInputProps={getInputProps}
          onUpload={onUpload}
          isMobile={isMobile}
        />
      </UploadWrapper>
    </>
  );
};

export default FileUpload;
