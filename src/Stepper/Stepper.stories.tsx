import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Stepper from './Stepper';

const MOCK_UP_STEPPER_LIST = [
  '목록 생성',
  '초대장 작성',
  '수집 설정',
  '발송 설정',
  '발송 결과',
];

export default {
  title: 'Components/Stepper',
  component: Stepper,
};

export const StepperPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncreaseButtonClick = () => {
    if (currentIndex === MOCK_UP_STEPPER_LIST.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };
  const handleDecreaseButtonClick = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      <Buttons>
        <div>current index: {currentIndex}</div>
        <button onClick={handleDecreaseButtonClick}>decrement</button>
        <button onClick={handleIncreaseButtonClick}>increment</button>
      </Buttons>
      <Stepper stepperList={MOCK_UP_STEPPER_LIST} currentIndex={currentIndex} />
    </>
  );
};

const Buttons = styled.div`
  margin-bottom: 50px;
`;
