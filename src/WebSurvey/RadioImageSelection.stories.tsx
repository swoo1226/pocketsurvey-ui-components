import React from 'react';
import RadioImageSelection from './RadioImageSelection';
import styled from 'styled-components';

export default {
  title: 'Components/WebSurvey/RadioImageSelections',
  component: RadioImageSelection,
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export function Index() {
  return (
    <Wrapper>
      <RadioImageSelection />
    </Wrapper>
  );
}
