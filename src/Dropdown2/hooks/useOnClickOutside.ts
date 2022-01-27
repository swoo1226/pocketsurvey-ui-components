import React, { useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: Function,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node) {
        if (!ref.current || ref.current.contains(target)) {
          return;
        }
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
