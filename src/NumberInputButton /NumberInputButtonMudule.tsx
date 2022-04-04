import { css } from 'styled-components';

export class NumberInputButtonModule {
  constructor(
    private readonly isEditMode: boolean,
    private readonly isDisabled: boolean,
    private readonly minusButtonClick: () => void,
    private readonly plusButtonClick: () => void,
  ) {}

  handlePlusButtonClick() {
    if (this.isDisabled) return;
    this.plusButtonClick();
  }

  handleMinusButtonClick() {
    if (this.isDisabled) return;
    this.minusButtonClick();
  }

  handleInputSelectionClick(
    update: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    if (this.isDisabled) return;
    if (this.isEditMode === false) update(true);
  }

  handleInputOnKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    update: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    if (e.key === 'Enter') {
      update(false);
    }
  }
}

export const numberInputButtonStyleModule = {
  getWarpperBorderStyle({ name }: { name: 'minus' | 'value' | 'plus' }) {
    switch (name) {
      case 'minus':
        return css`
          border-radius: 3px 0px 0px 3px;
        `;
      case 'value':
        return css`
          border-left: none;
          border-right: none;
          cursor: auto;
        `;
      case 'plus':
        return css`
          border-radius: 0px 3px 3px 0px;
        `;
      default:
        css``;
    }
  },
  getHoverBackground({
    isDisabled,
    name,
  }: {
    isDisabled: boolean;
    name: 'minus' | 'value' | 'plus';
  }) {
    if (isDisabled === false && name !== 'value') {
      return css`
        background-color: #fbfaf8;
      `;
    }
  },
};
