import React, { useState } from 'react';
import FileInput from './FileInput';
import { Meta } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  component: FileInput,
  title: 'Components/Input/FileUploadInput',
  decorators: [withKnobs],
} as Meta;

const FileName = styled.div`
  margin-top: 30px;
`;
export function Index(): JSX.Element {
  const [fileName, setFileName] = useState<string>('파일이 아직 없음');
  const extension =
    '.pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.zip,.alz,.rar,.7z';
  return (
    <>
      <h2>파일 업로드 버튼 </h2>
      <FileInput
        extension={extension}
        onUpload={(file: File) => setFileName(file.name)}
      ></FileInput>
      <FileName>{fileName}</FileName>
    </>
  );
}
