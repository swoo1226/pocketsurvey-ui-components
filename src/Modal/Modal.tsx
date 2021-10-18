import React from 'react';
import styled, { css } from 'styled-components';

import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';

const scrollBar = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(195, 195, 195, 0.75);
    -webkit-box-shadow: 0 0 1px rgba(195, 195, 195, 0.75);
  }
`;

const ModalBackground = styled.div`
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
`;

const ModalBlackCurtain = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalContainer = styled.div<{
  hasBorderTop: boolean;
  isProgressBar: boolean;
}>`
  width: 460px;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
  border-top: ${(props) =>
    props.hasBorderTop && !props.isProgressBar
      ? '7px solid #FAC609'
      : undefined};
  position: relative;
  max-height: 90vh;
`;

const ModalTitleContainer = styled.div`
  width: 100%;
  height: 30px;
`;
const ModalTitle = styled.p`
  all: unset;
  font-size: 20px;
`;
const ModalContentContainer = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  ${scrollBar}
`;
const ModalBottomContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ModalBottomButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & div {
    margin: 0 2px;
  }
`;

type ModalType = {
  children: JSX.Element;
  title: string;
  buttonName: string;
  onClick: () => void;
  onCancel: () => void;
  hasBorderTop: boolean;
  className?: string;
  isProgressBar?: boolean;
  percent?: number;
  barColor?: string;
  buttonColor?: string;
  useCancelButton?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  cancelDisabled?: boolean;
  cancelButtonName?: string;
};

function Modal({
  children,
  title,
  buttonName,
  cancelButtonName = '취소',
  onClick,
  onCancel,
  hasBorderTop,
  className,
  percent,
  barColor,
  isProgressBar,
  buttonColor,
  useCancelButton = true,
  disabled = false,
  isLoading,
  cancelDisabled,
}: ModalType): JSX.Element {
  return (
    <ModalBackground>
      <ModalBlackCurtain onClick={() => onCancel()} />
      <ModalContainer
        hasBorderTop={hasBorderTop}
        className={className}
        isProgressBar={isProgressBar!}
      >
        {isProgressBar && (
          <ProgressBar percent={percent!} barColor={barColor!} thickness={7} />
        )}
        <ModalTitleContainer>
          <ModalTitle>{title}</ModalTitle>
        </ModalTitleContainer>
        <ModalContentContainer>{children}</ModalContentContainer>
        <ModalBottomContainer>
          <ModalBottomButtonContainer>
          {useCancelButton && (
              <Button
                size="medium"
                shape="square"
                mode="White"
                disabled={cancelDisabled === undefined ? false : cancelDisabled}
                onClick={() => onCancel()}
              >
                {cancelButtonName}
              </Button>
            )}
            <Button
              size="medium"
              shape="square"
              mode="Yellow"
              disabled={disabled}
              backgroundColor={disabled ? '#DFDEDD' : buttonColor}
              onClick={() => onClick()}
              isLoading={isLoading}
            >
              {buttonName}
            </Button>

          </ModalBottomButtonContainer>
        </ModalBottomContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
