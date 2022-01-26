import React, { forwardRef, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '..';
import { Combine, ForwardRefSubComponent } from '../@types/utils';
import getStyle from '../style/getStyle';

interface IDropdownProps
  extends Combine<
    React.ComponentPropsWithoutRef<'div'>,
    Omit<IDropdownContext, 'showList'>
  > {
  value: string | number | React.ReactNode;
  children: React.ReactNode;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IDropdownContext {
  showList: boolean;
  width?: number | string;
  height?: number | string;
}

const DropdownContext = React.createContext<{
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  width: string;
} | null>(null);

const Dropdown2 = forwardRef(
  (
    {
      isDisabled,
      placeholder,
      height,
      children,
      width,
      value,
      ...props
    }: IDropdownProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [showList, setShowList] = useState<boolean>(false);
    const widthValue = getStyle.getSize(width ?? 'auto');
    const heightValue = getStyle.getSize(height ?? '');

    if (isDisabled) {
      return (
        <DisabledDropdownBox width={widthValue} height={heightValue}>
          {!!value ? value : placeholder}
        </DisabledDropdownBox>
      );
    }

    return (
      <DropdownContext.Provider value={{ setShowList, width: widthValue }}>
        <DropdownWrapper
          {...props}
          ref={ref}
          onClick={(event) => {
            setShowList((value) => !value);
            if (props.onClick) props.onClick(event);
          }}
        >
          <DropdownBox width={widthValue} height={heightValue}>
            <div>{!!value ? value : placeholder}</div>
            <Icon
              icon="arrow"
              width={18}
              rotate={!showList ? 90 : 270}
              color={'#FAC62D'}
            />
          </DropdownBox>
        </DropdownWrapper>
        {showList && <>{children}</>}
      </DropdownContext.Provider>
    );
  },
) as ForwardRefSubComponent<IDropdownProps, ISubComponent>;

interface IBoxProps {
  width: string;
  height: string;
}

const DropdownBox = styled.div<IBoxProps>`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-radius: 3px;
  border: 1px solid rgb(250, 198, 45);
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Spoqa Han Sans Neo Regular';
  cursor: pointer;
  z-index: 19;
  align-items: center;
  ${(props) => css`
    width: ${props.width};
  `}
  ${(props) =>
    css`
      height: ${props.height};
    `}
`;

const DisabledDropdownBox = styled(DropdownBox)`
  border: 1px solid rgb(201, 200, 199);
  background-color: rgb(240, 240, 240);
  cursor: not-allowed;
`;

interface IDropDownSelectionProps
  extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isSelected: boolean;
  height?: string | number;
}

const DropdownSelection = forwardRef(
  (
    { height, isSelected, children, ...props }: IDropDownSelectionProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const cxt = useContext(DropdownContext);
    if (!cxt) return <></>;

    return (
      <DropdownSelectionWrapper
        {...props}
        ref={ref}
        width={cxt.width}
        height={height}
        isSelected={isSelected}
        onClick={(event) => {
          cxt.setShowList((v) => !v);
          if (props.onClick) props.onClick(event);
        }}
      >
        {children}
      </DropdownSelectionWrapper>
    );
  },
);

const DropdownSelectionGroup = styled.div<{ height?: number | string }>`
  width: 200px;
  z-index: 20;
  position: absolute;
  box-shadow: rgb(210 203 192) 0px 3px 6px;
  color: rgb(17, 17, 17);
  border-radius: 3px;
  padding: 8px 0px;
  max-height: 428px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgb(255, 255, 255);
  margin: 7px 0px;
  font-size: 14px;

  ${(props) =>
    props.height &&
    css`
      height: ${getStyle.getSize(props.height)};
    `}
`;

const DropdownSelectionWrapper = styled.div<{
  isSelected: boolean;
  width: string;
  height?: string | number;
}>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 13px;
  height: 34px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #fef4ce;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f0f0f0;
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${getStyle.getSize(props.height)};
    `}
`;

const DropdownWrapper = styled.div``;

interface ISubComponent {
  Selection: typeof DropdownSelection;
  Group: typeof DropdownSelectionGroup;
}

export default Dropdown2;

Dropdown2.Selection = DropdownSelection;
Dropdown2.Group = DropdownSelectionGroup;
