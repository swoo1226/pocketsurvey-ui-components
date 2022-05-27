import React, { useState } from 'react';
import {
  withKnobs,
  boolean,
  select,
  color,
  number,
} from '@storybook/addon-knobs';
import styled from 'styled-components';
import DropDown from './DropDown';
import { Meta } from '@storybook/react/types-6-0';
export default {
  component: DropDown,
  title: 'Components/DropDown',
  decorators: [withKnobs], // 애드온 적용
} as Meta;

const DropDownContainer = styled.div`
  margin-bottom: 20px;
`;

export function Index() {
  const [selected, setSelected] = useState(0);

  const disabled = boolean('disabled', false);

  const mainColor = color('bold color', '#FAC62D');
  const subColor = color('light color', '#fef4ce');

  return (
    <>
      <button onClick={() => setSelected(100)}>selected를 100으로 설정</button>
      <p>포켓서베이에서 사용하는 드롭다운 컴포넌트</p>
      <p>
        기본적인 드롭다운
        <p>(선택지마다 아이콘을 곁들인)</p>
      </p>
      <DropDownContainer>
        <DropDown
          list={[
            {
              selectionName: '객관식 (단일 선택)',
              icon: 'singleChoice',
            },
            { selectionName: '객관식 (복수 선택)', icon: 'singleChoice' },
            { selectionName: '객관식 (이미지 선택)', icon: 'singleChoice' },
            { selectionName: '주관식 (텍스트)', icon: 'singleChoice' },
            { selectionName: '주관식 (이미지)', icon: 'singleChoice' },
            { selectionName: '객관식 (영상)', icon: 'singleChoice' },
            {
              selectionName: '설명 추가',
              icon: 'singleChoice',
              hidden: true,
            },
            { selectionName: '순위 설정', icon: 'singleChoice' },
          ]}
          selected={selected}
          disable
          themeColor={{ mainColor, subColor }}
          onItemClick={(index: number) => setSelected(index)}
          iconColor="#FAC62D"
        />
      </DropDownContainer>
      <p>기본 선택값이 없을 경우 placeholder가 적용된 드롭다운</p>
      <DropDownContainer>
        <BranchSelector />
      </DropDownContainer>
      <p>
        구간을 나눌 수 있는 형태의 드롭다운
        <p>(target 숫자에 따라 구간 시작점이 변경됩니다.)</p>
      </p>
      <DropDownContainer>
        <HrSelector />
      </DropDownContainer>
    </>
  );
}

function BranchSelector() {
  const [selected, setSelected] = useState(null);

  const disabled = boolean('disabled', false);

  const mainColor = color('bold color', '#59C4DB');
  const subColor = color('light color', '#DEF3F8');

  return (
    <DropDown
      placeholder={'선택해주세요'}
      list={[
        { selectionName: '다음 문항' },
        { selectionName: 'Q1. 일이삼오육칠팔구십' },
        { selectionName: 'Q2. 일이삼오육칠팔구십' },
        { selectionName: 'Q3. 일이삼오육칠팔구십' },
        { selectionName: 'Q4. 일이삼오육칠팔구십' },
        { selectionName: 'Q5. 일이삼오육칠팔구십' },
        { selectionName: 'Q6. 일이삼오육칠팔구십' },
        { selectionName: 'Q7. 일이삼오육칠팔구십' },
        { selectionName: '종료메시지로' },
      ]}
      selected={selected}
      disable={disabled}
      themeColor={{ mainColor, subColor }}
      iconColor="#FAC62D"
      onItemClick={(index: number) => setSelected(index)}
    />
  );
}

const PSection = (title: string) => (
  <p
    key={title}
    style={{
      fontSize: '14px',
      fontWeight: 500,
      margin: '21px 14px',
    }}
  >
    {title}
  </p>
);

function HrSelector() {
  const [selected, setSelected] = useState(0);

  const disabled = boolean('disabled', false);

  const mainColor = color('bold color', '#59C4DB');
  const subColor = color('light color', '#DEF3F8');

  const target1 = number('target1', 0);
  const target2 = number('target2', 3);

  return (
    <DropDown
      placeholder={'선택해주세요'}
      list={[
        { selectionName: '다음 문항' },
        { selectionName: 'Q1. 일이삼오육칠팔구십' },
        { selectionName: 'Q2. 일이삼오육칠팔구십' },
        { selectionName: 'Q3. 일이삼오육칠팔구십' },
        { selectionName: 'Q4. 일이삼오육칠팔구십' },
        { selectionName: 'Q5. 일이삼오육칠팔구십' },
        { selectionName: 'Q6. 일이삼오육칠팔구십' },
        { selectionName: 'Q7. 일이삼오육칠팔구십' },
        { selectionName: '종료메시지로' },
      ]}
      hrs={[
        {
          targetIndex: target1,
          title: '첫번째 구간 시작',
          section: PSection('첫번째 구간 시작'),
        },
        {
          targetIndex: target2,
          title: '두번째 구간 시작',
          section: PSection('두번째 구간 시작'),
        },
      ]}
      id="hrDropDown"
      selected={selected}
      disable={disabled}
      themeColor={{ mainColor, subColor }}
      iconColor="#FAC62D"
      onItemClick={(index: number) => setSelected(index)}
    />
  );
}
