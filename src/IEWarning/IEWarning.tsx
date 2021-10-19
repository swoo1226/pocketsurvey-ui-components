import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const IEWarningWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  background-color: #fef4ce;
  z-index: 8888;
  color: #2b2e33;
`;

const EmptyBox = styled.div`
  visibility: hidden;
`;

const IEWarningMessage = styled.div`
  font-size: 13.5px;
  display: flex;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo Regular';
`;

const Normal = styled.div`
  margin-left: 5px;
`;

const Emphasized = styled.div`
  font-family: 'Spoqa Han Sans Neo Medium';
  margin-left: 3px;
`;

const RedirectEdgeButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fac62d;
  border-radius: 3px;
  width: 96px;
  height: 34px;
  margin-left: 73px;
  box-sizing: border-box;
`;

const IEWarningCancelButton = styled.div`
  margin-right: 28px;
`;

const convertStringToLocation = (url: string): Location =>
  (url as unknown) as Location;

const redirectEdge = () =>
  setTimeout(() => {
    window.location = convertStringToLocation(
      'microsoft-edge:https://www.pocketsurvey.co.kr/login/',
    );
  }, 1);

export type IEWarningType = {
  showIEWarning?: boolean;
  setShowIEWarning: (value: boolean | string) => void;
};

function IEWarning({
  showIEWarning,
  setShowIEWarning,
}: IEWarningType): JSX.Element {
  if (!showIEWarning) return <></>;
  return (
    <IEWarningWrapper>
      <EmptyBox />
      <IEWarningMessage>
        <Icon icon="information" color="#fac62d" width={21} />
        <Normal>
          인터넷 익스플로어(internet explorer) 사용 시 일부 기능의 정상 작업이
          어렵습니다.
        </Normal>
        <Emphasized>
          안정적인 작업 환경을 위해 마이크로소프트 엣지(Microsoft Edge) 전환을
          권장합니다.
        </Emphasized>
        <RedirectEdgeButton onClick={() => redirectEdge()}>
          엣지로 이동
        </RedirectEdgeButton>
      </IEWarningMessage>
      <IEWarningCancelButton>
        {/* <Icon
          icon="exit"
          useCursor
          color="#2B2E33"
          onClick={() => setShowIEWarning('false')}
          width={21}
        /> */}
      </IEWarningCancelButton>
    </IEWarningWrapper>
  );
}

export default IEWarning;
