import { css } from 'styled-components';

export class Toggle2Module {
  constructor(
    private readonly onClick?:
      | React.MouseEventHandler<HTMLDivElement>
      | undefined,
  ) {}

  handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.onClick) {
      this.onClick(e);
    }
  }
}

interface IToggle2StyleProps {
  isDisable: boolean;
  active: boolean;
}

export const toggle2StyleModule = {
  getFrameCss({ active, isDisable }: IToggle2StyleProps) {
    if (active && isDisable === false) {
      return css`
        background-color: #59c4db;
      `;
    }
    return css`
      background-color: #dfdedd;
    `;
  },
  getFrameCssWhenHover({ active, isDisable }: IToggle2StyleProps) {
    if (active === false && isDisable === false) {
      return css`
        background-color: #818282;
      `;
    }
    if (isDisable) {
      return css`
        background-color: #dfdedd;
      `;
    }
    return css`
      background-color: #59c4db;
    `;
  },

  getCircleCss({ active, isDisable }: IToggle2StyleProps) {
    if (active === false && isDisable === false) {
      return css`
        background-color: #ffffff;
        transform: translateX(2px);
      `;
    }
    if (active && isDisable === false) {
      return css`
        background-color: #ffffff;
        transform: translateX(22px);
      `;
    }
    if (active === false && isDisable) {
      return css`
        background-color: #f0f0f0;
        transform: translateX(2px);
      `;
    }
    if (active && isDisable) {
      return css`
        background-color: #f0f0f0;
        transform: translateX(22px);
      `;
    }
  },
};
