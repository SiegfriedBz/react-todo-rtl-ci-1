import { BrowserRouter as Router } from "react-router-dom"
import { render, screen, fireEvent } from '@testing-library/react'
import Todo from '../Todo'

describe('Todo', () => {

    const MockTodo = () => <Router><Todo /></Router>

    let inputElement, addButtonElement, userInput01, userInput02

    beforeEach(() => {
        render(<MockTodo />)
        inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        addButtonElement = screen.getByRole('button', { name: /add/i })
        userInput01 = 'Go to the gym'
        userInput02 = 'Go to the party'
    })

    const addTasks = (userInputs) => {
        userInputs.forEach(userInput => {
            fireEvent.change(inputElement, { target: { value: userInput } })
            fireEvent.click(addButtonElement)
        })
    }

    test('user add-btn click adds the correct todo in the todo list', () => {
        addTasks([userInput01])
        const todoDivElement01 = screen.getByText(userInput01)
        expect(todoDivElement01).toBeInTheDocument()
    })

    it('allows user to add and see several todos', () => {
        addTasks([userInput01, userInput02])
        const todoDivElements = screen.getAllByTestId('todo-item')
        expect(todoDivElements.length).toBe(2)
        expect(todoDivElements[0].textContent).toBe(userInput01)
        expect(todoDivElements[1].textContent).toBe(userInput02)
    })

    test('todo should not have completed css class when initially rendered', () => {
        addTasks([userInput01])
        const todoDivElement01 = screen.getByText(userInput01)
        expect(todoDivElement01).not.toHaveClass('todo-item-active')
    })

    test('todo should have completed css class when clicked', () => {
        addTasks([userInput01])
        const todoDivElement01 = screen.getByText(userInput01)
        fireEvent.click(todoDivElement01)
        expect(todoDivElement01).toHaveClass('todo-item-active')
    })
})
