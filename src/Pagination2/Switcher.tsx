import React from 'react';
import { UsePaginationItem } from '@material-ui/lab/Pagination';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import Icon from '../Icon/Icon';
import ChildrenWrapper from './ChildrenWrapper';

interface IPaginationSwitcherProps {
  item: UsePaginationItem;
}

const PaginationSwitcher = ({ item }: IPaginationSwitcherProps) => {
  const { page, type, ...props } = item;

  const JSXMap = new Map<UsePaginationItem['type'], JSX.Element>([
    [
      'start-ellipsis',
      <ChildrenWrapper selected={false} isEllipsis>
        ...
      </ChildrenWrapper>,
    ],
    [
      'end-ellipsis',
      <ChildrenWrapper selected={false} isEllipsis>
        ...
      </ChildrenWrapper>,
    ],
    [
      'previous',
      <div
        style={{
          paddingTop: '5px',
          marginRight: '5px',
        }}
      >
        <Icon
          icon={'arrow'}
          width={18}
          color={props.disabled ? '#C9C8C7' : '#818282'}
          rotate={180}
          onClick={() => {
            if (props.disabled) return;
            props.onClick({} as React.SyntheticEvent<Element, Event>);
          }}
          useCursor={!props.disabled}
          selectCursor="pointer"
        />
      </div>,
    ],
    [
      'next',
      <div
        style={{
          paddingTop: '5px',
          marginLeft: '5px',
        }}
      >
        <Icon
          icon={'arrow'}
          width={18}
          color={props.disabled ? '#C9C8C7' : '#818282'}
          onClick={() => {
            if (props.disabled) return;
            props.onClick({} as React.SyntheticEvent<Element, Event>);
          }}
          useCursor={!props.disabled}
          selectCursor="pointer"
        />
      </div>,
    ],
  ]);

  const Element = JSXMap.get(item.type);
  if (Element) return <>{Element}</>;

  return <ChildrenWrapper {...props}>{item.page}</ChildrenWrapper>;
};
export default PaginationSwitcher;
