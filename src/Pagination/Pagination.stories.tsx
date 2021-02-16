import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Pagination, { PaginationType } from './Pagination';
import { Meta } from '@storybook/react/types-6-0';

export default {
  component: Pagination,
  title: 'Components/Pagination',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  return (
    <Pagination
      count={10}
      selected={3}
      theme="primary"
      onClickNext={() => alert('onClickNext')}
      onClickPrev={() => alert('onClickPrev')}
    />
  );
};
