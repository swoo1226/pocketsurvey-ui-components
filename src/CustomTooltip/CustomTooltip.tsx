import React from 'react';
import Tooltip from 'react-tooltip-lite';

type CustomTooltipPropsType = {
  content: string | React.ReactNode | JSX.Element | JSX.Element[];
  children: React.ReactNode;
  className?: string;
  distance?: number;
  tipContentClassName?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'middle' | undefined;
  useHover?: boolean;
};

function CustomTooltip({
  content,
  children,
  className,
  distance = 5,
  tipContentClassName = 'custom-tooltip',
  direction = 'middle',
  useHover = true,
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
    >
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
