import React, { useState, useEffect } from 'react';
import { PositionType } from '../types';

const useAbsoluteStyle = (
  position: PositionType,
  groupDom: React.RefObject<HTMLDivElement>,
  dropdownBoxSize: {
    width?: number | undefined;
    height?: number | undefined;
  },
  setShowChildren: (v: boolean) => void,
) => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    if (groupDom.current === null) {
      setShowChildren(false);
    } else {
      setShowChildren(true);
      if (position === 'right') {
        const groupWidth = groupDom.current.offsetWidth ?? 0;
        const dropdownBoxWidth = dropdownBoxSize.width ?? 0;
        setLeft((groupWidth - dropdownBoxWidth) * -1);
      }
    }
  }, [groupDom, dropdownBoxSize]);

  useEffect(() => {
    setTop((dropdownBoxSize.height ?? 0) + 8);
  }, [dropdownBoxSize]);

  return {
    top,
    left,
  };
};

export default useAbsoluteStyle;
