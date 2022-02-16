import React, { useState, useRef, useEffect } from 'react';

const useBoxSize = (setShowChildren: (v: boolean) => void) => {
  const [size, setSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dom.current === null) {
      setShowChildren(false);
    } else {
      setShowChildren(true);
      setSize({
        width: dom.current.offsetWidth,
        height: dom.current.offsetHeight,
      });
    }
  }, [dom]);

  return {
    dom,
    size,
  };
};

export default useBoxSize;
