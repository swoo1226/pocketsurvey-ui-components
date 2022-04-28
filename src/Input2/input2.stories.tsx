import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import Input2 from './input2';

export default {
  title: 'Components/Input2',
  component: null,
  argTypes: {
    styletype: {
      control: {
        type: 'select',
        options: [],
      },
    },
  },
};

export const InputPreview = () => {
  const [v, setV] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const dom = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    console.log('dom:', dom);
  }, [dom]);

  return (
    <>
      <h1>기본 버전</h1>
      <button onClick={() => setIsDisabled(!isDisabled)}>isDisabled</button>
      <Input2
        value={v}
        isDisabled={isDisabled}
        onChange={(event) => setV(event.target.value)}
      />
      <h1>
        리셋 버튼을 가지고 있는 Input & 폰트 크기, 텍스트 색상, placeholder 색상
        커스텀
      </h1>
      <button onClick={() => setIsError(!isError)}>isError</button>
      <Input2.Container>
        <Input2
          width={283}
          ref={dom}
          color={'green'}
          placeholder="안녕하세요"
          placeholderColor={'red'}
          isError={isError}
          value={v}
          size="small"
          onChange={(event) => setV(event.target.value)}
          onMouseLeave={() => console.log('input onMouseLeave')}
          wrapperProps={{
            onMouseLeave: () => console.log('div onMouseLeave'),
          }}
        >
          <Input2.Flex>
            <Input2.Clear icon="circle" />
            <Input2.Search onClick={() => console.log('abc')} />
          </Input2.Flex>
        </Input2>
        <Input2.Message mode={'error'}>에러 메세지</Input2.Message>
      </Input2.Container>
    </>
  );
};
