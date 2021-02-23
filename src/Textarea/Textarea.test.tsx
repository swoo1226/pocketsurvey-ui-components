import React from "react";
import { render, RenderResult, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Textarea from './Textarea';

describe('Textarea Test', () => {
    var renderResult: RenderResult;
    beforeEach(() => {
        renderResult = render(
            <Textarea
            type={"basic"}
            size={"small"}
            width={"100"}
            >
            </Textarea>
        )
    });

    it('Rendering Test', () => {
        const { container } = renderResult;
        expect(container);
    });

    it("textarea focus 테스트", async() => {
        const { getByTestId } = renderResult;
        const txtArea = getByTestId("textarea-testid")
        txtArea.focus();
        //userEvent.type(txtArea,"aaa")

        await waitFor(()=>expect(txtArea).toHaveFocus())

    })
});
