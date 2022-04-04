import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../Icon/Icon';

interface IStepperProps {
  stepperList: string[];
  currentIndex: number;
}

const Stepper = ({ stepperList, currentIndex }: IStepperProps) => {
  return (
    <Container>
      <FlexWrapper>
        {stepperList.map((item, index) => {
          const isPrevious = index < currentIndex;
          const isVisited = index <= currentIndex;
          return (
            <StepperItem key={index}>
              <ItemNumber isVisited={isVisited}>
                {isPrevious ? <Icon icon="check2" width={12} /> : index + 1}
                <ItemName isVisited={isVisited}>{item}</ItemName>
              </ItemNumber>
              {index !== stepperList.length - 1 && (
                <StepperLink isPrevious={isPrevious} />
              )}
            </StepperItem>
          );
        })}
      </FlexWrapper>
    </Container>
  );
};

export default Stepper;

const Container = styled.div`
  display: inline-block;
  letter-spacing: -0.5px;
  padding: 0 10px 16px;
  cursor: default;

  * {
    box-sizing: border-box;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const StepperItem = styled.div`
  display: flex;
  align-items: center;
`;

const ItemNumber = styled.div<{
  isVisited: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  ${({ isVisited }) =>
    isVisited
      ? css`
          background-color: #fac62d;
          border: 1px solid #fac62d;
          color: #ffffff;
        `
      : css`
          background-color: #f0f0f0;
          border: 1px solid #dfdedd;
          color: #818282;
        `}
`;

const ItemName = styled.div<{
  isVisited: boolean;
}>`
  position: absolute;
  top: 30px;
  font-size: 10px;
  font-family: 'Spoqa Han Sans Neo Medium';
  white-space: nowrap;
  line-height: 100%;
  ${({ isVisited }) =>
    isVisited
      ? css`
          color: #818282;
        `
      : css`
          color: #c9c8c7;
        `}
`;

const StepperLink = styled.div<{ isPrevious: boolean }>`
  width: 35px;
  height: 1px;
  ${({ isPrevious }) =>
    isPrevious
      ? css`
          background-color: #fac62d;
        `
      : css`
          background-color: #dfdedd;
        `}
`;
