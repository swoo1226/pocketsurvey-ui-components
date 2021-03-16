import { List } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Icon, { IconType } from "../Icon/Icon";

const DropDownContainer = styled.div`
  width: 170px;
  font-size: 12px;
`;
const DropDownBox = styled.div<{
  disable: boolean;
  themeColor: string;
}>`
  border: 1px solid ${(props) => (props.disable ? "#DFDEDD" : props.themeColor)};
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${(props) => (props.disable ? "#F0F0F0" : "white")};
  cursor: ${(props) => (props.disable ? "no-drop" : "pointer")};
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
    props.selected == props.index ? "#F0F0F0" : "white"};
  &:hover {
    background-color: ${(props) =>
      props.selected == props.index ? "#F0F0F0" : props.themeColor};
  }
`;
const DropDownItemText = styled.p`
  margin-left: 6px;
`;

export type DropDownType = {
  list: {
    selectionName: string;
    icon?: IconType;
  }[];
  iconColor?: string;
  selected: number | null;
  disable: boolean;
  themeColor: {
    mainColor: string;
    subColor: string;
  };
  onItemClick: (index: number) => void;
  className?: string;
  placeholder?: string;
};

function DropDown({
  list,
  selected,
  disable,
  themeColor,
  onItemClick,
  className,
  iconColor,
  placeholder,
}: DropDownType): JSX.Element {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const selectionListRef = useRef<HTMLDivElement>(null);
  console.log(list);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      console.log("handleclickOutside");
      if (
        selectionListRef.current &&
        !selectionListRef.current.contains(event.target)
      ) {
        setIsShowList(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectionListRef]);

  return (
    <DropDownContainer ref={selectionListRef} className={className}>
      <DropDownBox
        onClick={() => {
          setIsShowList(!isShowList);
        }}
        disable={disable}
        themeColor={themeColor.mainColor}
        data-testid="dropdownbox-testid"
      >
        {selected !== null ? (
          <React.Fragment>
            {list[selected].icon && (
              <Icon color={iconColor!} icon={list[selected].icon!} width={18} />
            )}
            <DropDownItemText>{list[selected].selectionName}</DropDownItemText>
          </React.Fragment>
        ) : (
          <DropDownItemText>선택해주세요</DropDownItemText>
        )}
      </DropDownBox>

      <DropDownList
        isShowList={isShowList}
        style={!isShowList ? { display: "none" } : { opacity: "1" }}
        data-testid="dropdownlist-testid"
      >
        {list.map((item, index) => (
          <DropDownItem
            key={index}
            index={index}
            selected={0}
            themeColor={themeColor.subColor}
            onClick={() => {
              onItemClick(index);
              setIsShowList(false);
            }}
          >
            {item.icon && (
              <Icon color={iconColor!} icon={item.icon} width={18} />
            )}
            <DropDownItemText>{item.selectionName}</DropDownItemText>
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
}

export default DropDown;
