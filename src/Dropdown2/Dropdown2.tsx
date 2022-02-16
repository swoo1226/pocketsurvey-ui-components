import React, { useContext, useRef, useState, useEffect } from 'react';
import { Icon } from '..';
import getStyle from '../style/getStyle';
import useOnClickOutside from './hooks/useOnClickOutside';
import * as S from './styles';
import { IDropdownProps, PositionType } from './types';
import { Combine } from '../@types/utils';
import DropdownSelection from './components/selection';
import DropdownSelectionGroup from './components/group';
import { getHeight } from './utils/presetStyle';
import useBoxSize from './hooks/useBoxSize';

export const DropdownContext = React.createContext<{
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  width: string;
  groupDom: React.RefObject<HTMLDivElement>;
  dropdownBoxSize: {
    width?: number;
    height?: number;
  };
  position: PositionType;
  setShowChildren: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const Dropdown2 = React.forwardRef(
  (
    {
      preset = 'primary-main',
      isDisabled = false,
      placeholder,
      height,
      children,
      width,
      value,
      size = 'medium',
      position = 'left',
      ...props
    }: IDropdownProps,
    ref: React.Ref<ImperativeType>,
  ) => {
    const [showList, setShowList] = useState<boolean>(false);
    const [showChildren, setShowChildren] = useState<boolean>(false);
    const widthValue = getStyle.getSize(width ?? 'auto');
    const heightValue = getHeight(size, height);
    const wrapperDom = useRef<HTMLDivElement>(null);
    const groupDom = useRef<HTMLDivElement>(null);
    const { dom: dropdownBoxDom, size: dropdownBoxSize } = useBoxSize(
      setShowChildren,
    );

    React.useImperativeHandle(ref, () => ({
      wrapperDom,
      groupDom,
      rawShowList: showList,
      setRawShowList: (v: boolean) => setShowList(v),
    }));

    useOnClickOutside(wrapperDom, (event: MouseEvent) => {
      if (groupDom.current === null) return;
      if (showList) {
        if (groupDom.current && event.target instanceof Node) {
          if (groupDom.current.contains(event.target)) return;
        }
        setShowList(false);
      }
    });

    return (
      <DropdownContext.Provider
        value={{
          setShowList,
          width: widthValue,
          groupDom,
          dropdownBoxSize,
          position,
          setShowChildren,
        }}
      >
        <div style={{ position: 'relative' }}>
          <S.DropdownWrapper
            {...props}
            ref={wrapperDom}
            onClick={(event) => {
              if (isDisabled) return;
              setShowList((value) => !value);
              if (props.onClick) props.onClick(event);
            }}
          >
            <S.DropdownBox
              height={heightValue}
              isDisabled={isDisabled}
              isFocused={showList}
              preset={preset}
              ref={dropdownBoxDom}
            >
              <div
                style={{
                  marginRight: 10,
                }}
              >
                {!!value ? value : placeholder}
              </div>
              <Icon
                icon="arrow"
                width={18}
                rotate={!showList ? 90 : 270}
                color={
                  isDisabled
                    ? '#DFDEDD'
                    : preset === 'primary-yellow'
                    ? '#FAC62D'
                    : '#2B2E33'
                }
              />
            </S.DropdownBox>
          </S.DropdownWrapper>
          {showList && showChildren && <>{children}</>}
        </div>
      </DropdownContext.Provider>
    );
  },
) as DropdownForwardRefSubComponent<IDropdownProps, ISubComponent>;

interface ISubComponent {
  Selection: typeof DropdownSelection;
  Group: typeof DropdownSelectionGroup;
}

export default Dropdown2;

Dropdown2.Selection = DropdownSelection;
Dropdown2.Group = DropdownSelectionGroup;

export type ImperativeType = {
  wrapperDom: React.RefObject<HTMLDivElement>;
  groupDom: React.RefObject<HTMLDivElement>;
  rawShowList: boolean;
  setRawShowList: (v: boolean) => void;
};

type DropdownForwardRefSubComponent<T, U> = Combine<
  React.ForwardRefExoticComponent<
    Combine<T, React.RefAttributes<ImperativeType>>
  >,
  U
>;
