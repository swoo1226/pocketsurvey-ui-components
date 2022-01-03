import React, { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Icon, { IconType } from '../Icon/Icon';
import {
  DropDownBox,
  DropDownBoxContainer,
  DropDownContainer,
  DropDownItem,
  DropDownItemText,
  DropDownList,
  PNG,
} from './styles';

export type DropDownType = {
  list: {
    selectionName: string;
    isHr?: boolean;
    icon?: IconType;
    rotate?: number;
    hidden?: boolean;
    png?: any;
  }[];
  hrs?: { targetIndex: number; title: string; section?: JSX.Element }[];
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
  id?: string;
  placeholder?: string;
  height?: number;
  width?: number;
  zIndex?: number;
  listMaxHeight?: number;
  fontSize?: number;
  pngImageCropCircle?: boolean;
  containerHeight?: string;
};

const Portal = ({
  children,
  targeting,
}: {
  children: any;
  targeting: string;
  targetIndex: number;
}) => {
  const getTarget = document.querySelector(targeting);
  return getTarget ? ReactDOM.createPortal(children, getTarget) : null;
};

const DropDownContent = ({
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
  hrs,
  id,
}: DropDownType): JSX.Element => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const selectionListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectionListRef.current &&
        !selectionListRef.current.contains(event.target)
      ) {
        setIsShowList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
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
                  color={disable ? '#C9C8C7' : iconColor!}
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
          color={disable ? '#C9C8C7' : iconColor!}
          icon="arrow"
          useCursor={!disable}
          width={18}
          rotate={!isShowList ? 90 : 270}
        />
      </DropDownBoxContainer>
      {hrs &&
        hrs.map((hr) =>
          Portal({
            children: hr.section,
            targeting: `.${id}Hr${hr.targetIndex}`,
            targetIndex: hr.targetIndex,
          }),
        )}
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
        className={className ? `${className}List` : ''}
      >
        {list.map((item, index) => (
          <React.Fragment key={item.selectionName}>
            {hrs && hrs.some((hr) => hr.targetIndex === index) && (
              <div className={`${id}Hr${index}`} />
            )}
            <DropDownItem
              key={item.selectionName}
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
                <PNG src={item.png} pngImageCropCircle={pngImageCropCircle} />
              )}
              <DropDownItemText>{item.selectionName}</DropDownItemText>
            </DropDownItem>
          </React.Fragment>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
};

export default DropDownContent;
