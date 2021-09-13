import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import DropDown from './DropDown';

describe('드롭 다운 컴포넌트 테스트', () => {
  let renderResult: RenderResult;
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
      />,
    );
  });

  it('렌더링 테스트', () => {
    const { container } = renderResult;
    expect(container);
  });

  it('ListItem 테스트', async () => {
    const { getByTestId } = renderResult;
    const Dropbox = getByTestId('dropdownbox-testid');
    const DropdownList = getByTestId('dropdownlist-testid');
    jest.spyOn(window, 'alert').mockImplementation();
    userEvent.click(Dropbox);

    await waitFor(() => expect(DropdownList).not.toHaveStyle('opacity: 0'));
  });
});
