import React from "react"
import styled from "styled-components"

const ModalContainer = styled.div<{hasBorderTop: boolean}>`
  width: 460px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
  border-top: ${props => props.hasBorderTop ? "7px solid #FAC609" : undefined}
`
const ModalTitleContainer = styled.div`
  width: 100%;
  height: 30px;
`
const ModalTitle = styled.p`
  all: unset;
  font-size: 20px;
`
const ModalContentContainer = styled.div`
  height: 100%;
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
const ModalButton = styled.button<{ backgroundColor: string }>`
  width: 86px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 3px;
  margin: 0 2px;
`

type ModalType = {
  children: JSX.Element;
  title: string;
  buttonName: string;
  onClick: () => void;
  hasBorderTop: boolean
};

function Modal({ children, title, buttonName, onClick, hasBorderTop }: ModalType): JSX.Element {
  console.log(hasBorderTop)
  return (
    <ModalContainer hasBorderTop={hasBorderTop}>
      <ModalTitleContainer>
        <ModalTitle>{title}</ModalTitle>
      </ModalTitleContainer>
      <ModalContentContainer>{children}</ModalContentContainer>
      <ModalBottomContainer>
        <ModalBottomButtonContainer>
          <ModalButton backgroundColor={"#FFFFFF"}>취소</ModalButton>
          <ModalButton backgroundColor={"#FAC62D"} onClick={() => onClick()}>
            {buttonName}
          </ModalButton>
        </ModalBottomButtonContainer>
      </ModalBottomContainer>
    </ModalContainer>
  )
}

export default Modal
