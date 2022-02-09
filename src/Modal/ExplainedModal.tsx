import React from 'react';
import * as S from './styles';
import { Button2 } from '..';
import styled from 'styled-components';

type ExplainedModalPropsType = {
  img: string;
  discript: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  callOutText?: string;
  title: string;
  tagText: string;
  buttonText: string[];
  onCancel: () => void;
};

function ExplainedModal({
  img,
  discript,
  onLeftClick,
  onRightClick,
  callOutText,
  title,
  tagText,
  buttonText,
  onCancel,
}: ExplainedModalPropsType) {
  return (
    <ModalBackground>
      <ModalBlackCurtain onClick={() => onCancel()} />
      <ModalContainer>
        <ImageContainer>
          <div className="ImageContainer">
            <img src={img} alt="containerImage" />
          </div>
        </ImageContainer>
        <DiscriptContainer>
          <div className="DiscriptContainer">
            <ExplainTag>
              <ExplainTagName>{tagText}</ExplainTagName>
            </ExplainTag>
            <Title>{title}</Title>
            <Description>{discript}</Description>
            {callOutText && <CallOut>{callOutText}</CallOut>}
          </div>
        </DiscriptContainer>
        <ButtonsWrapper>
          <BtnContainer>
            <Button2
              preset="tertiary-text"
              onClick={() => onLeftClick()}
            >
              {buttonText[0]}
            </Button2>
            <Button2 preset="primary-main" onClick={() => onRightClick()}>
              {buttonText[1]}
            </Button2>
          </BtnContainer>
        </ButtonsWrapper>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalContainer = styled.div`
  width: 460px;
  .tag {
    color: white;
    font-family: Spoqa Han Sans Neo;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  padding: 42px;
  background-color: #fffae6;
  text-align: center;
  border-radius: 4px 4px 0px 0px;
`;

const DiscriptContainer = styled.div`
  background-color: #ffffff;

  padding: 24px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-style: normal;
  text-align: left;
  letter-spacing: -0.5px;
`;

const BtnContainer = styled.div`
  display: flex;
  padding: 16px 24px 16px 0;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid #f0f0f0;
  .rightButton {
    margin-left: 7px;
  }
`;
const CallOut = styled.div`
  border-radius: 4px;
  font-weight: normal;
  color: #2b2e33;

  padding: 21px 55px;
  background-color: #f0f0f0;
  margin-top: 14px;
  white-space: pre-wrap;
  word-break: keep-all;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: -0.5px;
`;

const Title = styled.div`
  margin-top: 16px;
  font-size: 21px;
  font-weight: 500;
  line-height: 32px;
`;

const Description = styled.div`
  margin-top: 7px;
  font-weight: 400;
  line-height: 24px;
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
  background: rgba(0, 0, 0, 0.7);
`;

const ExplainTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f8fc;
  border: 1px solid #dfe9f6;
  box-sizing: border-box;
  border-radius: 3px;
  width: 58px;
  height: 24px;
  font-size: 12px;
  padding: 6px 8px;
`;

const ExplainTagName = styled.p`
  color: #57adf2;
`;

const ButtonsWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 0px 0px 4px 4px;
`;

export default ExplainedModal;
