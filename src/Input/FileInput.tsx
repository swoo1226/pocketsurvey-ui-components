import React from 'react';
import styled from 'styled-components';
import { getBackgroundColor, ModeType } from '../Button/Button';

const FileInputWrapper = styled.div``;
const LabelButton = styled.label<{ color: ModeType | undefined }>`
  width: fit-content;
  padding: 14px 28px 14px 28px;
  background-color: ${(props) =>
    props.color
      ? getBackgroundColor(props.color).innerBackgroundColor
      : '#FAC62D'};
  color: #2b2e33;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: ${(props) =>
      props.color
        ? getBackgroundColor(props.color).innerHoverBackgroundColor
        : '#F0BD05'};
  }
`;
type FileInputType = {
  extension: string;
  onUpload: (file: File) => void;
  labelName: string;
  color?: ModeType;
};

const FileInput = ({
  extension,
  onUpload,
  labelName,
  color,
}: FileInputType) => (
  <FileInputWrapper>
    <LabelButton htmlFor="input-file" color={color}>
      {labelName}
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
