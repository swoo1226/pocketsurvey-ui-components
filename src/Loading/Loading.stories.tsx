import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import Loading from './Loading';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: Loading,
  title: 'Components/Loading',
  decorators: [withKnobs],
} as Meta;

const LoadingContainer = styled.div`
  width: 200px;
  height: 70px; 
`;

export function Index() {
  return (
    <LoadingContainer>
      <Loading isLoading={true} width={200} height={100} />
    </LoadingContainer>
  );
}
