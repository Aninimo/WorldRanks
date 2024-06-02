import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
  test('switch theme when button is clicked', () => {
    const { getByTestId } = render(<Header />);
    const button = getByTestId('theme-button');
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('load locally stored theme', () => {
    localStorage.setItem('theme', 'dark');
    render(<Header />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('render correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('WorldRank')).toBeInTheDocument();
    expect(getByText('WorldRank')).toHaveTextContent('WorldRank');
    expect(getByText('WorldRank').nodeName).toBe('H1');
  });
});
