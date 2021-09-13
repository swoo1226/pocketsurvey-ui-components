import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CheckRanking from './CheckRanking';

describe('체크 랭킹 컴포넌트 테스트', () => {
  let renderResult: RenderResult;

  let selected: number[] = [3];
  const setSelected = (arr: number[]) => {
    selected = arr;
  };

  beforeEach(() => {
    renderResult = render(
      <CheckRanking
        selections={[
          { label: 'apple' },
          { label: 'mango' },
          { label: 'banana' },
          { label: 'orange' },
        ]}
        selected={selected}
        onItemClick={(index: number) => {
          if (selected.includes(index)) {
            setSelected(selected.filter((item) => item != index));
          } else {
            setSelected([...selected, index]);
          }
        }}
      />,
    );
  });

  it('마지막 선택지 선택 취소', async () => {
    // [3] => []
    const { getByTestId } = renderResult;
    userEvent.click(getByTestId('CheckRanking-3'));
    expect(selected).toEqual([]);
  });

  it('새로운 선택지 선택', async () => {
    // [] => [2] => [2,1]
    const { getByTestId } = renderResult;
    userEvent.click(getByTestId('CheckRanking-2'));
    userEvent.click(getByTestId('CheckRanking-1'));
    expect(selected).toEqual([2, 1]);
  });

  it('선택지 삭제 및 선택', async () => {
    // [] => [1] => [1,3] => [1,3,0] => [1,3,0,2] => [3,0,2] => [3,2]

    const { getByTestId } = renderResult;
    selected = [];
    await userEvent.click(getByTestId('CheckRanking-1'));
    await userEvent.click(getByTestId('CheckRanking-3'));
    await userEvent.click(getByTestId('CheckRanking-0'));
    await userEvent.click(getByTestId('CheckRanking-2'));
    await userEvent.click(getByTestId('CheckRanking-1'));
    await userEvent.click(getByTestId('CheckRanking-0'));
    expect(selected).toEqual([3, 2]);
  });
});
