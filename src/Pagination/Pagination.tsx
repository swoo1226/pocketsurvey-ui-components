import React from 'react';
// import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
// import Icon from '../Icon/Icon';

// const PaginationContainer = styled.div``;

type SizeType = 'normal' | 'small' | 'large';

export type PaginationType = {
  count: number;
  size: SizeType;
  defaultPage: number;
  onChangeFn: any;
  disabled: boolean;
  siblingCount: number;
  boundaryCount: number;
  selectedBackgroundColor: string;
  hoveredBackgroundColor: string;
  selectedTextColor: string;
  hoveredTextColor: string;
};



const PaginationComponent = ({
  count,
  size,
  disabled,
  defaultPage,
  onChangeFn,
  siblingCount,
  boundaryCount,
  selectedBackgroundColor,
  hoveredBackgroundColor,
  selectedTextColor,
  hoveredTextColor
}: PaginationType) => {
  const useStyles = makeStyles({
    root: {
      '& > *': {
        color: '#2B2E33',
      },
      '& .MuiPaginationItem-page:hover': {
        backgroundColor: hoveredBackgroundColor,
        color: hoveredTextColor
      },
      '& .Mui-selected': {
        backgroundColor: selectedBackgroundColor,
        color: selectedTextColor,
      },
      '& .Mui-selected:hover': {
        backgroundColor: '#FAC62D',
        color: selectedTextColor,
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        defaultPage={defaultPage}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        size={size != 'normal' ? size : undefined}
        onChange={(event: React.ChangeEvent<any>) => {
          return onChangeFn(event);
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default PaginationComponent;
