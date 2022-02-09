import styled from 'styled-components';

export const ModalContainer = styled.div`
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

export const ImageContainer = styled.div`
  padding: 42px;
  background-color: #fffae6;
  text-align: center;
  border-radius: 4px 4px 0px 0px;
`;

export const DiscriptContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0px 0px 4px 4px;
  padding: 24px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-style: normal;
  text-align: left;
  letter-spacing: -0.5px;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 24px;
  padding-top: 16px;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid #f0f0f0;
  .rightButton {
    margin-left: 7px;
  }
`;
export const CallOut = styled.div`
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

export const Title = styled.div`
  margin-top: 16px;
  font-size: 21px;
  font-weight: 500;
  line-height: 32px;
`;

export const Description = styled.div`
  margin-top: 7px;
  font-weight: 400;
  line-height: 24px;
`;

export const ModalBackground = styled.div`
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

export const ModalBlackCurtain = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10000;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

export const ExplainTag = styled.div`
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

export const ExplainTagName = styled.p`
  color: #57adf2;
`;

export const ButtonsWrapper = styled.div``