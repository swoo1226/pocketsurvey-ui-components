import React, { useContext, useRef } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { DropdownContext } from '../Dropdown2';
import { useGroupComponentStyle } from '../style';
import useSize from '@react-hook/size';

export interface IGroupProps {
  children: React.ReactNode;
  extraCSS?: FlattenSimpleInterpolation;
}

const Group = (props: IGroupProps) => {
  const cxt = useContext(DropdownContext);
  if (!cxt) return <></>;

  const [groupWidth, groupHeight] = useSize(cxt.groupWrapperRef);
  const sizeCSS = useGroupComponentStyle(cxt, groupWidth, groupHeight);

  return (
    <GroupWrapper
      sizeCSS={sizeCSS}
      extraCSS={props.extraCSS}
      ref={cxt.groupWrapperRef}
    >
      {props.children}
    </GroupWrapper>
  );
};
export default Group;

const GroupWrapper = styled.div<{
  sizeCSS: FlattenSimpleInterpolation;
  extraCSS?: FlattenSimpleInterpolation;
}>`
  position: absolute;
  margin: 0;
  padding: 8px 0;
  border: 1px solid #dfdedd;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 999;

  ${(props) => props.sizeCSS}
  ${(props) => props.extraCSS}
`;
