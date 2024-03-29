import React from 'react';
import AlertIcon from './AlertIcon';
import { IAlertProps } from './Alert';
import { AlertLayout, AlertTitle } from './style';

interface IAlertAlign {
  status: IAlertProps['status'];
  title: IAlertProps['title'];
  children: React.ReactNode;
}

export const LeftAlign = ({ status, title, children }: IAlertAlign) => {
  return (
    <AlertLayout.LeftAlign className="alert-leftAlign">
      <div>
        <AlertIcon status={status} />
      </div>

      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertLayout.AlertLayoutContent>
          {children}
        </AlertLayout.AlertLayoutContent>
      </div>
    </AlertLayout.LeftAlign>
  );
};

export const CenterAlign = ({ status, title, children }: IAlertAlign) => {
  return (
    <AlertLayout.CenterAlign className="alert-centerAlign">
      <AlertIcon status={status} />

      <AlertTitle marginTop={14}>{title}</AlertTitle>
      <AlertLayout.AlertLayoutContent>
        {children}
      </AlertLayout.AlertLayoutContent>
    </AlertLayout.CenterAlign>
  );
};

export const LeftAlignNoGap = ({ status, title, children }: IAlertAlign) => {
  return (
    <AlertLayout.LeftAlignNoGap className="alert-leftAlignNoGap">
      <div>
        <AlertIcon status={status} />
      </div>

      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertLayout.AlertLayoutContent>
          {children}
        </AlertLayout.AlertLayoutContent>
      </div>
    </AlertLayout.LeftAlignNoGap>
  );
};
