import React from 'react'
import {
  withKnobs,
  number,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'
import styled from 'styled-components';
import Icon, { iconTypes, CursorStyleType, IconType} from './Icon'
import { Meta } from '@storybook/react/types-6-0'
import * as All from './svg/index';

const allIcons = Object.keys(All);
const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;

const Inner = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
`;

export default {
  component: Icon,
  title: 'Core/Icon',
  decorators: [withKnobs],
} as Meta

export function Index() {
  const width = number('width', 50)
  const color = text('color', 'black')
  const rotate = number('rotate', 0)
  return (
    <Grid className="grid">
     {
       allIcons.map((item:any) => 
        <Inner>
            <Icon
              icon={item}
              width={width}
              color={color}
              rotate={rotate}
              onClick={() => alert('Hello!')}
              useCursor={true}
              hoveredColor={'red'}
              selectCursor= "grab"
            />
            <p>{item}</p>
        </Inner>
       )
     }
    </Grid>
  )
}

export function mouseover() {
  const theme = select('icon name', iconTypes, 'singleChoice')
  const width = number('width', 50)
  const color = text('color', 'black')
  const rotate = number('rotate', 0)

  return (
    <Icon
      icon={theme}
      width={width}
      color={color}
      rotate={rotate}
      onClick={() => alert('Hello!')}
      onMouseOver={() => alert('mouseover!')}
      onMouseLeave={() => alert('mousedown!')}
      useCursor={true}

    />
  )
}
