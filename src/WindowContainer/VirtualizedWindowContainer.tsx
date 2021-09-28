import React, { useEffect, useState, useRef } from "react";
import {
  WindowScroller,
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
  List,
  ListRowProps,
} from "react-virtualized";
import Skeleton from 'react-loading-skeleton'

type VirtualizedWindowContainerProps = {
    dataList: JSX.Element[];
    usingWindowScroller: boolean;
    height?: number;
    width?: number;
    itemSize: number;
}

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
})

function VirtualizedWindowContainer({
  dataList,
  usingWindowScroller,
  height,
  width,
  itemSize,
}: VirtualizedWindowContainerProps) {
  const listRef = useRef<List | null>(null)
  const itemHeight = itemSize
  const rowRenderer = ({ index, key, parent, style, isScrolling }: ListRowProps) => {
    return (
      <CellMeasurer
        cache={cache}
        parent={parent}
        key={key}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>{dataList[index]}</div>
        {/* {isScrolling ? <Skeleton style={style}/> : <div style={style}>{dataList[index]}</div>} */}
        {/* 스크롤 시 다른 UI 표시하려면 주석 해제 */}
      </CellMeasurer>
    );
  }
  const scrollListener = (params: any) => {
    // console.log("container scroll", params) 
    //scrollTop, clientHeight, scorllHeight 등이 있음.
    //특정 위치에 스크롤이 되는 경우 액션을 취하고 싶을 때 사용.
    //인피니트 스크롤 구현하고 싶으면 여기서 해주면 됨.
  }
  if (dataList.length > 0) {
    if (usingWindowScroller) {
      return (
        <WindowScroller>
          {({ height, scrollTop, isScrolling, onChildScroll }: any) => (
            <AutoSizer disableHeight>
              {({ width }: any) => (
                <List
                  ref={listRef}
                  autoHeight
                  height={height}
                  width={width}
                  isScrolling={isScrolling}
                  overscanRowCount={0}
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                  rowCount={dataList.length}
                  rowHeight={itemHeight?? cache.rowHeight}
                  rowRenderer={rowRenderer}
                  deferredMeasurementCache={cache}
                />
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      );
    } else {
      return (
        <AutoSizer>
          {({ width }: any) => (
            <List
              ref={listRef}
              height={height}
              width={width}
              overscanRowCount={0}
              onScroll={scrollListener}
              rowCount={dataList.length}
              rowHeight={itemSize}
              rowRenderer={rowRenderer}
              deferredMeasurementCache={cache}
            />
          )}
        </AutoSizer>
      )
    }
  }
  return null
}

export default VirtualizedWindowContainer;
