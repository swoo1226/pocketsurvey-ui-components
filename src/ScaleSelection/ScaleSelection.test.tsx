import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import ScaleSelection from './ScaleSelection';

describe('척도 UI 컴포넌트 테스트', () => {
  let renderResult: RenderResult;
  let selected: number | null = null;
  beforeEach(() => {
    renderResult = render(
      <ScaleSelection
        leftLabel="추천하지 않을래요"
        rightLabel="추천할래요"
        selectionLength={11}
        selected={selected}
        onItemClick={(index) => {
          selected = index;
        }}
      />,
    );
  });

  it('특정 선택지 선택 테스트', async () => {
    const { getByTestId } = renderResult;
    const btn3 = getByTestId('item-3');
    await userEvent.click(btn3);
    await waitFor(() => {
      // null => 3
      expect(selected).toBe(3);
    });

    const btn10 = getByTestId('item-10');
    await userEvent.click(btn10);
    await waitFor(() => {
      // 3 => 10
      expect(selected).toBe(10);
    });
  });

  it('선택 취소 테스트', async () => {
    const { getByTestId } = renderResult;
    const btn10 = getByTestId('item-10');
    await userEvent.click(btn10);
    await waitFor(() => {
      // 10 => null
      expect(selected).toBe(null);
    });
  });
});
