import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import useSize from '@react-hook/size';
import { PresetType, SizeType, PositionType } from './types';
import Base from './components/base';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import useOnClickOutside from './hooks/useOnClickOutside';
import Group from './components/group';
import Selection from './components/selection';
import { Combine } from '../@types/utils';
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

const Dropdown2 = forwardRef(
  (
    {
      preset = 'primary-main',
      size = 'medium',
      position = 'left',
      isDisabled = false,
      placeholder = '',
      children,
      value,
      ...props
    }: IDropdownProps,
    ref: React.Ref<IDropdownContextProps | null>,
  ) => {
    const baseRef = useRef<HTMLDivElement>(null);
    const relativeWrapperRef = useRef<HTMLDivElement>(null);
    const groupWrapperRef = useRef<HTMLDivElement>(null);

    const [baseWidth, baseHeight] = useSize(baseRef);
    const [showList, setShowList] = useState<boolean>(false);
    const cxt = useContext(DropdownContext);
    useImperativeHandle(ref, () => ({
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
    }));

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
  },
) as Dropdown2Type<IDropdownProps, IDropdownContextProps | null, ISubComponent>;

export type Dropdown2Type<T, K, U> = Combine<
  React.ForwardRefExoticComponent<Combine<T, React.RefAttributes<K>>>,
  U
>;

Dropdown2.Group = Group;
Dropdown2.Selection = Selection;

interface ISubComponent {
  Group: typeof Group;
  Selection: typeof Selection;
}

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
