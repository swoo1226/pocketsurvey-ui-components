import React, { useContext, useRef, useState } from 'react';
import { Icon } from '..';
import getStyle from '../style/getStyle';
import useOnClickOutside from './hooks/useOnClickOutside';
import * as S from './styles';
import { IDropdownProps, IDropDownSelectionProps } from './types';

const DropdownContext = React.createContext<{
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  width: string;
  groupDom: React.RefObject<HTMLDivElement>;
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
      ...props
    }: IDropdownProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [showList, setShowList] = useState<boolean>(false);
    const widthValue = getStyle.getSize(width ?? 'auto');
    const heightValue = getStyle.getSize(height ?? '');
    const wrapperDom = useRef<HTMLDivElement>(null);
    const groupDom = useRef<HTMLDivElement>(null);

    //@ts-ignore
    React.useImperativeHandle(ref, () => ({
      setRawShowList: (v: boolean) => setShowList(v),
    }));

    useOnClickOutside(wrapperDom, (event: MouseEvent) => {
      if (showList) {
        if (groupDom.current && event.target instanceof Node) {
          if (groupDom.current.contains(event.target)) return;
        }
        setShowList(false);
      }
    });

    return (
      <DropdownContext.Provider
        value={{ setShowList, width: widthValue, groupDom }}
      >
        <div>
          <S.DropdownWrapper
            {...props}
            ref={wrapperDom}
            onClick={(event) => {
              setShowList((value) => !value);
              if (props.onClick) props.onClick(event);
            }}
          >
            <S.DropdownBox
              width={widthValue}
              height={heightValue}
              isDisabled={isDisabled}
              isFocused={showList}
              preset={preset}
            >
              <div>{!!value ? value : placeholder}</div>
              <Icon
                icon="arrow"
                width={18}
                rotate={!showList ? 90 : 270}
                color={preset === 'primary-yellow' ? '#FAC62D' : ''}
              />
            </S.DropdownBox>
          </S.DropdownWrapper>
          {showList && <>{children}</>}
        </div>
      </DropdownContext.Provider>
    );
  },
) as ForwardRefSubComponent<IDropdownProps, ISubComponent>;

const DropdownSelectionGroup = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height?: string | number;
}) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  return (
    <S.DropdownSelectionGroup
      ref={cxt.groupDom}
      height={height}
      width={cxt.width}
    >
      {children}
    </S.DropdownSelectionGroup>
  );
};

const DropdownSelection = ({
  height,
  isSelected,
  children,
  ...props
}: IDropDownSelectionProps) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  return (
    <S.DropdownSelectionWrapper
      {...props}
      width={cxt.width}
      height={height}
      isSelected={isSelected}
      onClick={(event) => {
        cxt.setShowList((v) => !v);
        if (props.onClick) props.onClick(event);
      }}
    >
      {children}
    </S.DropdownSelectionWrapper>
  );
};

interface ISubComponent {
  Selection: typeof DropdownSelection;
  Group: typeof DropdownSelectionGroup;
}

export default Dropdown2;

Dropdown2.Selection = DropdownSelection;
Dropdown2.Group = DropdownSelectionGroup;

type ForwardRefSubComponent<T, U> = Combine<
  React.ForwardRefExoticComponent<
    Combine<T, React.RefAttributes<HTMLDivElement>>
  >,
  U
>;

type Combine<T, K> = T & Omit<K, keyof T>;

export type ImperativeType = {
  setRawShowList: (v: boolean) => any;
};
