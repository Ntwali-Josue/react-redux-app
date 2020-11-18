import React from 'react'
import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from '../App'

const AppComponent = () => {
    return render(<App />)
}
describe("APP", () => {
    it("should render the component", () => {
        const { asFragment } = AppComponent();
        expect(asFragment(<App />)).toMatchSnapshot()
    })
    it("increment", () => {
        const { getByLabelText } = AppComponent();
        const incrementButton = getByLabelText("incrementButton")
        const value = getByLabelText("value")
        const before = parseInt(value.innerHTML, 10);
        userEvent.click(incrementButton);
        const int = parseInt(value.innerHTML);
        expect(int).toBe(before + 1)
    })
    it("decrement", () => {
        const { getByLabelText } = AppComponent();
        const decrementButton = getByLabelText("decrementButton")
        const value = getByLabelText("value")
        const before = parseInt(value.innerHTML, 10);
        userEvent.click(decrementButton)
        const int = parseInt(value.innerHTML);
        expect(int).toBe(before -1)
    })
})