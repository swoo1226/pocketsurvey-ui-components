import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

const DropDownContainer = styled.div`
  width: 170px;
  font-size: 12px;
`;
const DropDownBox = styled.div<{
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
const DropDownList = styled.div<{
  isShowList: boolean;
}>`
  width: 100%;
  box-shadow: 0px 3px 6px #d2cbc0;
  border-radius: 3px;
  padding: 8px 0;
`;
const DropDownItem = styled.div<{
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
const DropDownItemText = styled.p`
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

export type DropDownType = {
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

const DropDown = ({
  list,
  selected,
  disable,
  themeColor,
  onItemClick,
}: DropDownType) => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const selectionListRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(selectionListRef, () => setIsShowList(false));

  return (
    <DropDownContainer ref={selectionListRef}>
      <DropDownBox
        onClick={() => setIsShowList(!isShowList)}
        disable={disable}
        themeColor={themeColor.mainColor}
      >
        {list[selected].icon && <Icon icon="singleChoice" width={18} />}
        <DropDownItemText>{list[selected].selectionName}</DropDownItemText>
      </DropDownBox>

      <DropDownList
        isShowList={isShowList}
        style={!isShowList ? { display: 'none' } : { opacity: '1' }}
      >
        {list.map((item, index) => (
          <DropDownItem
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
            <DropDownItemText>{item.selectionName}</DropDownItemText>
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
};

export default DropDown;
