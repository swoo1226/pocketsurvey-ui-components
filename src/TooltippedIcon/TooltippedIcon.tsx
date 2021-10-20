import React, { useState } from 'react';
import { Portal } from 'react-portal';
import CustomTooltip from '../CustomTooltip/CustomTooltip';

type TooltippedIconType = {
  stableIcon: string;
  hoverIcon: string;
  tooltipContent: string;
  clickAction: () => void;
  usePortal: boolean;
  portalPosition: Element | null;
  tooltipId: string;
  tooltipClassName?: string;
  tooltipPosition: 'up' | 'down' | 'left' | 'right' | 'middle' | undefined;
  tooltipType: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light';
  tooltipEffect: 'float' | 'solid';
  show?: boolean;
};

const TooltippedIcon = ({
  stableIcon,
  hoverIcon,
  tooltipContent,
  clickAction,
  usePortal,
  portalPosition,
  tooltipPosition,
}: TooltippedIconType) => {
  const [hover, setHover] = useState<boolean>(false);

  if (usePortal && portalPosition) {
    return (
      <Portal node={portalPosition}>
        <CustomTooltip content={tooltipContent} direction={tooltipPosition}>
          <img
            src={hover ? hoverIcon : stableIcon}
            style={{ cursor: 'pointer', width: '21px', height: '21px' }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={() => {
              clickAction();
            }}
          />
        </CustomTooltip>
      </Portal>
    );
  } 
    return null;
  
};

export default TooltippedIcon;
