import React from 'react';
import styled from 'styled-components';
import ExplainedModal from './ExplainedModal';
import chunsic from './chunsicpng.png';

export default {
  title: 'Components/Modal/ExplainedModal',
  component: ExplainedModal,
};

const callOutText =
  '추가적인 설명 텍스가 여기에 들어갑니다. 추가적인 설명 텍스트가 여기에 들어갑니다. word-break: keep-all; 로 지정해주세요.';

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
        isCallOut={true}
        onLeftClick={() => alert('네! 더볼래요')}
        onRightClick={() => alert('네! 이해했어요!')}
        callOutText={callOutText}
        tagColor={'#fac62d'}
        tagText="사용Tip"
      ></ExplainedModal>
      <ExplainedModal
        title="설명 제목2"
        img={chunsic}
        discript={discript}
        isCallOut={false}
        onLeftClick={() => alert('네! 더볼래요')}
        onRightClick={() => alert('네! 이해했어요!')}
        callOutText={callOutText}
        tagText="이용 Tip"
        tagColor={'#59C4DB'}
      ></ExplainedModal>
    </Wrapper>
  );
}
