import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

class SelectButtonModule {
  constructor(
    private readonly isSelected: boolean,
    private readonly withIcon: boolean,
    private readonly onClick:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined,
  ) {}

  IconModule() {
    if (this.withIcon && this.isSelected) {
      return this.checkIcon();
    }
    if (this.withIcon && this.isSelected === false) {
      return this.plusIcon();
    }
    return <></>;
  }
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.onClick) {
      this.onClick(e);
    }
  }
  private plusIcon = (): JSX.Element => (
    <div>
      <CustomIcon icon="plusBold" color={'#2B2E33'} width={9} />
    </div>
  );

  private checkIcon = (): JSX.Element => (
    <div>
      <CustomIcon icon="checkWide" color={'#f2ab28'} width={9} />
    </div>
  );
}

const CustomIcon = styled(Icon)`
  margin-top: 2px;
`;

export default SelectButtonModule;
