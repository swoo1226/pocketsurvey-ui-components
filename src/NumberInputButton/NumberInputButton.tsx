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
  formatter?: (value: number) => number | string;
  handleValueChange: (valueTemp: number) => void;
}

const NumberInputButton = forwardRef(
  (
    {
      isDisabled = false,
      value,
      formatter,
      minusButtonClick,
      plusButtonClick,
      handleValueChange,
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

    const [valueTemp, setValueTemp] = useState(value);
    useEffect(() => {
      setValueTemp(value);
    }, [value]);

    useEffect(() => {
      if (isEditMode === false) {
        handleValueChange(valueTemp);
      } else {
        setValueTemp(value);
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
              type="text"
              ref={inputDom}
              value={valueTemp}
              onKeyDown={(e) => {
                module.handleInputOnKeyDown(e, setIsEditMode);
              }}
              onChange={(e) => {
                module.handleInputChange(e, setValueTemp);
              }}
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
