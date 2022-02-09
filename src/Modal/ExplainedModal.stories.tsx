import React from 'react';
import styled from 'styled-components';
import ExplainedModal from './ExplainedModal';
import chunsic from './chunsicpng.png';
import vcardModal from './vcardModal.svg';
export default {
  title: 'Components/Modal/ExplainedModal',
  component: ExplainedModal,
};

const callOutText =
  `추가적인 설명 텍스가 여기에 들어갑니다.
  추가적인 설명 텍스트가 여기에 들어갑니다. word-break: keep-all; 로 지정해주세요.`;

const discript =
  '설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기 설명 텍스트 여기';

const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;
export function Index() {
  return (
    <Wrapper>
      <ExplainedModal
        title="설명 제목"
        img={chunsic}
        discript={discript}
        onLeftClick={() => alert('네! 더볼래요')}
        onRightClick={() => alert('네! 이해했어요!')}
        callOutText={`주소록 연동 방법 👉\n구글 > 주소록 > 불러오기 > Vcard 파일 선택\n\n휴대폰 연락처 연동방법 👉\n연락처 > 관리/설정 > 가져오기 > VCF(Vcard) 파일 선택`}
        tagText="사용Tip"
        buttonText={['취소','내보내기']}
        onCancel={() => console.log("cancel!")}
      ></ExplainedModal>
      {/* <ExplainedModal
        title="설명 제목2"
        img={vcardModal}
        discript={discript}
        onLeftClick={() => alert('네! 더볼래요')}
        onRightClick={() => alert('네! 이해했어요!')}
        callOutText={callOutText}
        tagText="이용 Tip"
        tagColor={'#59C4DB'}
        buttonText={['취소', '확인']}
        onCancel={() => console.log("cancel!")}
      ></ExplainedModal> */}
    </Wrapper>
  );
}
