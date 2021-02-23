import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom"

import DropDown from './DropDown';
import userEvent from '@testing-library/user-event';

describe('드롭 다운 컴포넌트 테스트', () => {
  var renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <DropDown
        themeColor={{ mainColor: '#FAC62D', subColor: '#FEF4CE' }}
        disable={false}
        list={[
          { selectionName: '객관식 (단일 선택)' },
          { selectionName: '객관식 (복수 선택)' },
          { selectionName: '객관식 (이미지 선택)' },
          { selectionName: '주관식 (텍스트)' },
          { selectionName: '주관식 (이미지)' },
          { selectionName: '객관식 (영상)' },
          { selectionName: '순위 설정' },
          { selectionName: '설명 추가' },
        ]}
        selected={1}
        onItemClick={() => alert('Click')}
      ></DropDown>,
    );
  });

  it('렌더링 테스트', () => {
    const { container } = renderResult;
    expect(container);
  });

  it('Click 테스트', async() => {
    const { container } = renderResult
    jest.spyOn(window, "alert").mockImplementation()
    userEvent.click(container)
    await waitFor(()=> expect(window.alert).toBeCalledWith('Click'))
  })
});
