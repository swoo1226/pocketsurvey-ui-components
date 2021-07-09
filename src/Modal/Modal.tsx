import React from "react"
import styled, {css} from "styled-components"

import ProgressBar from "../ProgressBar/ProgressBar"

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
`

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
`

const ModalBlackCurtain = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`
const ModalContainer = styled.div<{
  hasBorderTop: boolean
  isProgressBar: boolean
  maxHeight? : string
}>`
  width: 460px;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
  border-top: ${props =>
    props.hasBorderTop && !props.isProgressBar
      ? "7px solid #FAC609"
      : undefined};
  position: relative;
  max-height: ${props => props.maxHeight ? props.maxHeight : undefined};
`

const ModalTitleContainer = styled.div`
  width: 100%;
  height: 30px;
`
const ModalTitle = styled.p`
  all: unset;
  font-size: 20px;
`
const ModalContentContainer = styled.div<{maxHeight?: string}>`
  height: 100%;
  overflow: ${props => props.maxHeight ? "scroll" : undefined};
  ${scrollBar}
`
const ModalBottomContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ModalBottomButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const ModalButton = styled.button<{
  backgroundColor: string
  hoverBackgroundColor: string
  color: string
}>`
  cursor: pointer;
  width: 86px;
  height: 40px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: 0;
  border-radius: 3px;
  margin: 0 2px;
  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`

type ModalType = {
  children: JSX.Element
  title: string
  buttonName: string
  onClick: () => void
  onCancel: () => void
  hasBorderTop: boolean
  className?: string
  isProgressBar?: boolean
  percent?: number
  barColor?: string
  buttonColor?: string
  maxHeight?: string
  useCancelButton? : boolean
}

function Modal({
  children,
  title,
  buttonName,
  onClick,
  onCancel,
  hasBorderTop,
  className,
  percent,
  barColor,
  isProgressBar,
  buttonColor,
  maxHeight,
  useCancelButton = true,
}: ModalType): JSX.Element {
  return (
    <ModalBackground>
      <ModalBlackCurtain onClick={() => onCancel()}></ModalBlackCurtain>
      <ModalContainer
        hasBorderTop={hasBorderTop}
        className={className}
        isProgressBar={isProgressBar!}
        maxHeight={maxHeight}
      >
        {isProgressBar && (
          <ProgressBar percent={percent!} barColor={barColor!} thickness={7} />
        )}
        <ModalTitleContainer>
          <ModalTitle>{title}</ModalTitle>
        </ModalTitleContainer>
        <ModalContentContainer maxHeight={maxHeight}>{children}</ModalContentContainer>
        <ModalBottomContainer>
          <ModalBottomButtonContainer>
            {
              useCancelButton && (
                <ModalButton
                  backgroundColor={"#FFFFFF"}
                  hoverBackgroundColor={"#F0F0F0"}
                  color={"#818282"}
                  onClick={() => onCancel()}
                >
                  취소
                </ModalButton>
              )
            }
            <ModalButton
              backgroundColor={buttonColor ? buttonColor : "#FAC62D"}
              hoverBackgroundColor={buttonColor ? buttonColor : "#FAC62D"}
              color={"#111111"}
              onClick={() => onClick()}
            >
              {buttonName}
            </ModalButton>
          </ModalBottomButtonContainer>
        </ModalBottomContainer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal
