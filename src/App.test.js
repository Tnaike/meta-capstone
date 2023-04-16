import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Order for Delivery/i);
  expect(linkElement).toBeInTheDocument();
});
