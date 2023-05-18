import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  let container;

    beforeEach(() => {
        container = render(<App />).container;
    })

    test('renders App div', () => {
      const div = container.querySelector(".App")
      expect(div).toBeInTheDocument();
    });
})
