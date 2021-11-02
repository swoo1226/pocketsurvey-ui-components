import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../Icon/Icon';
import { GetInputPropsType, OnUploadType } from '../../types';
import { getFileAcceptance, uploadFile } from '../../util';

interface IFileUploadMainProps {
  getInputProps: GetInputPropsType;
  onUpload: OnUploadType;
}

const FileUploadMain = ({
  getInputProps,
  onUpload,
}: IFileUploadMainProps): JSX.Element => {
  const fileAcceptance = getFileAcceptance('file');

  return (
    <UploadText>
      <FileUploadIcon>
        <Icon icon="fileUpload" width={97.42} color="#FAC62D" />
      </FileUploadIcon>
      <StressLetter> 여기에 파일을 끌어서 놓기</StressLetter> 또는
      <FileUploadLabel>
        <span> 브라우저에서</span>
        <input
          {...getInputProps()}
          className="fileBtn"
          type="file"
          accept={fileAcceptance}
          style={{ display: 'none' }}
          onChange={(e) => {
            const { files } = e.target;
            if (!files) return;
            const file = files[0];
            uploadFile(file, 'file', onUpload);
          }}
        />
      </FileUploadLabel>
      <span> 올리기</span>
      <div className="file-size-text">최대 50MB 가능</div>
    </UploadText>
  );
};

export default FileUploadMain;

const UploadText = styled.div`
  margin-top: 7px;
  text-align: center;
  font-size: 14px;
  font-family: 'Noto Sans CJK KR Regular';
  color: #818282;
  line-height: 23.8px;
`;

const StressLetter = styled.span`
  font-family: 'Noto Sans CJK KR Medium';
  color: #2b2e33;
`;

const FileUploadLabel = styled.label`
  text-decoration: underline;
  color: #fac62d;
  cursor: pointer;
`;

const FileUploadIcon = styled.div`
  text-align: center;
  padding-top: 28px;
`;
