import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import PaginationComponent from './Pagination'

describe('페이지네이션 컴포넌트 테스트', () => {
    var renderResult: RenderResult;

    beforeEach(async ()=> {
        renderResult = await render(
          <PaginationComponent
            count={8}
            defaultPage={1}
            siblingCount={1}
            boundaryCount={1}
            size="large"
            onChangeFn={(e:any) => alert(e.target.textContent)}
            disabled={false}
            selectedBackgroundColor="#FAC62D"
            selectedTextColor="#FFFFFF"
            hoveredBackgroundColor="#F0F0F0"
            hoveredTextColor="#2B2E33"
          />,
        );
    })

    it('렌더링 테스트', () => {
        const {getByText} = renderResult;
        expect(getByText('1'))
        expect(getByText('2'))
        expect(getByText('3'))
        expect(getByText('4'))
        expect(getByText('5'))
        expect(getByText('8'))
    })

    it('페이지 클릭 테스트', async () => {
        const { getByText } = renderResult;

        jest.spyOn(window, 'alert').mockImplementation(() => {});
        userEvent.click(getByText('2'))
        await waitFor(()=>expect(window.alert).toBeCalledWith('2'))
    })
})