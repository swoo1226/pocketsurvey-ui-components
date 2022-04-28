import React from 'react';
import styled from 'styled-components';

interface IIconWrapper {
  children: React.ReactNode;
}

const IconFlex = ({ children }: IIconWrapper) => {
  return <IconFlexWrapper>{children}</IconFlexWrapper>;
};

export default IconFlex;

const IconFlexWrapper = styled.div`
  display: flex;
  gap: 11px;
`;
