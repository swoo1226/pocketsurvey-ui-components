import React from 'react';
import styled from 'styled-components';
import Button, { ModeType } from '../../Button/Button';
import FileInput from '../../Input/FileInput';

type UploadModalType = {
  title: string;
  onCancel: () => void;
  className?: string;
  children: JSX.Element;
  extension: string;
  discript: string;
  onUploadFile: (file: File) => void;
  labelName: string;
  btnColor?: ModeType;
};
const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalInner = styled.div`
  padding: 28px;
  background-color: #ffffff;
  border-radius: 3px;
`;
const Title = styled.div``;
const Caution = styled.div`
  margin-top: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: end;
  .cancel-btn {
    margin-right: 10px;
  }
`;
function UploadModal({
  title,
  onCancel,
  className,
  children,
  extension,
  discript,
  onUploadFile,
  labelName,
  btnColor,
}: UploadModalType): JSX.Element {
  return (
    <ModalWrapper>
      <ModalInner>
        <Title>{title}</Title>
        <Caution>{discript}</Caution>
        <ButtonWrapper>
          <Button
            className="cancel-btn"
            mode="White"
            size="medium"
            shape="square"
            disabled={false}
            onClick={() => onCancel()}
          >
            취소
          </Button>
          <FileInput
            extension={extension}
            onUpload={(file: File) => onUploadFile(file)}
            labelName={labelName}
            color={btnColor}
          />
        </ButtonWrapper>
      </ModalInner>
    </ModalWrapper>
  );
}

export default UploadModal;
