/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { DropzoneInputProps } from 'react-dropzone';
import styled from 'styled-components';
import { ImgVideoType } from '../ImgVideoUpload';
import { getFileAcceptance, UploadFileType } from '../util';
import QRCode from './QRCode';

interface IUploaderMainProps {
  qrCode: ImgVideoType['qrCode'];
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  type: 'image' | 'video';
  uploadFile: UploadFileType;
  onUpload: ImgVideoType['onUpload'];
}

const UploaderMain = ({
  qrCode,
  getInputProps,
  type,
  uploadFile,
  onUpload,
}: IUploaderMainProps): JSX.Element => {
  const fileAcceptance = getFileAcceptance(type);
  return (
    <UploadText>
      <QRDiv>
        <QRBox>
          <QRCode qrCode={qrCode} />
        </QRBox>
      </QRDiv>
      <Sentence>
        <StressLetter>QR 코드를 스캔</StressLetter>
        하고 휴대폰에서 바로 올리기
        <br />
      </Sentence>
      <Sentence>
        또는
        <StressLetter> 여기에 파일을 끌어서 놓기 </StressLetter>
        또는
        <FileUploadLabel>
          {' '}
          브라우저에서{' '}
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
              uploadFile(file, type, onUpload);
            }}
          />
        </FileUploadLabel>
        올리기
      </Sentence>
      <LimitWarning>최대 10MB 가능</LimitWarning>
    </UploadText>
  );
};

export default UploaderMain;

const StressLetter = styled.span`
  font-family: 'Noto Sans CJK KR Medium';
  color: #2b2e33;
  font-weight: 600;
`;

const Sentence = styled.div`
  margin-top: 5px;
`;

const FileUploadLabel = styled.label`
  text-decoration: underline;
  color: #fac62d;
  cursor: pointer;
`;

const QRBox = styled.div`
  width: 126px;
  height: 126px;
  margin-top: 28px;
  display: inline-block;
  border: 1px dashed #dfdedd;
`;

const QRDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const UploadText = styled.div`
  text-align: center;
  font-size: 14px;
`;

const LimitWarning = styled.div`
  margin-top: 7px;
  color: #818282;
  font-size: 10px;
`;
