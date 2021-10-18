import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import CheckBoxItem from './CheckBoxItem';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: CheckBoxItem,
  title: 'Components/CheckBoxItem',
  decorators: [withKnobs],
} as Meta;

const Container = styled.div`
  div {
    margin-top: 10px;
  }
`;
export function Single() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Container>
      <CheckBoxItem
        disabled={false}
        checked={false}
        onClick={() => {}}
      />
      <CheckBoxItem
        disabled={false}
        checked={true}
        onClick={() => {}}
        backgroundColor={'#59C4DB'}
      />
      <CheckBoxItem
        disabled={false}
        checked={true}
        onClick={() => {}}
      />
      <CheckBoxItem
        disabled={true}
        checked={false}
        onClick={() => {}}
      />
      <CheckBoxItem
        disabled={true}
        checked={true}
        onClick={() => {}}
      />
      <br></br>
      TEST
      <CheckBoxItem
        disabled={false}
        checked={checked}
        onClick={(checked) => setChecked(checked)}
      />
    </Container>
  );
}
