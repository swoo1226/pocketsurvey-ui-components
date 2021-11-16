import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';

type ExplainedModalPropsType = {
  img: string;
  discript: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  callOutText?: string;
  title: string;
  tagColor: string;
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
  tagColor,
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
            <Tag
              className="tag"
              mode="pastellBlue"
              backgroundColor={tagColor}
              disabled
            >
              {tagText}
            </Tag>
            <Title>{title}</Title>
            <Description>{discript}</Description>
            {callOutText && <CallOut>{callOutText}</CallOut>}
            <BtnContainer>
              <Button
                className="leftButton"
                mode="White"
                size="medium"
                shape="square"
                onClick={() => onLeftClick()}
              >
                {buttonText[0]}
              </Button>
              <Button
                className="rightButton"
                mode="Yellow"
                size="medium"
                shape="square"
                onClick={() => onRightClick()}
              >
                {buttonText[1]}
              </Button>
            </BtnContainer>
          </div>
        </DiscriptContainer>
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
  border-radius: 0px 0px 4px 4px;
  padding: 28px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-style: normal;
  text-align: left;
  letter-spacing: -0.5px;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: flex-end;
  .rightButton {
    margin-left: 7px;
  }
`;
const CallOut = styled.div`
  border-radius: 4px;
  font-weight: 400;
  line-height: 24px;
  padding: 21px;
  background-color: #f0f0f0;
  margin-top: 14px;
  word-break: keep-all;
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

export default ExplainedModal;
