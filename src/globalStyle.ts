import { css } from 'styled-components';

const font = {
  regular: 'Spoqa Han Sans Neo Regular',
  medium: 'Spoqa Han Sans Neo Medium',
  bold: 'Spoqa Han Sans Neo Bold',
};

const colors = {
  Yellow: '#FAC62D',
  LightYellow: '#FEF4CE',
  BoldYellow: '#F2AB28',
  LightBlue: '#DEF3F8',
  Blue: '#59C4DB',
  BoldBlue: '#57ADF2',
  LightBeige: '#FBFAF7',
  Beige: '#E9E1D5',
  BoldBeige: '#D2CBC0',
  Green: '#70D473',
  Red: '#F37165',
  Gray01: '#F0F0F0',
  Gray02: '#DFDEDD',
  Gray03: '#C9C8C7',
  Gray04: '#818282',
  Gray05: '#2B2E33',
  White: '#FFFFFF',
};

const theme = {
  colors,
  font,
};

export default theme;

export type Theme = {
  colors: typeof colors;
  font: typeof font;
};
