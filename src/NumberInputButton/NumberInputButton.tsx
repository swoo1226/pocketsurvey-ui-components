import React, { forwardRef, useEffect, useRef, useState } from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import { NumberInputButtonModule } from './NumberInputButtonMudule';
import { Selection, NumberInputButtonWrapper, InnerInput } from './styled';

interface INumberInputButton
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'disabled'> {
  isDisabled?: boolean;
  value: number;
  minusButtonClick: () => void;
  plusButtonClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatter?: (value: number) => number | string;
}

const NumberInputButton = forwardRef(
  (
    {
      isDisabled = false,
      value,
      formatter,
      minusButtonClick,
      plusButtonClick,
      onChange,
      ...props
    }: INumberInputButton,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const inputDom = useRef<HTMLInputElement>(null);
    const module = new NumberInputButtonModule(
      isEditMode,
      isDisabled,
      minusButtonClick,
      plusButtonClick,
    );

    useOutsideAlerter(inputDom, () => {
      setIsEditMode(false);
    });

    useEffect(() => {
      if (isEditMode === true) {
        inputDom.current?.focus();
      }
    }, [isEditMode]);

    return (
      <NumberInputButtonWrapper {...props} ref={ref}>
        <Selection
          name="minus"
          width={32}
          isDisabled={isDisabled}
          onClick={() => {
            module.handleMinusButtonClick();
          }}
        >
          -
        </Selection>
        <Selection
          name="value"
          width={70}
          isDisabled={isDisabled}
          onClick={() => {
            module.handleInputSelectionClick(setIsEditMode);
          }}
        >
          {isEditMode ? (
            <InnerInput
              type="number"
              ref={inputDom}
              value={value}
              onKeyDown={(e) => {
                module.handleInputOnKeyDown(e, setIsEditMode);
              }}
              onChange={onChange}
            />
          ) : (
            <>{formatter ? formatter(value) : value}</>
          )}
        </Selection>
        <Selection
          name="plus"
          width={32}
          isDisabled={isDisabled}
          onClick={() => {
            module.handlePlusButtonClick();
          }}
        >
          +
        </Selection>
      </NumberInputButtonWrapper>
    );
  },
);

export default NumberInputButton;
