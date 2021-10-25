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
}

const FileUpload = ({
  answeredText,
  onCancelClick,
  onUpload,
  loading,
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

  return (
    <UploadWrapper
      {...getRootProps()}
      src={answeredText}
      isDragActive={isDragActive}
    >
      <FileUploadSwitcher
        uploadedFile={uploadedFile}
        loading={loading}
        deleteUploadedFile={deleteUploadedFile}
        getInputProps={getInputProps}
        onUpload={onUpload}
      />
    </UploadWrapper>
  );
};

export default FileUpload;
