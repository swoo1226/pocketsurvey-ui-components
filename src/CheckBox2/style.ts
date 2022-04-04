import { ICheckBox2WrapperProps } from './CheckBox2';
import { FlattenSimpleInterpolation, css } from 'styled-components';
import text from '../style/text';
import { mergeCSS } from '../style/utils';

const getCheckBox2CSS = (props: ICheckBox2WrapperProps) => {
  const cssArr: FlattenSimpleInterpolation[] = [];

  if (props.isChildrenText) {
    cssArr.push(css`
      padding-top: 2px;
      ${text({
        weight: 'regular',
        size: 14,
      })}
      letter-spacing: -0.5px;
      color: #ffffff;
    `);
  }

  if (props.isDisabled) {
    if (props.isChildrenText === false) {
      cssArr.push(css`
        path {
          stroke: #dfdedd;
        }
      `);
    }

    cssArr.push(css`
      background-color: #f0f0f0;
      border: 1px solid #dfdedd;
    `);

    return mergeCSS(cssArr);
  }

  if (props.isSelected) {
    cssArr.push(css`
      cursor: pointer;
      background-color: #f2ab28;
    `);
  } else {
    cssArr.push(css`
      cursor: pointer;
      border: 1px solid #dfdedd;

      &:hover {
        border: 1px solid #f2ab28;
      }
    `);
  }

  return mergeCSS(cssArr);
};

export default getCheckBox2CSS;
