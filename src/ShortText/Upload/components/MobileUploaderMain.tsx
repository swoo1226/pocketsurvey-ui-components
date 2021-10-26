import React, { useRef } from 'react';
import styled from 'styled-components';
import { OnUploadType } from '../types';
import { getFileAcceptance, uploadFile, UploadType } from '../util';

interface IMobileUploadButtonProps {
  type: UploadType;
  onUpload: OnUploadType;
}

const MobileUploaderMain = ({
  type,
  onUpload,
}: IMobileUploadButtonProps): JSX.Element => {
  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <MobileUploadButtonWrapper
        onClick={() => {
          InputRef.current?.click();
        }}
      >
        파일을 선택하세요
      </MobileUploadButtonWrapper>
      <HiddenInput
        ref={InputRef}
        type="file"
        accept={getFileAcceptance(type)}
        onChange={(e) => {
          const { files } = e.target;
          if (!files) return;

          const file = files[0];
          uploadFile(file, type, onUpload);
        }}
      />
    </>
  );
};

export default MobileUploaderMain;

const MobileUploadButtonWrapper = styled.div`
  font-size: 15px;
  background-color: rgb(89, 196, 219);
  white-space: nowrap;
  padding: 14px;
  border-radius: 3px;
  cursor: pointer;
  display: table;
  text-align: center;
`;

const HiddenInput = styled.input`
  display: none;
`;
