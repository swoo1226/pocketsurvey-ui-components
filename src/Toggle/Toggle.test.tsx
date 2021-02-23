import React from "react";
import { render, RenderResult, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom"

import Toggle from './Toggle';
import userEvent from '@testing-library/user-event';

describe('Toggle Test', () => {
    var renderResult: RenderResult;
    beforeEach(()=> {
        renderResult = render(
            <Toggle toggleOnBackgroundColor={"59C4DB"}
            hoveredBackgroundColor={"#818282"}
            isToggleOn={true}
            setIsToggleOn={()=> alert("")}
            ></Toggle>
        );
    });

    it("Rendering Test", () => {
        const {container} = renderResult;
        expect(container);
    });
    
    it("Toggle Test", async() => {
        const { container } = renderResult;
        jest.spyOn(window, "alert").mockImplementation()
        userEvent.click(container)
        await waitFor(()=> expect(window.alert).toBeCalledWith(''))
    })
});