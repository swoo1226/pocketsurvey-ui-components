import React, { useState } from 'react';
import { withKnobs, select, boolean, color } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import Pagination2 from './Pagination2';

export default {
  component: Pagination2,
  title: 'Components/Pagination2',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <h1>{page}</h1>
      <Pagination2 count={5} onChange={(page) => setPage(page)} />
    </>
  );
};
