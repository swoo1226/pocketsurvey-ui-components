import React, { useState } from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Textarea from './Textarea'

export default {
  title: 'Components/Textarea', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Textarea, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export function Index() {
  const type = select('타입', ['basic', 'line'], 'basic')
  const size = select('사이즈', ['small', 'medium', 'big'], 'small')
  const width = text('가로 크기', '')

  const [value, setValue] = useState('')
  const children = text('텍스트', value)
  return (
    <Textarea
      type={type}
      size={size}
      width={width}
      onChange={(data: string) => {
        console.log(data)
        setValue(data)
      }}
      value={value}
    >
      {value}
    </Textarea>
  )
}

Index.story = {
  name: 'Default',
}
