import React from 'react';
import styled from 'styled-components';

import Button from '../../Button/Button';

type UploadModalType = {
  title: string;
  onClick: (file: File) => void;
  onCancel: () => void;
  className?: string;
  children: JSX.Element;
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
  background-color: gray;
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
`;
function UploadModal({
  title,
  onClick,
  onCancel,
  className,
  children,
}: UploadModalType): JSX.Element {
  return (
    <ModalWrapper>
      <ModalInner>
        <Title>{title}</Title>
        <Caution>(10MB 이하의 jpg, jpeg, png 포맷만 업로드 가능합니다)</Caution>
        <ButtonWrapper>
          <Button
            mode="White"
            size="medium"
            shape="square"
            disabled={false}
            onClick={() => {}}
          >
            취소
          </Button>
          <Button
            mode="Yellow"
            size="medium"
            shape="square"
            disabled={false}
            onClick={() => {}}
          >
            업로드
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: 'none' }}
              onChange={(e) => console.log(e.target.files![0])}
            />
          </Button>
        </ButtonWrapper>
      </ModalInner>
    </ModalWrapper>
  );
}

export default UploadModal;
