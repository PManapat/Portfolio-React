import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('portfolio navigation points to existing sections and preserves all four projects', () => {
  render(<App />);
  screen.getAllByRole('link').filter(link => link.getAttribute('href').startsWith('#')).forEach(link => {
    expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  });
  expect(screen.getAllByRole('article')).toHaveLength(6);
  ['On Common Ground', 'Portfolio Builder', 'Get Med', 'Music Venue Planner'].forEach(title => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByAltText(`${title} website preview`)).toBeInTheDocument();
  });
});

test('mobile navigation closes after choosing a section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /menu/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Work' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
