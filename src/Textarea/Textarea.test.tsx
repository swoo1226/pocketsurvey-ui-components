import React from "react";
import { render, RenderResult } from '@testing-library/react';
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


});
