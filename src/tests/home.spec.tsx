import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../pages';

const mockCountries = [
  { alpha3Code: 'USA', name: 'United States', population: 331449281 },
  { alpha3Code: 'CAN', name: 'Canada', population: 38005238 },
  { alpha3Code: 'GBR', name: 'United Kingdom', population: 67886011 },
];

describe('Home component', () => {
  test('renders correctly with initial countries', () => {
    render(<Home countries={mockCountries} />);
    
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
  });

  test('filters countries based on search keyword', () => {
    render(<Home countries={mockCountries} />);
    
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'United' } });

    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    expect(screen.queryByText('Canada')).not.toBeInTheDocument();
  });
});
