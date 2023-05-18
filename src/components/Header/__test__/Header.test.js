import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header component', () => {

    // GET BY --- HAPPY PATH
    it('renders the text passed in title prop', () => {
        const title = "Todo"
        render(<Header title={title} />)
        const headingElement = screen.getByText(title)
        expect(headingElement).toBeInTheDocument()
    })

    /* eslint-disable */
    it('renders the text passed in title prop', () => {
        const title = "Todo"
        render(<Header title={title} />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()
    })
    /* eslint-enable */

    it('renders only 1 heading', () => {
        const title = "Todo"
        render(<Header title={title} />)
        const headingElements = screen.getAllByRole('heading')
        expect(headingElements.length).toBe(1)
    })

    /* eslint-disable */
    // FIND BY --- HAPPY PATH
    it('renders the text passed in title prop', async () => {
        const title = "Todo"
        render(<Header title={title} />)
        const headingElement = await screen.findByText(title)
        expect(headingElement).toBeInTheDocument()
    })
    /* eslint-enable */

    // QUERY BY --- UNHAPPY PATH
    it('does not render a different text than the one passed in title prop', () => {
        const title = "Todo"
        render(<Header title={title} />)
        const absentElement = screen.queryByText("random text")
        expect(absentElement).not.toBeInTheDocument()
    })

})
