import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import singleChoice from './singleChoice.svg';

import Icon from '../Icon/Icon';

const QuestionTypeSelectorContainer = styled.div`
  width: 170px;
  font-size: 12px;
`;
const QuestionTypeSelectorBox = styled.div<{
  disable: boolean;
  themeColor: string;
}>`
  border: 1px solid ${(props) => (props.disable ? '#DFDEDD' : props.themeColor)};
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${(props) => (props.disable ? '#F0F0F0' : 'white')};
  cursor: ${(props) => (props.disable ? 'no-drop' : 'pointer')};
`;
const QuestionTypeSelectorList = styled.div<{
  isShowList: boolean;
}>`
  width: 100%;
  box-shadow: 0px 3px 6px #d2cbc0;
  border-radius: 3px;
  padding: 8px 0;
`;
const QuestionTypeSelectorItem = styled.div<{
  index: number;
  selected: number;
  themeColor: string;
}>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${(props) =>
    props.selected == props.index ? '#F0F0F0' : 'white'};
  &:hover {
    background-color: ${(props) =>
      props.selected == props.index ? '#F0F0F0' : `${props.themeColor}`};
  }
`;
const QuestionTypeSelectorItemText = styled.p`
  margin-left: 6px;
`;

function useOutsideAlerter(ref: any, func: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export type QuestionTypeSelectorType = {
  list: {
    selectionName: string;
    icon?: string;
  }[];
  selected: number;
  disable: boolean;
  themeColor: {
    mainColor: string;
    subColor: string;
  };
  onItemClick: (index: number) => void;
};

export const QuestionTypeSelector = ({
  list,
  selected,
  disable,
  themeColor,
  onItemClick,
}: QuestionTypeSelectorType) => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const selectionListRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(selectionListRef, () => setIsShowList(false));

  return (
    <QuestionTypeSelectorContainer ref={selectionListRef}>
      <QuestionTypeSelectorBox
        onClick={() => setIsShowList(!isShowList)}
        disable={disable}
        themeColor={themeColor.mainColor}
      >
        {list[selected].icon && <Icon icon="singleChoice" width={18} />}
        <QuestionTypeSelectorItemText>
          {list[selected].selectionName}
        </QuestionTypeSelectorItemText>
      </QuestionTypeSelectorBox>

      <QuestionTypeSelectorList
        isShowList={isShowList}
        style={!isShowList ? { display: 'none' } : { opacity: '1' }}
      >
        {list.map((item, index) => (
          <QuestionTypeSelectorItem
            key={index}
            index={index}
            selected={selected}
            themeColor={themeColor.subColor}
            onClick={() => {
              onItemClick(index);
              setIsShowList(false);
            }}
          >
            {item.icon && <Icon icon="singleChoice" width={18} />}
            <QuestionTypeSelectorItemText>
              {item.selectionName}
            </QuestionTypeSelectorItemText>
          </QuestionTypeSelectorItem>
        ))}
      </QuestionTypeSelectorList>
    </QuestionTypeSelectorContainer>
  );
};
