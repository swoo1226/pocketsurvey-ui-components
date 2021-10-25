import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { Loading } from '../index';

type LoadingPropsType = {
  isLoading: boolean | null;
};

function WholeLoading({ isLoading }: LoadingPropsType) {
  if (isLoading) {
    return (
      <Portal node={document.getElementsByClassName('App')[0]}>
        <LoadingContainer>
          <LoadingInnerContainer>
            <Loading isLoading width={450} height={150} /> 
          </LoadingInnerContainer>
        </LoadingContainer>
      </Portal>
    );
  }
  return null;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const LoadingInnerContainer = styled.div`
  .inner {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default WholeLoading;
