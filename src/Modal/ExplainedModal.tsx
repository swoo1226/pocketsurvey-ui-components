import { Font } from 'dist/types';
import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';

type ExplainedModalPropsType = {
  img: string;
  discript: string;
  isCallOut: boolean;
  onMoreClick: () => void;
  onFinishClick: () => void;
  callOutText?: string;
};

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

  .title {
    margin-top: 16px;
    font-size: 21px;
    font-weight: 500;
    line-height: 32px;
  }
  .callOut {
    border-radius: 4px;
    font-weight: 400;
    line-height: 24px;
    padding: 21px;
    background-color: #f0f0f0;
    margin-top: 14px;
  }
  .discription {
    margin-top: 7px;
    font-weight: 400;
    line-height: 24px;
  }
  .btnContainer {
    display: flex;
    margin-top: 28px;
    justify-content: flex-end;
    .rightButton {
      margin-left: 7px;
    }
  }
`;

function ExplainedModal({
  img,
  discript,
  isCallOut,
  onMoreClick,
  onFinishClick,
  callOutText,
}: ExplainedModalPropsType) {
  return (
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
            backgroundColor="#59C4DB"
            disabled
          >
            사용 TIP
          </Tag>
          <div className="title">설명 제목 </div>
          <div className="discription">{discript}</div>
          {isCallOut && <div className="callOut">{callOutText}</div>}
          <div className="btnContainer">
            <Button
              className="leftButton"
              mode="White"
              size="medium"
              shape="square"
              onClick={() => onMoreClick()}
            >
              더 알아볼래요!
            </Button>
            <Button
              className="rightButton"
              mode="Yellow"
              size="medium"
              shape="square"
              onClick={() => onFinishClick()}
            >
              네! 이해했어요!
            </Button>
          </div>
        </div>
      </DiscriptContainer>
    </ModalContainer>
  );
}

export default ExplainedModal;
