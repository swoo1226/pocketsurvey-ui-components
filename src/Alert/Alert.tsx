import React, {
  useContext,
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from 'react';
import { Button2 } from '..';
import { LeftAlign, CenterAlign, LeftAlignNoGap } from './AlertAlign';
import { AlertLayout } from './style';
import AlertContent from './AlertContent';
import { Combine } from '../@types/utils';

export interface IAlertProps {
  status: 'normal' | 'error' | 'complete' | 'warning';
  align: 'center' | 'left' | 'left-noGap';
  title: string;
  contentChildren: React.ReactNode[];
  footerChildren: React.ReactNode[];
}

interface IAlertContextProps {
  status: IAlertProps['status'];
  align: IAlertProps['align'];
}

export const AlertContext = React.createContext<IAlertContextProps | null>(
  null,
);

const Alert = ({
  status,
  align,
  title,
  contentChildren,
  footerChildren,
}: IAlertProps) => {
  return (
    <div>
      <AlertContext.Provider
        value={{
          status,
          align,
        }}
      >
        <AlertLayout.Wrapper className="alert-wrapper">
          <AlertLayout.TopLine status={status} className="alert-topline" />
          <AlertLayout.Content align={align} className="alert-content">
            {align === 'center' && (
              <CenterAlign title={title} status={status}>
                {contentChildren}
              </CenterAlign>
            )}
            {align === 'left' && (
              <LeftAlign title={title} status={status}>
                {contentChildren}
              </LeftAlign>
            )}
            {align === 'left-noGap' && (
              <LeftAlignNoGap title={title} status={status}>
                {contentChildren}
              </LeftAlignNoGap>
            )}
          </AlertLayout.Content>
          <AlertLayout.Footer align={align} className="alert-footer">
            {Children.map(footerChildren, (child, index) => {
              const item = child as ReactElement<
                PropsWithChildren<IAlertButton>
              >;
              return (
                <React.Fragment key={index}>
                  {cloneElement(item, { index })}
                </React.Fragment>
              );
            })}
          </AlertLayout.Footer>
        </AlertLayout.Wrapper>
      </AlertContext.Provider>
    </div>
  );
};

export default Alert;

export type UnArray<T> = T extends Array<infer U> ? U : T;

// preset을 optional 인자로 받음
type Origin = Combine<
  {
    preset?: UnArray<Parameters<typeof Button2>>['preset'];
  },
  UnArray<Parameters<typeof Button2>>
>;

interface IAlertButton extends Origin {
  children: string;
  index?: number;
}

const AlertButton = ({ children, index, ...props }: IAlertButton) => {
  const cxt = useContext(AlertContext);
  if (!cxt) return <></>;

  const preset = getPreset(cxt.status, index) ?? 'secondary-basic-gray';

  return (
    <Button2
      preset={props.preset ?? preset}
      size={props.size ?? 'small'}
      {...props}
    >
      {children}
    </Button2>
  );
};

Alert.Content = AlertContent;
Alert.Button = AlertButton;

const getPreset = (
  status: IAlertProps['status'],
  index?: number,
): IAlertButton['preset'] => {
  if (status === 'warning') {
    if (index === 0) return 'tertiary-text';
    if (index === 1) return 'primary-danger';
  }
};
