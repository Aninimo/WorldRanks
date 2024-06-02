import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Countrie from '../pages/country/[id]';

const mockCountry = {
  alpha3Code: 'USA',
  flag: 'https://restcountries.com/data/usa.svg',
  name: 'United States of America',
  population: 331449281,
  area: 9833517,
  capital: 'Washington, D.C.',
  languages: [{ name: 'English' }, { name: 'Spanish' }],
  currencies: [{ name: 'United States Dollar' }],
  nativeName: 'United States',
  gini: 48.0,
};

describe('Countrie component', () => {
  it('renders country details correctly', () => {
    render(<Countrie country={mockCountry} />);

    expect(screen.getByText('Country details')).toBeInTheDocument();
    expect(screen.getByText('United States of America')).toBeInTheDocument();
    expect(screen.getByAltText('United States of America flag')).toBeInTheDocument();
    expect(screen.getByText(/331449281/)).toBeInTheDocument();
    expect(screen.getByText(/9833517/)).toBeInTheDocument(); 
    expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();
    expect(screen.getByText('English, Spanish')).toBeInTheDocument();
    expect(screen.getByText('United States Dollar')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();

    expect(screen.getByText('Back to home')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toHaveAttribute('href', '/');
  });
});
