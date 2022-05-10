import styled, { css } from 'styled-components';
import { IAlertProps } from './Alert';
import getStyle from '../style/getStyle';

export const AlertTitle = styled.h1<{ marginTop?: number }>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #2b2e33;
  margin: 0;
  margin-top: 7px;
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}
  margin-bottom: 16px;
`;

export const AlertText = styled.p<{ align: IAlertProps['align'] }>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #2b2e33;
  margin: 0;

  ${(props) =>
    props.align === 'center' &&
    css`
      text-align: center;
    `}
`;

export const AlertLayout = {
  Wrapper: styled.div<{
    width?: number | string;
    height?: number | string;
  }>`
    min-width: 364px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background-color: #ffffff;

    ${(props) =>
      props.width &&
      css`
        width: ${getStyle.getSize(props.width)};
      `}

    ${(props) =>
      props.height &&
      css`
        height: ${getStyle.getSize(props.height)};
      `}
  `,
  TopLine: styled.div<{
    status: IAlertProps['status'];
  }>`
  width: 100%;
  height: 6px;

  ${(props) =>
    props.status === 'normal' &&
    css`
      display: none;
    `}
  background-color: ${(props) => getStatusColor(props.status)};
  border-radius: 5px 5px 0px 0px;
`,
  Content: styled.div<{ align: IAlertProps['align'] }>`
    flex: 1;
    padding-top: 30px;
    padding-bottom: 32px;

    ${(props) =>
      props.align === 'left' &&
      css`
        padding-left: 34px;
        padding-right: 60px;
      `}
  `,
  Footer: styled.div<{ align: IAlertProps['align'] }>`
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    gap: 8px;

    ${(props) =>
      props.align === 'left' &&
      css`
        justify-content: flex-end;
        padding-right: 16px;
        box-sizing: border-box;
      `};
  `,
  LeftAlign: styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
  `,
  AlertLayoutContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  CenterAlign: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-left: 58px;
    padding-right: 58px;
  `,
};

const getStatusColor = (status: IAlertProps['status']) => {
  if (status === 'complete') return '#70D473';
  if (status === 'error') return '#F2AB28';
  if (status === 'warning') return '#F37165';
  return '';
};
