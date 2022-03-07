import React from 'react';
import Tooltip from 'react-tooltip-lite';

type CustomTooltipPropsType = {
  content: string | React.ReactNode | JSX.Element | JSX.Element[];
  children: React.ReactNode;
  className?: string;
  distance?: number;
  tipContentClassName?: string;
  direction?:
    | 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'middle'
    | 'up-start'
    | 'down-start'
    | 'left-start'
    | 'right-start'
    | 'middle-start'
    | 'up-end'
    | 'down-end'
    | 'left-end'
    | 'right-end'
    | 'middle-end'
    | undefined;
  useHover?: boolean;
  arrowSize?: number;
};

function CustomTooltip({
  content,
  children,
  className,
  distance = 5,
  tipContentClassName = 'custom-tooltip',
  direction = 'middle',
  useHover = true,
  arrowSize = 10,
}: CustomTooltipPropsType) {
  return (
    <Tooltip
      content={content}
      className={className}
      useDefaultStyles
      tipContentClassName={tipContentClassName}
      distance={distance}
      direction={direction}
      useHover={useHover}
      arrowSize={arrowSize}
    >
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
