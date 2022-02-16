import React, { useContext } from 'react';
import { IDropDownSelectionProps } from '../types';
import { DropdownContext } from '../Dropdown2';
import * as S from '../styles';

const DropdownSelection = ({
  isSelected,
  children,
  ...props
}: IDropDownSelectionProps) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  return (
    <S.DropdownSelectionWrapper
      {...props}
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

export default DropdownSelection;
