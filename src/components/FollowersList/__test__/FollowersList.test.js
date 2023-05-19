import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import FollowersList from "../FollowersList";

describe('FollowersList', () => {

    const MockFollowersList = () => <Router><FollowersList /></Router>

    test('should render the fetched follower', async () => {
        act(() => {
            render(<MockFollowersList/>)
        })
        const followerElement = await screen.findByTestId("follower-item")
        expect(followerElement).toBeInTheDocument()
    })

})
