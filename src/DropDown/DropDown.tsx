import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Icon, { IconType } from '../Icon/Icon';

const PNG = styled.img<{ pngImageCropCircle?: boolean }>`
  width: 23px !important;
  height: 21px !important;
  margin-bottom: 0px !important;
  ${(props) =>
    props.pngImageCropCircle && 'object-fit:cover; border-radius:50%;'}
`;

const DropDownContainer = styled.div<{
  width: number;
  containerHeight?: string;
}>`
  width: ${(props) => props.width}px;
  font-size: 12px;
  text-align: left;
  ${(props) => props.containerHeight && `height: ${props.containerHeight};`}
`;

const DropDownBoxContainer = styled.div<{
  disable: boolean;
  themeColor: string;
  zIndex: number;
  height: number;
}>`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.disable ? '#DFDEDD' : props.themeColor)};
  background-color: ${(props) => (props.disable ? '#F0F0F0' : 'white')};
  cursor: ${(props) => (props.disable ? 'no-drop' : 'pointer')};
  z-index: ${(props) => props.zIndex - 1};
`;
const DropDownBox = styled.div<{
  disable: boolean;
  themeColor: string;
  height: number;
}>`
  width: 80%;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.disable ? '#818282' : '#111111')};
  background-color: ${(props) => (props.disable ? '#F0F0F0' : undefined)};
  cursor: ${(props) => (props.disable ? 'no-drop' : 'pointer')};
`;
const DropDownList = styled.div<{
  disable: boolean;
  isShowList: boolean;
  listLength: number;
  width: number;
  zIndex: number;
  height: number;
  listMaxHeight?: number;
  textColor?: string;
  fontSize?: number;
}>`
  width: ${(props) => props.width}px;
  z-index: ${(props) => props.zIndex};
  height: ${(props) => props.listLength * props.height}px;
  position: absolute;
  box-shadow: 0px 3px 6px #d2cbc0;
  color: ${(props) =>
    props.disable ? props.textColor ?? '#818282' : '#111111'};
  border-radius: 3px;
  padding: 8px 0;
  max-height: ${(props) => `${props.listMaxHeight ?? 200}px`};
  overflow-y: auto;
  background: #ffffff;
  margin: 7px 0px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
`;
const DropDownItem = styled.div<{
  index: number;
  selected: number;
  themeColor: string;
  hidden?: boolean;
  height: number;
}>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  height: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.selected === props.index ? '#F0F0F0' : 'white'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.selected === props.index ? '#F0F0F0' : props.themeColor};
  }
`;
const DropDownItemText = styled.p<{ fontSize?: number }>`
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-left: 6px;
  text-overflow: ellipsis;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
`;

export type DropDownType = {
  list: {
    selectionName: string;
    isHr?: boolean;
    icon?: IconType;
    rotate?: number;
    hidden?: boolean;
    png?: any;
  }[];
  iconColor?: string;
  selected: number | null;
  disable: boolean;
  themeColor: {
    mainColor: string;
    subColor: string;
  };
  textColor?: string;
  onItemClick: (index: number) => void;
  className?: string;
  placeholder?: string;
  height?: number;
  width?: number;
  zIndex?: number;
  listMaxHeight?: number;
  fontSize?: number;
  pngImageCropCircle?: boolean;
  containerHeight?: string;
};

function DropDown({
  list,
  selected,
  disable,
  themeColor,
  textColor,
  onItemClick,
  className,
  iconColor,
  placeholder,
  height = 34,
  width = 200,
  zIndex = 20,
  listMaxHeight,
  fontSize,
  pngImageCropCircle,
  containerHeight,
}: DropDownType): JSX.Element {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const selectionListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        selectionListRef.current &&
        !selectionListRef.current.contains(event.target)
      ) {
        setIsShowList(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectionListRef]);

  return (
    <DropDownContainer
      ref={selectionListRef}
      className={className}
      width={width}
      containerHeight={containerHeight}
    >
      <DropDownBoxContainer
        onClick={() => {
          if (!disable) {
            setIsShowList(!isShowList);
          }
        }}
        disable={disable}
        themeColor={themeColor.mainColor}
        zIndex={zIndex}
        height={height}
      >
        <DropDownBox
          onClick={() => {
            if (!disable) {
              setIsShowList(!isShowList);
            }
          }}
          disable={disable}
          themeColor={themeColor.mainColor}
          data-testid="dropdownbox-testid"
          height={height}
        >
          {selected !== null ? (
            <>
              {list[selected].icon && (
                <Icon
                  color={disable ? '#818282' : iconColor!}
                  icon={list[selected].icon!}
                  width={18}
                  rotate={list[selected].rotate ?? 0}
                />
              )}
              {list[selected].png && (
                <PNG
                  src={list[selected].png}
                  pngImageCropCircle={pngImageCropCircle}
                />
              )}
              <DropDownItemText fontSize={fontSize}>
                {list[selected].selectionName}
              </DropDownItemText>
            </>
          ) : (
            <DropDownItemText fontSize={fontSize}>
              {placeholder}
            </DropDownItemText>
          )}
        </DropDownBox>
        <Icon
          color={disable ? '#818282' : iconColor!}
          icon="arrow"
          useCursor={!disable}
          width={18}
          rotate={!isShowList ? 90 : 270}
        />
      </DropDownBoxContainer>

      <DropDownList
        isShowList={isShowList}
        disable={disable}
        style={!isShowList ? { display: 'none' } : { opacity: '1' }}
        data-testid="dropdownlist-testid"
        listLength={list.length}
        width={width}
        zIndex={zIndex}
        height={height}
        listMaxHeight={listMaxHeight}
        textColor={textColor}
        fontSize={fontSize}
      >
        {list.map((item, index) => (
          <>
            {item.isHr ? (
              <>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    margin: '21px 14px',
                  }}
                >
                  {item.selectionName}
                </p>
              </>
            ) : (
              <>
                <DropDownItem
                  key={index}
                  index={index}
                  selected={selected!}
                  themeColor={themeColor.subColor}
                  onClick={() => {
                    onItemClick(index);
                    setIsShowList(false);
                  }}
                  height={height}
                  hidden={item.hidden}
                >
                  {item.icon && (
                    <Icon
                      color={disable ? '#818282' : iconColor!}
                      icon={item.icon}
                      width={18}
                      rotate={item.rotate ?? 0}
                    />
                  )}
                  {item.png && (
                    <PNG
                      src={item.png}
                      pngImageCropCircle={pngImageCropCircle}
                    />
                  )}
                  <DropDownItemText>{item.selectionName}</DropDownItemText>
                </DropDownItem>
              </>
            )}
          </>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
}

export default DropDown;
