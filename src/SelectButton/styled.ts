import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import text from '../style/text';

export const SelectButtonWrapper = styled.button<{
  withIcon: boolean;
  isSelected: boolean;
  extraCSS?: FlattenSimpleInterpolation;
}>`
  box-sizing: border-box;
  height: 32px;
  border-radius: 20px;
  letter-spacing: -0.5px;
  display: flex;
  background-color: #ffffff;
  justify-content:center ;
  align-items: center;

  ${text({
    weight: 'medium',
    size: 14,
  })}
  ${(props) =>
    props.withIcon
      ? css`
          padding: 9px 16px 7px 14px;
        `
      : css`
          padding: 9px 16px;
        `}

  ${(props) =>
    props.isSelected
      ? css`
          border: 1px solid #f2ab28;
        `
      : css`
          border: 1px solid #dfdedd;
        `}

  ${(props) => props.extraCSS}
`;

export const ValueWrapper = styled.div<{
  withIcon: boolean;
}>`
  display: flex;
  gap: 4px;

  ${(props) =>
    props.withIcon
      ? css``
      : css`
          margin-top: 2px;
        `}

  svg {
    margin-top: 0;
    margin-bottom: 1px;
  }
`;
