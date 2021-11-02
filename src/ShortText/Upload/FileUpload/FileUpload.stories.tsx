import React from 'react';
import FileUpload from './FileUpload';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: FileUpload,
  title: 'Components/ShortText/FileUpload',
} as Meta;

export function Index() {
  return (
    <>
      <h2>파일 업로드 모바일</h2>
      <FileUpload
        loading={false}
        answeredText={''}
        onUpload={({ isValid, file }: { isValid: boolean; file: File }) =>
          console.log(isValid, file)
        }
        isMobile
      />

      <h2>파일 업로드</h2>
      <FileUpload
        loading={false}
        answeredText={''}
        onUpload={({ isValid, file }: { isValid: boolean; file: File }) =>
          console.log(isValid, file)
        }
      />

      <h2>파일 업로드 완료</h2>
      <FileUpload
        loading={false}
        answeredText={'Example.pdf'}
        onCancelClick={() => alert('Cancel Cliked')}
        onUpload={() => console.log('!')}
      />

      <h2>로딩 중</h2>
      <FileUpload
        loading={true}
        answeredText={null}
        onCancelClick={() => alert('Cancel Cliked')}
        onUpload={() => console.log('!')}
      />
    </>
  );
}
