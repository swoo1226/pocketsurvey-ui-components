import React from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Icon from '../Icon/Icon';

const PaginationContainer = styled.div``;

type SizeType = 'normal' | 'small' | 'large';

export type PaginationType = {
  count: number;
  size: SizeType;
  defaultPage: number;
  onChange: (e: React.ChangeEvent) => void;
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
  onChange,
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
        // marginTop: theme.spacing(2),
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
        onChange={(e) => {
          onChange(e);
        }}
        disabled={disabled}
      />
      {/* <Pagination
        count={8}
        defaultPage={1}
        siblingCount={1}
        boundaryCount={1}
        color="primary"
      />
      <Pagination
        count={8}
        defaultPage={1}
        siblingCount={1}
        boundaryCount={1}
        color="secondary"
        size={size != 'normal' ? size : undefined}
      />
      <Pagination count={3} disabled /> */}
    </div>
  );
  // return (
  //   <PaginationContainer>
  //     <Icon icon="paginationArrow" width={50} rotate={0} />

  //     <Icon icon="paginationArrow" width={50} rotate={180} />
  //   </PaginationContainer>
  // );
};

export default PaginationComponent;
