import React, { forwardRef } from 'react';
import { SelectButtonWrapper, ValueWrapper } from './styled';
import SelectButtonUIModule from './SelectButtonModule';
import { FlattenSimpleInterpolation } from 'styled-components';

interface ISelectButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'> {
  isSelected: boolean;
  withIcon: boolean;
  extraCSS?: FlattenSimpleInterpolation;
  children: React.ReactNode;
}

const SelectButton = forwardRef(
  (
    { withIcon, isSelected, children, extraCSS, ...props }: ISelectButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const module = new SelectButtonUIModule(
      isSelected,
      withIcon,
      props.onClick,
    );

    return (
      <SelectButtonWrapper
        {...props}
        ref={ref}
        withIcon={withIcon}
        isSelected={isSelected}
        onClick={(e) => {
          module.handleClick(e);
        }}
        extraCSS={extraCSS}
      >
        <ValueWrapper withIcon={withIcon}>
          {module.IconModule()}
          {children}
        </ValueWrapper>
      </SelectButtonWrapper>
    );
  },
);

export default SelectButton;
