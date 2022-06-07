import { css } from 'styled-components';

const font = {
  regular: 'Pretendard Regular',
  medium: 'Pretendard Medium',
  bold: 'Pretendard Bold',
  light: 'Pretendard Light',
};

const colors = {
  yellow: '#FAC62D',
  boldYellow: '#F2AB28',
  blue: '#59C4DB',
  boldBlue: '#57ADF2',
  lightBeige: '#FBFAF8',
  gray01: '#F0F0F0',
  gray02: '#DFDEDD',
  gray03: '#C9C8C7',
  gray04: '#818282',
  gray05: '#2B2E33',
  beige: '#E9E1D5',
  boldBeige: '#D2CBC0',
  lightYellow: '#FEF4CE',
  lightBlue: '#DEF3F8',
  red: '#F37165',
  green: '#70D473',
  white: '#ffffff',
};

const preset = {
  typography: {
    heading1: css`
      font-family: ${font.regular};
      font-size: 28px;
      line-height: 150%;
      word-break: keep-all;
    `,
    heading2: css`
      font-family: ${font.regular};
      font-size: 21px;
      line-height: 150%;
      word-break: keep-all;
    `,
    subtitle: css`
      font-family: ${font.regular};
      font-size: 18px;
      line-height: 150%;
      word-break: keep-all;
    `,
    paragraph1: css`
      font-family: ${font.regular};
      font-size: 14px;
      line-height: 150%;
      word-break: keep-all;
    `,
    paragraph2: css`
      font-family: ${font.regular};
      font-size: 12px;
      line-height: 150%;
      word-break: keep-all;
    `,
    number1: css`
      font-family: ${font.regular};
      font-size: 28px;
      line-height: 150%;
    `,
    number2: css`
      font-family: ${font.regular};
      font-size: 18px;
      line-height: 150%;
    `,
    number3: css`
      font-family: ${font.regular};
      font-size: 14px;
      line-height: 150%;
    `,
  },
  flex: {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexColumn: css`
      display: flex;
      flex-direction: column;
    `,
    flexVerticalCenter: css`
      display: flex;
      align-items: center;
    `,
  },
};

const theme = {
  colors,
  font,
  preset,
};

export default theme;

export type Theme = {
  colors: typeof colors;
  font: typeof font;
  preset: typeof preset;
};
