import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Todos List heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Todos List/i, level: 2 });
  expect(heading).toBeInTheDocument();
});
