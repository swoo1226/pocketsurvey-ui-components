import React from 'react';
import styled from 'styled-components';
import { ImgVideoType } from '../MediaUpload/ImgVideoUpload';

interface IUploadWrapperProps {
  src: string | null;
  isDragActive: boolean;
  children: React.ReactNode;
}
const UploadWrapper = ({
  src,
  isDragActive,
  children,
}: IUploadWrapperProps): JSX.Element => (
  <UploadWrapperContainer src={src} isDragActive={isDragActive}>
    {children}
  </UploadWrapperContainer>
);

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
