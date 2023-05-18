import { render } from '@testing-library/react';
import App from './App';

test('renders App div', () => {
  const { container } = render(<App />);
  const div = container.querySelector(".App")
  expect(div).toBeInTheDocument();
});
