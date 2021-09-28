import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Button from './Button';

describe('버튼 컴포넌트 테스트', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Button
        mode="primary"
        size="small"
        disabled={false}
        onClick={() => alert('BasicButton')}
      >
        버튼
      </Button>,
    );
  });

  it('렌더링 테스트', () => {
    const { getByText } = renderResult;

    expect(getByText('버튼'));
  });

  it('클릭 테스트', async () => {
    const { getByText } = renderResult;

    jest.spyOn(window, 'alert').mockImplementation();
    userEvent.click(getByText('버튼'));
    await waitFor(() => expect(window.alert).toBeCalledWith('BasicButton'));
  });
});
