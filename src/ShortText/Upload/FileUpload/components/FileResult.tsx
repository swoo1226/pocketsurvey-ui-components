import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../Icon/Icon';

interface IFileResultProps {
  fileName: string;
  deleteUploadedFile: () => void;
}

const FileResult = ({
  fileName,
  deleteUploadedFile,
}: IFileResultProps): JSX.Element => (
  <UploadResult>
    <FileRow>
      <FileName>{fileName}</FileName>
      <Icon
        icon="exit"
        width={20}
        className="deleteFile"
        color="#818282"
        onClick={() => {
          deleteUploadedFile();
        }}
        useCursor
      />
    </FileRow>
  </UploadResult>
);

export default FileResult;

const UploadResult = styled.div`
  width: 100%;
`;

const FileRow = styled.div`
  cursor: pointer;
  height: 34px;
  display: flex;
  justify-content: space-between;
  padding: 0px 14px;
  color: #2b2e33;
  font-family: 'Noto Sans CJK KR Regular';
  font-size: 14px;
  line-height: 23.8px;
  border-radius: 3px;
`;

const FileName = styled.div`
  margin-top: 6px;
`;
