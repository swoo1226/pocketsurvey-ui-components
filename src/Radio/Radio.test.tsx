import React from 'react';
import Radio from './Radio';
import '@testing-library/jest-dom';
import {
  render, RenderResult, waitFor, cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('라디오 테스트', () => {
  let renderResult: RenderResult;
  const selections = [
    {
      label: 'apple',
    },
    {
      label: 'mango',
    },
  ];
  let selected = 'apple';
  beforeEach(() => {
    renderResult = render(
      <Radio
        name="radio"
        selections={selections}
        selected={selected}
        onItemClick={(index: number | null) => {
          selected = index !== null ? selections[index].label : '';
        }}
      />,
    );
  });

  it('Rendering Test', () => {
    const { container } = renderResult;
    expect(container);
  });

  it('Checked Test', async () => {
    const { getByTestId } = renderResult;
    const radiobtn1 = getByTestId('radio-selection-item-1');
    await userEvent.click(radiobtn1);
    await waitFor(() => {
      expect(selected).toBe('mango');
    });
  });

  it('unCheck Test', async () => {
    const { getByTestId } = renderResult;
    const radiobtn1 = getByTestId('radio-selection-item-1');
    await userEvent.click(radiobtn1);
    await waitFor(() => {
      expect(selected).toBe('');
    });
    afterEach(cleanup);
  });
});
