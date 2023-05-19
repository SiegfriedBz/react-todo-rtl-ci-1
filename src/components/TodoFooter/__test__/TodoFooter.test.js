import { BrowserRouter as Router } from "react-router-dom"
import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'

describe('TodoFooter component', () => {

    const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
        return (
            <Router>
                <TodoFooter
                    numberOfIncompleteTasks={numberOfIncompleteTasks}
                />
            </Router>
        )
    }

    it('renders the correct number of incomplete task', () => {
        render(MockTodoFooter({ numberOfIncompleteTasks: 1 }))

        const pElement = screen.getByText(/1 task left/i)
        expect(pElement).toBeInTheDocument()
    })

    it('pluralizes the number of incomplete tasks', () => {
        render(MockTodoFooter({ numberOfIncompleteTasks: 5 }))

        const pElement = screen.getByText(/5 tasks left/i)
        expect(pElement).toBeInTheDocument()
    })

    it('renders a Followers link', () => {
        render(MockTodoFooter({ numberOfIncompleteTasks: 5 }))

        const linkElement = screen.getByText('Followers')
        expect(linkElement).toBeVisible()
        expect(linkElement).toContainHTML('a', 'Followers')
    })
})

