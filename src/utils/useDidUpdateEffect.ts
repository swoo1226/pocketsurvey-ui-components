import { useRef, useEffect } from 'react';

export default function useDidUpdateEffect(func: Function, deps: any[]) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
}
