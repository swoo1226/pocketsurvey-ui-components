import React, { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { usePagination } from '@material-ui/lab/Pagination';
import PaginationSwitcher from './Switcher';
import styled from 'styled-components';

interface IPagination2Props {
  count: number;
  onChange: (page: number) => void;
}

const Pagination2 = ({ count, onChange }: IPagination2Props) => {
  const { items } = usePagination({
    count,
  });

  useEffect(() => {
    const item = items.find((item) => item.selected);
    if (item) onChange(item.page);
  }, [items]);

  return (
    <HStack>
      {items.map((item, index) => (
        <PaginationSwitcher item={item} />
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
