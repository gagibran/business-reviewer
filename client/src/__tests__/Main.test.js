import { render, screen } from '@testing-library/react';
import Main from '../components/Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/My Resumes/i);
  expect(linkElement).toBeInTheDocument();
});
