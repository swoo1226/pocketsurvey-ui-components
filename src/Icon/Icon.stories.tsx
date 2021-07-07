import React from 'react'
import {
  withKnobs,
  number,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import Icon, { iconTypes } from './Icon'
import { Meta } from '@storybook/react/types-6-0'

export default {
  component: Icon,
  title: 'Core/Icon',
  decorators: [withKnobs],
} as Meta

export function Index() {
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
      useCursor={true}
    />
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
