import { render, screen } from '@testing-library/react';
import App from './App';

test('renders getData button', () => {
  render(<App />);
  const linkElement = screen.getByText(/getData/i);
  expect(linkElement).toBeInTheDocument();
});
