import React from 'react';
import styled from 'styled-components';

interface IUploadWrapperProps {
  src: string | null;
  isDragActive: boolean;
  isMobileUploading: boolean;
  children: React.ReactNode;
}
const UploadWrapper = ({
  src,
  isDragActive,
  children,
  isMobileUploading,
}: IUploadWrapperProps): JSX.Element => {
  // 모바일 업로드 상태에서는 div로 감싸지 않는다.
  if (isMobileUploading) {
    return <>{children}</>;
  }

  return (
    <UploadWrapperContainer src={src} isDragActive={isDragActive}>
      {children}
    </UploadWrapperContainer>
  );
};

export default UploadWrapper;

const UploadWrapperContainer = styled.div<{
  src: string | null;
  isDragActive: boolean;
}>`
  border: ${(props) => (props.src ? '' : '2px dashed #dfdedd')};
  border: ${(props) => (props.isDragActive ? '2px dashed #FAC62D' : '')};
  border-radius: 5px;
  width: 655px;
  padding-bottom: 28px;

  @media only screen and (max-width: 743px) {
    width: 100%;
    border: 0px;
  }
`;
