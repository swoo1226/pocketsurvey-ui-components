import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import Alert from './Alert';
import styled from 'styled-components';

export default {
  title: 'Components/Alert',
  decorators: [withKnobs],
} as Meta;

export const Index = () => {
  return (
    <>
      <h2>Normal</h2>
      <Flex>
        <Alert
          status="normal"
          align="left"
          title="업로드 오류"
          contentChildren={[
            <Alert.Content>
              필드 이름이 중복되어 업로드가 불가능합니다.
            </Alert.Content>,
            <Alert.Content>
              필드 이름을 수정하고, 재업로드 해주세요.
            </Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />

        <Alert
          status="normal"
          align="center"
          title="업로드 오류"
          contentChildren={[
            <Alert.Content>
              필드 이름이 중복되어 업로드가 불가능합니다.
            </Alert.Content>,
            <Alert.Content>
              필드 이름을 수정하고, 재업로드 해주세요.
            </Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />
      </Flex>

      <h2>complete Modal (left)</h2>
      <Flex>
        <Alert
          status="complete"
          align="left"
          title="저장 성공"
          contentChildren={[
            <Alert.Content>목록 저장에 성공하였습니다.</Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />
        <Alert
          status="complete"
          align="center"
          title="저장 성공"
          contentChildren={[
            <Alert.Content>목록 저장에 성공하였습니다.</Alert.Content>,
            <Alert.Content>저장 내역을 다시 한 번 확인해주세요.</Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />
      </Flex>

      <h2>error Modal</h2>
      <Flex>
        <Alert
          status="error"
          align="left"
          title="업로드 오류"
          contentChildren={[
            <Alert.Content>
              필드 이름이 중복되어 업로드가 불가능합니다.
            </Alert.Content>,
            <Alert.Content>
              필드 이름을 수정하고, 재업로드 해주세요.
            </Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />
        <Alert
          status="error"
          align="center"
          title="업로드 오류"
          contentChildren={[
            <Alert.Content>
              필드 이름이 중복되어 업로드가 불가능합니다.
            </Alert.Content>,
            <Alert.Content>
              필드 이름을 수정하고, 재업로드 해주세요.
            </Alert.Content>,
            <Alert.Content>확인하시고 버튼을 눌러주세요.</Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
          ]}
        />
      </Flex>

      <h2>warning Modal</h2>
      <Flex>
        <Alert
          status="warning"
          align="left"
          title="주소록 삭제"
          contentChildren={[
            <Alert.Content highlight={'삭제'}>
              주소록을 삭제하시겠어요?
            </Alert.Content>,
            <Alert.Content>삭제된 주소록은 복구가 불가능합니다.</Alert.Content>,
            <Alert.Content>확인 후 버튼을 눌러주세요</Alert.Content>,
          ]}
          // warning 상태에서 버튼을 2개 넣으면 자동으로 2번 버튼은 빨간색으로 나옵니다. (React.cloneElement로 인덱스를 매칭함)
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
            <Alert.Button
              onClick={() => {
                alert('삭제 됨');
              }}
            >
              네 삭제할게요
            </Alert.Button>,
          ]}
        />
        <Alert
          status="warning"
          align="center"
          title="주소록 삭제"
          contentChildren={[
            <Alert.Content highlight={'삭제'}>
              주소록을 삭제하시겠어요?
            </Alert.Content>,
            <Alert.Content>삭제된 주소록은 복구가 불가능합니다.</Alert.Content>,
          ]}
          footerChildren={[
            <Alert.Button
              onClick={() => {
                alert('확인');
              }}
            >
              확인
            </Alert.Button>,
            <Alert.Button
              onClick={() => {
                alert('삭제 됨');
              }}
            >
              네 삭제할게요
            </Alert.Button>,
          ]}
        />
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  gap: 30px;
`;
