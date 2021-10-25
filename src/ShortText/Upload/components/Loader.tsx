import React from 'react';
import styled from 'styled-components';
import loadingSpinner from '../../../Icon/svg/loadingSpinner.svg';

const Loader = () => (
  <LoadingSpinner>
    <SpinnerImg src={loadingSpinner} />
    <InfoText> 파일을 업로드중입니다...</InfoText>
  </LoadingSpinner>
);

export default Loader;

const LoadingSpinner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  padding-top: 30px;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 743px) {
    padding-bottom: 20px;
  }
`;

const SpinnerImg = styled.img`
  color: #fac62d;
  width: calc(1.7 * 14px);
  height: calc(1.2 * 14px);
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
`;

const InfoText = styled.span`
  font-size: 14px;
  color: #818282;
  font-family: 'Noto Sans CJK KR Regular';
  margin-top: 20px;
`;
