import styled, { css } from 'styled-components';
import text from '../style/text';
import { numberInputButtonStyleModule } from './NumberInputButtonMudule';

export const NumberInputButtonWrapper = styled.div`
  display: flex;
  * {
    box-sizing: border-box;
  }
`;

export const Selection = styled.div<{
  name: 'minus' | 'value' | 'plus';
  width: number;
  isDisabled: boolean;
}>`
  cursor: pointer;
  display: flex;
  border: 1px solid #dfdedd;
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  height: 32px;
  justify-content: center;
  align-items: center;

  ${text({
    weight: 'medium',
    size: 14,
    color: 'gray05',
  })};

  color: #2b2e33;

  ${numberInputButtonStyleModule.getWarpperBorderStyle}

  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      color: #c9c8c7;
    `}
    :hover {
    ${numberInputButtonStyleModule.getHoverBackground}
  }
`;

export const InnerInput = styled.input`
  width: 100%;
  height: calc(100% - 10px);
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding-left: 5px;

  // input type이 숫자일 때 나오는 숫자 증가 감소 버튼 없애기 위한 css
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
