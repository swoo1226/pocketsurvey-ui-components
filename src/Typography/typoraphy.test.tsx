import React from 'react';
import { render, RenderResult } from '@testing-library/react';
// import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom';

import Font from './Font';

describe('폰트 컴포넌트 테스트', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Font
        fontColor="#40739e"
        fontFace="Mont"
        fontSize="18px"
        fontWeight="700"
      >
        폰트테스트
      </Font>
    );
  });

  it('의도한 텍스트가 렌더링 되는가', () => {
    const { getByText } = renderResult;
    const font = getByText('폰트테스트');

    expect(font).toBeTruthy();
  });

  it('fontColor', () => {
    const { getByText } = renderResult;
    const font = getByText('폰트테스트');

    expect(font).toHaveStyle('color: #40739e');
  });

  it('fontSize', () => {
    const { getByText } = renderResult;
    const font = getByText('폰트테스트');

    expect(font).toHaveStyle('font-size: 18px');
  });

  it('fontFace', () => {
    const { getByText } = renderResult;
    const font = getByText('폰트테스트');

    expect(font).toHaveStyle('font-family: Mont');
  });

  it('fontWeight', () => {
    const { getByText } = renderResult;
    const font = getByText('폰트테스트');

    expect(font).toHaveStyle('font-weight: 700');
  });
});
