import React, { useState, useRef, useEffect } from 'react';
import Dropdown2 from './Dropdown2';
import CheckBox2 from '../CheckBox2/CheckBox2';
import styled, { css } from 'styled-components';
import { IDropdownContextProps, SizeType } from './types';
import useOutsideAlerter from '../hooks/useOutsideAlerter';

export default {
  title: 'Components/Dropdown2',
  component: null,
  argTypes: {
    styletype: {
      control: {
        type: 'select',
        options: [],
      },
    },
  },
};

export const DropdownPreview = () => {
  const selectionList = ['값이 없습니다.', '가', '나', '다', '라'];
  const [value, setValue] = useState<string>(null);
  const [checkboxState, setCheckboxState] = useState<string[]>([]);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    selection: string;
  } | null>(null);

  const dom = useRef<IDropdownContextProps | null>(null);
  const depth2Dom = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<SizeType>('medium');

  const hideDepth2Dropdown = () => {
    dom.current.setShowList(false);
    setPosition(null);
  };

  useOutsideAlerter(
    depth2Dom,
    () => {
      if (!!position) hideDepth2Dropdown();
    },
    [dom.current?.groupWrapperRef, dom.current?.baseRef],
  );

  return (
    <Root>
      <h1>기본 드롭다운</h1>
      <p>size: {size}</p>
      <button onClick={() => setSize('small')}>small</button>
      <button onClick={() => setSize('medium')}>medium</button>
      <button onClick={() => setSize('large')}>large</button>

      <Dropdown2 value={value} size={size}>
        <Dropdown2.Group>
          {selectionList.map((selection) => (
            <Dropdown2.Selection
              key={selection}
              onClick={() => {
                setValue(selection);
              }}
              isSelected={selection === value}
            >
              {selection}
            </Dropdown2.Selection>
          ))}
        </Dropdown2.Group>
      </Dropdown2>

      <h1>커스터마이징 예시1) 내부적으로 check가 있는 드롭다운</h1>
      <p>
        네모 박스 안에서는 클릭해도 꺼지지 않음. 외부를 클릭해야 꺼짐
        (Selection에 disableAutoClose적용)
      </p>
      <Dropdown2
        value={'얘는 체크박스 입니다.'}
        extraCSS={css`
          width: 200px;
        `}
      >
        <Dropdown2.Group>
          {selectionList.map((selection) => (
            <Dropdown2.Selection
              key={selection}
              onClick={() => {
                if (checkboxState.includes(selection))
                  setCheckboxState(
                    checkboxState.filter((item) => item !== selection),
                  );
                else setCheckboxState([...checkboxState, selection]);
              }}
              isSelected={checkboxState.includes(selection)}
              disableAutoClose
            >
              <HStack>
                <Check2 isSelected={checkboxState.includes(selection)} />
                <Text>{selection}</Text>
              </HStack>
            </Dropdown2.Selection>
          ))}
        </Dropdown2.Group>
      </Dropdown2>

      <h1>커스터마이징 예시2) 2중 드롭다운</h1>
      <p>position "up" 적용</p>

      {!!position && (
        <AbsoluteWrapper
          ref={depth2Dom}
          left={position.x}
          top={position.y}
          onClick={() => {
            setValue(position.selection);
            hideDepth2Dropdown();
          }}
        >
          <p>Depth2 영역 (테스트)</p>
          <p>여기를 누르거나 검은 네모 밖을 누르면 꺼집니다</p>
        </AbsoluteWrapper>
      )}
      <Dropdown2 value={value} position="up" ref={dom} disableAutoClose>
        <Dropdown2.Group>
          {selectionList.map((selection) => (
            <Dropdown2.Selection
              key={selection}
              onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const y = window.scrollY;

                setPosition({
                  x: rect.right,
                  y: rect.y + y,
                  selection,
                });
              }}
              isSelected={selection === value}
              disableAutoClose
            >
              {selection}
            </Dropdown2.Selection>
          ))}
        </Dropdown2.Group>
      </Dropdown2>
    </Root>
  );
};

const AbsoluteWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top - 38}px;
  left: ${(props) => props.left - 14}px;

  width: 200px;
  height: 200px;
  background-color: black;

  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
  padding: 10px;
  gap: 10px;
  p {
    margin: 0px;
  }
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;

const Check2 = styled(CheckBox2)`
  flex-shrink: 0;
`;

const Text = styled.p`
  margin: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Root = styled.div`
  h1:not(:first-child) {
    margin-top: 70px;
  }
  position: relative;
`;
