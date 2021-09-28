import React, { memo } from 'react'
import { FixedSizeList as List } from 'react-window'
import Skeleton, {SkeletonTheme}  from "react-loading-skeleton"
import { ReactWindowScroller } from 'react-window-scroller';

const SkeletonContainer = (props) => {
   return (
   <div>
      {props.children}
    </div>
   ) 
}

const Row = (props) => {
  const {
    data,
    isScrolling,
    index,
    style,
  } = props;
  return (
    <div style={style}>
      {isScrolling ? (
        <SkeletonTheme
          color={backgroundColor}
          highlightColor={highlightColor}
        >
          <Skeleton wrapper={SkeletonContainer} height={style.height} />
        </SkeletonTheme>
      ) : (
        data.data[index]
      )}
    </div>
  );
}


type WindowContainerPropsType = {
    dataList: Element[] |JSX.Element[],
    height: number,//vertical에선 무조건 number만 가능
    width: number|string,
    itemSize: number,
    useIsScrolling?: boolean,
    highlightColor?: string,
    backgroundColor?: string,
}

function WindowContainer({
  dataList,
  height,
  width,
  itemSize,
  useIsScrolling,
  highlightColor,
  backgroundColor
}: WindowContainerPropsType) {
  return (
    <ReactWindowScroller>
      {({ref, outerRef, style, onScroll}) => (
      <List
        ref={ref}
        // outerRef={outerRef}
        useIsScrolling={useIsScrolling}
        height={window.innerHeight}
        width={window.innerWidth}
        itemSize={itemSize}
        itemData={dataList}
        itemCount={dataList.length}
        style={style}
        onScroll={() => {console.log('onscroll')}}
      >
        {/* {Row} */}
        {(data) => Row({ data, highlightColor, backgroundColor})}
      </List>
      )}
    </ReactWindowScroller>
  )
}

export default memo(WindowContainer);