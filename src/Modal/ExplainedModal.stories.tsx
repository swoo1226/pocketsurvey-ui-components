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
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;
export function Index() {
  return (
    <Wrapper>
    <ExplainedModal
      img={chunsic}
      discript={discript}
      isCallOut={true}
      onMoreClick={() => console.log('네! 더볼래요')}
      onFinishClick={() => console.log('네! 이해했어요!')}
      callOutText={callOutText}
    ></ExplainedModal>
     <ExplainedModal
      img={chunsic}
      discript={discript}
      isCallOut={false}
      onMoreClick={() => console.log('네! 더볼래요')}
      onFinishClick={() => console.log('네! 이해했어요!')}
      callOutText={callOutText}
    ></ExplainedModal>
    </Wrapper>
  );
}
