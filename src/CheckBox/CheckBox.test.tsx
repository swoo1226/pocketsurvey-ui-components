import React from 'react';
import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Checkbox from './CheckBox';

describe('체크박스 컴포넌트 테스트', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Checkbox
        name="fruits"
        selections={[{ label: 'apple' }, { label: 'mango' }]}
        selected={['1']}
        onItemClick={(index: number) => alert(index)}
      ></Checkbox>,
    );
  });

  it('셀렉션 개수만큼 체크박스가 렌더링 되는지', async () => {
    renderResult;
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
  });

  it('클릭하면 인덱스 값을 가진 alert가 뜨는지', async () => {
    const { getByText } = renderResult;

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    userEvent.click(getByText('mango'));
    await waitFor(() => expect(window.alert).toBeCalledWith(1));
  });

  it('선택된 체크박스의 checked를 가지고 있는지', () => {
    const { getByTestId } = renderResult;
    const inputNode = getByTestId('checkbox-1');
    expect(inputNode).toHaveAttribute('checked');
  });

  it('선택된 체크박스의 백그라운드는 노랑인지', () => {
    const { getByTestId } = renderResult;
    const inputNode = getByTestId('checkbox-1');
    expect(inputNode).toHaveStyle('background-color: #f2ab28;');
  });
});
