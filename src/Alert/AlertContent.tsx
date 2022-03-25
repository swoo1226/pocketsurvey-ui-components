import React, { useContext } from 'react';
import { AlertContext } from './Alert';
import { AlertText } from './style';

export interface IAlertContentProps {
  children: string;
  highlight?: string;
}

const AlertContent = ({ children, highlight }: IAlertContentProps) => {
  const cxt = useContext(AlertContext);
  if (!cxt) return <></>;

  if (!!highlight)
    return (
      <AlertText
        align={cxt.align}
        dangerouslySetInnerHTML={{
          __html: getHighlightedJSX(children, highlight),
        }}
      />
    );

  return <AlertText align={cxt.align}>{children}</AlertText>;
};

export default AlertContent;

const getHighlightedJSX = (children: string, highlight?: string) => {
  if (!!highlight) {
    if (children.includes(highlight))
      return children.replace(
        highlight,
        `<p style="color: ${DEFAULT_HIGHLIGHT_COLOR}; display: inline-block; margin: 0;">${highlight}</p>`,
      );
  }
  return children;
};

const DEFAULT_HIGHLIGHT_COLOR = '#F37165';
