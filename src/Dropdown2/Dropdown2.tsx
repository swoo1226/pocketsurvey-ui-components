import React, { useRef, useEffect, useState } from 'react';
import useSize from '@react-hook/size';
import { PresetType, SizeType, PositionType } from './types';
import Base from './components/base';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import useOnClickOutside from './hooks/useOnClickOutside';
import Group from './components/group';
import Selection from './components/selection';
export interface IDropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string | number | React.ReactNode;
  children: React.ReactNode;
  isDisabled?: boolean;
  placeholder?: string;
  preset?: PresetType;
  size?: SizeType;
  position?: PositionType;
  extraCSS?: FlattenSimpleInterpolation;
}

export interface IDropdownContextProps {
  domSize: {
    base: {
      width: number;
      height: number;
    };
  };
  preset: PresetType;
  size: SizeType;
  position: PositionType;
  isDisabled?: boolean;
  isFocused?: boolean;
  showList: boolean;
  groupWrapperRef: React.RefObject<HTMLDivElement>;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownContext = React.createContext<IDropdownContextProps | null>(
  null,
);

const Dropdown2 = ({
  preset = 'primary-main',
  size = 'medium',
  position = 'left',
  isDisabled = false,
  placeholder = '',
  children,
  value,
  ...props
}: IDropdownProps) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const relativeWrapperRef = useRef<HTMLDivElement>(null);
  const groupWrapperRef = useRef<HTMLDivElement>(null);

  const [baseWidth, baseHeight] = useSize(baseRef);
  const [showList, setShowList] = useState<boolean>(false);

  useOnClickOutside(relativeWrapperRef, (event: MouseEvent) => {
    if (groupWrapperRef.current === null) return;
    if (showList) {
      if (groupWrapperRef.current && event.target instanceof Node) {
        if (groupWrapperRef.current.contains(event.target)) return;
      }
      setShowList(false);
    }
  });

  const handleBoxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isDisabled) return;
    setShowList((value) => !value);
    if (props.onClick) props.onClick(event);
  };

  return (
    <DropdownContext.Provider
      value={{
        domSize: {
          base: {
            width: baseWidth,
            height: baseHeight,
          },
        },
        preset,
        size,
        position,
        isDisabled,
        isFocused: false,
        showList,
        groupWrapperRef,
        setShowList,
      }}
    >
      <RelativeWrapper ref={relativeWrapperRef}>
        <Base onClick={handleBoxClick} {...props} ref={baseRef}>
          <>{!!value ? value : placeholder}</>
        </Base>
        <DisplayWrapper showList={showList}>{children}</DisplayWrapper>
      </RelativeWrapper>
    </DropdownContext.Provider>
  );
};

Dropdown2.Group = Group;
Dropdown2.Selection = Selection;

export default Dropdown2;

const RelativeWrapper = styled.div`
  position: relative;
`;

const DisplayWrapper = styled.div<{ showList: boolean }>`
  ${(props) =>
    props.showList === false &&
    css`
      visibility: hidden;
    `}
`;
