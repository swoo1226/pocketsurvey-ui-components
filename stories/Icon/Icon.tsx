import React from 'react';
import styled from 'styled-components';

export const IconTest = styled.div``;

export type IconType = { stroke: string; width: string };

export const Icon = ({ stroke, width }: IconType) => {
  return (
    <h1>
      Icon SVG <br /> Props: {stroke},&nbsp;
      {width}
    </h1>
  );
};
