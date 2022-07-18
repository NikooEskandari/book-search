import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search books icon', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/search-books/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sort alphabetically', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/sort-alphabetically/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sort publish date', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/sort-date/i);
  expect(linkElement).toBeInTheDocument();
});

