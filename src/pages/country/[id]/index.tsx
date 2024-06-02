import Link from 'next/link'
import { Container, MainBox, SecondBox } from './styles'

interface Country {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  area: number;
  capital: string;
  languages: { name: string }[];
  currencies: { name: string }[];
  nativeName: string;
  gini: number;
}

interface CountrieProps {
  country: Country;
}

interface Params {
  id: string;
}

const getCountry = async (id: string): Promise<Country> => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${id}`);
  const country = await res.json();
  return country;
};

export default function Countrie({ country }: CountrieProps) {
  return (
    <Container>
      <h1>Country details</h1>
      <MainBox>
        <img src={country.flag} alt={`${country.name} flag`} />
        <h3>{country.name}</h3>

        <div className='moreInfo'>
          <p>{country.population} <br /> population</p>
          <p>{country.area} <br /> area</p>
        </div>
      </MainBox>
      <SecondBox>
        <h3>Details</h3>
        <ul>
          <li>
            <span>Capital</span>
            <p>{country.capital}</p>
          </li>
          <li>
            <span>Languages</span>
            <p>
              {country.languages.map(({ name }) => name).join(", ")}
            </p>
          </li>
          <li>
            <span>Currencies</span>
            <p>{country.currencies.map(({ name }) => name).join(", ")}</p>
          </li>
          <li>
            <span>Native name</span>
            <p>{country.nativeName}</p>
          </li>
          <li>
            <span>Gini</span>
            <p>{country.gini}%</p>
          </li>
        </ul>
      </SecondBox>
      <Link href='/'>Back to home</Link>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all/');
  const countries: Country[] = await res.json();

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
