import React from 'react';
import Lottie from 'react-lottie';
import loading from './loading.json';

type LoadingPropsType = {
  isLoading: boolean | null;
  width: number;
  height: number;
};

function Loading({ isLoading, width, height }: LoadingPropsType) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (isLoading) {
    return (
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={false}
        isPaused={false}
      />
    );
  }
  return null;
}

export default Loading;
