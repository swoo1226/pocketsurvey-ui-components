import React, { useEffect, useRef } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { usePagination } from '@material-ui/lab/Pagination';
import PaginationSwitcher from './Switcher';
import styled from 'styled-components';

interface IPagination2Props {
  count: number;
  onChange: (page: number) => void;
  page?: number;
}

const Pagination2 = ({ count, onChange, page }: IPagination2Props) => {
  const { items } = usePagination({
    count,
    onChange: (_, nextPage) => {
      onChange(nextPage);
    },
    page,
  });

  return (
    <HStack>
      {items.map((item, index) => (
        <PaginationSwitcher item={item} key={index} />
      ))}
    </HStack>
  );
};

export default Pagination2;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
