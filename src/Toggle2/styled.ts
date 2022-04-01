import styled, { css } from 'styled-components';

export const Toggle2Wrapper = styled.div``;
export const Frame = styled.div<{
  disable: boolean;
  active: boolean;
}>`
  border-radius: 30px;

  width: 44px;
  height: 24px;
  position: relative;

  ${(props) =>
    props.active && props.disable === false
      ? css`
          background-color: #59c4db;
        `
      : css`
          background-color: #dfdedd;
        `}

  :hover {
    ${(props) =>
      props.disable === false && props.active === false
        ? css`
            background-color: #818282;
          `
        : css`
            background-color: #59c4db;
          `}

    ${(props) =>
      props.disable
        ? css`
            background-color: #dfdedd;
          `
        : css``}
  }
`;

export const Circle = styled.div<{
  disable: boolean;
  active: boolean;
}>`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 1.8px;
  transition: all 0.3s;

  ${(props) =>
    props.disable === false &&
    props.active === false &&
    css`
      background-color: #ffffff;
      transform: translateX(2px);
    `}

  ${(props) =>
    props.disable === false &&
    props.active &&
    css`
      background-color: #ffffff;
      transform: translateX(22px);
    `}
    
  ${(props) =>
    props.disable &&
    props.active === false &&
    css`
      background-color: #f0f0f0;
      transform: translateX(2px);
    `}
  ${(props) =>
    props.disable &&
    props.active &&
    css`
      background-color: #f0f0f0;
      transform: translateX(22px);
    `}

`;
