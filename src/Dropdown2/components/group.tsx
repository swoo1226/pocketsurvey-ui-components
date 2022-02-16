import * as S from '../styles';
import React, { useContext, useEffect } from 'react';
import { DropdownContext } from '../Dropdown2';
import useAbsoluteStyle from '../hooks/useAbsoluteStyle';

const DropdownSelectionGroup = ({
  children,
  maxHeight,
}: {
  children: React.ReactNode;
  maxHeight?: string | number;
}) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  const { top, left } = useAbsoluteStyle(
    cxt.position,
    cxt.groupDom,
    cxt.dropdownBoxSize,
    cxt.setShowChildren,
  );

  return (
    <S.DropdownSelectionGroup
      ref={cxt.groupDom}
      maxHeight={maxHeight}
      top={top}
      left={left}
    >
      {children}
    </S.DropdownSelectionGroup>
  );
};

export default DropdownSelectionGroup;
