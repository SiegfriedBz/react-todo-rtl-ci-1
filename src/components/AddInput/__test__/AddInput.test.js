import { render, screen, fireEvent } from "@testing-library/react"
import AddInput from "../AddInput"
import userEvent from "@testing-library/user-event";

describe('AddInput', () => {

    const todos = []
    const mockSetTodos = jest.fn()

    beforeEach(() => {
        render(
            <AddInput
                setTodos={mockSetTodos}
                todos={todos}
            />
        )
    })

    it('renders an input element', () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument()
    })

    it('allows the user to type into the input', () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const userInput = 'Go to the gym'
        userEvent.type(inputElement, userInput)
        expect(inputElement.value).toBe(userInput)
    })

    test('onChange event on input adds the user input', () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const userInput = 'Go to the gym'
        fireEvent.change(inputElement, { target: { value: userInput } })
        expect(inputElement.value).toBe(userInput)
    })

    it('renders an add button', () => {
        const buttonElement = screen.getByRole('button', { name: /add/i })
        expect(buttonElement).toBeInTheDocument()
    })

    test('onClick on add button empties the user input',  () => {
        const buttonElement = screen.getByRole('button', { name: /add/i })
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const userInput = 'Go to the beach'
        fireEvent.change(inputElement, { target: { value: userInput } })
        expect(inputElement.value).toBe(userInput)

        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('')
    })



})
