import React, { useEffect, useState } from 'react';

function ScrollDown() {
  const [divHeight, setDivHeight] = useState('320px');

  useEffect(() => {
    const x = window.scrollX;
    const y = window.scrollY;

    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(document.body.scrollWidth, 0);
    window.scrollTo(x, y);

    setTimeout(() => {
      setDivHeight('0px');
    }, 0);
  }, []);

  return <div style={{ visibility: 'hidden', height: divHeight }} />;
};

export default ScrollDown;