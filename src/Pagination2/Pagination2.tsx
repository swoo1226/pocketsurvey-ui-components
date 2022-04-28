import React, { useEffect, useRef } from 'react';
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
  const isInitial = useRef<boolean>(true);

  useEffect(() => {
    const item = items.find((item) => item.selected);
    if (!isInitial.current && item) onChange(item.page);

    if (isInitial.current === true) {
      isInitial.current = false;
    }
  }, [items]);

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
