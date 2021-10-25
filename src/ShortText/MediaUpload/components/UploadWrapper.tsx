import React from 'react';
import styled from 'styled-components';
import { ImgVideoType } from '../ImgVideoUpload';

interface IUploadWrapperProps {
  mediaSrc: ImgVideoType['mediaSrc'];
  isDragActive: boolean;
  children: React.ReactNode;
}
const UploadWrapper = ({
  mediaSrc,
  isDragActive,
  children,
}: IUploadWrapperProps): JSX.Element => (
  <UploadWrapperContainer mediaSrc={mediaSrc} isDragActive={isDragActive}>
    {children}
  </UploadWrapperContainer>
);

export default UploadWrapper;

const UploadWrapperContainer = styled.div<{
  mediaSrc: string | null;
  isDragActive: boolean;
}>`
  border: ${(props) => (props.mediaSrc ? '' : '2px dashed #dfdedd')};
  border: ${(props) => (props.isDragActive ? '2px dashed #FAC62D' : '')};
  border-radius: 5px;
  width: 655px;
  padding-bottom: 28px;

  @media only screen and (max-width: 743px) {
    width: 100%;
    border: 0px;
  }
`;
