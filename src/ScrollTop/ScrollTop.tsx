import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backToTop from './backtotop.svg';

const ScrollTopButton = styled.div<{ bottom: string; right: string; }>`
  position: fixed;
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  width: calc(3.2rem + 20px);
  height: calc(3.2rem + 20px);
  border: none;
  text-align: center;
  cursor: pointer;
  z-index: 20;
  padding: 0 !important;
  .scrolltop-image {
    width: 100%;
    height: 100%;
  }
`;

export type ScrollTopType = {
  bottom: string;
  right: string;
  show: 'none' | 'block';
  onScroll: () => void;
}

function ScrollTop({ bottom, right, show, onScroll }: ScrollTopType) {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  if (
    document.location.pathname.indexOf('survey') === -1 &&
    document.location.pathname.indexOf('survey2') === -1
  ) {
    return (
      <ScrollTopButton
        style={{ display: show }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        bottom={bottom}
        right={right}
      >
        <img src={backToTop} alt="back to top" className="scrolltop-image" />
      </ScrollTopButton>
    );
  } 

  return null;
}

export default ScrollTop;
