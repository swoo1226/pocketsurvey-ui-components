import React, { useContext } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { DropdownContext } from '../Dropdown2';
import { useBaseComponentStyle } from '../style';
import { Icon } from '../..';
import { textEllipsis } from '../style/utils';

interface IBaseProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactChild;
  extraCSS?: FlattenSimpleInterpolation;
}

const Base = React.forwardRef(
  (
    { children, extraCSS, ...props }: IBaseProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const cxt = useContext(DropdownContext);
    if (!cxt) return <></>;

    const presetCSS = useBaseComponentStyle(cxt);

    return (
      <BaseWrapper
        {...props}
        presetCSS={presetCSS}
        extraCSS={extraCSS}
        ref={ref}
      >
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <IconWrapper>
          <Icon
            icon="arrow"
            width={18}
            rotate={!cxt.showList ? 90 : 270}
            color={
              cxt.isDisabled
                ? '#DFDEDD'
                : cxt.preset === 'primary-yellow'
                ? '#FAC62D'
                : '#2B2E33'
            }
          />
        </IconWrapper>
      </BaseWrapper>
    );
  },
);

export default Base;

const BaseWrapper = styled.div<{
  presetCSS: FlattenSimpleInterpolation;
  extraCSS?: FlattenSimpleInterpolation;
}>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Spoqa Han Sans Neo Regular';
  z-index: 19;
  align-items: center;

  ${(props) => props.presetCSS}
  ${(props) => props.extraCSS}
`;

const IconWrapper = styled.div`
  width: 18px;
`;

const ChildrenWrapper = styled.div`
  ${textEllipsis}
`;
