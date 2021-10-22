import React from 'react';
import styled from 'styled-components';

const FileInputWrapper = styled.div``;
const LabelButton = styled.label`
  width: fit-content;
  padding: 14px 28px 14px 28px;
  background-color: #fac62d;
  color: #2b2e33;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: #f0bd05;
  }
`;
type FileInputType = {
  extension: string;
  onUpload: (file: File) => void;
};

const FileInput = ({ extension, onUpload }: FileInputType) => (
  <FileInputWrapper>
    <LabelButton htmlFor="input-file">
      업로드
      <input
        id="input-file"
        className="upload-input"
        type="file"
        accept={extension}
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files) {
            onUpload(e.target.files[0]);
          } else {
            console.log('파일이 없습니다');
          }
        }}
      />
    </LabelButton>
  </FileInputWrapper>
);

export default FileInput;
