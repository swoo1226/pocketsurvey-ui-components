import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Toggle from './Toggle';

describe('토글 컴포넌트 테스트', () => {
  const a = jest.fn();

  it('토글 오프 상태의 배경색 테스트', async () => {
    const { getByTestId } = render(
      <Toggle
        toggleOnBackgroundColor="#59c4db"
        hoveredBackgroundColor="#818282"
        isToggleOn={false}
        setIsToggleOn={a}
      />,
    );
    await waitFor(() => {
      const ToggleButton = getByTestId('ToggleContainer');
      expect(ToggleButton).toHaveStyleRule('background-color', '#d6d6d6');
    });
  });

  it('토글 클릭 이벤트 테스트', async () => {
    const { getByTestId } = render(
      <Toggle
        toggleOnBackgroundColor="#59c4db"
        hoveredBackgroundColor="#818282"
        isToggleOn={false}
        setIsToggleOn={a}
      />,
    );
    await waitFor(async () => {
      const ToggleButton = getByTestId('ToggleContainer');
      userEvent.click(ToggleButton);
      expect(a).toBeCalledWith(true);
    });
  });

  it('토글 온 상태의 배경색 테스트', async () => {
    const { getByTestId } = render(
      <Toggle
        toggleOnBackgroundColor="#59c4db"
        hoveredBackgroundColor="#818282"
        isToggleOn
        setIsToggleOn={a}
      />,
    );

    await waitFor(() => {
      const ToggleButton = getByTestId('ToggleContainer');
      expect(ToggleButton).toHaveStyleRule('background-color', '#59c4db');
    });
  });

  it('토글 호버 상태의 배경색 테스트', async () => {
    const { getByTestId } = render(
      <Toggle
        toggleOnBackgroundColor="#59c4db"
        hoveredBackgroundColor="#818282"
        isToggleOn={false}
        setIsToggleOn={a}
      />,
    );

    await waitFor(() => {
      const ToggleButton = getByTestId('ToggleContainer');
      expect(ToggleButton).toHaveStyleRule('background-color', '#818282', {
        modifier: ':hover',
      });
    });
  });
});
