import React, { useState } from 'react';
import UplaodModal from './UploadModal';
import { Meta } from '@storybook/react/types-6-0';
import UploadModal from './UploadModal';

export default {
  componnent: UplaodModal,
  title: 'Components/Modal/ImageUploadModal',
} as Meta;

export function Index() {
  const FExtension =
    '.pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.zip,.alz,.rar,.7z';
  return (
    <>
      <UploadModal
        title="업로드 문항"
        extension={FExtension}
        discript={'(10MB 이하의 파일들만 업로드가 가능합니다)'}
        onUploadFile={(file: File) => alert(file.name)}
        onCancel={() => console.log('취소')}
        labelName="업로드"
        btnColor="Yellow"
      >
        <div>TEST</div>
      </UploadModal>
    </>
  );
}
