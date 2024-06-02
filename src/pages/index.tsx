import { useState } from 'react'
import Link from 'next/link'
import { Header } from '../components/Header'
import { HomeContainer } from '../styles/Home'

interface Country {
  alpha3Code: string;
  name: string;
  population: number;
}

interface HomeProps {
  countries: Country[];
}

export default function Home({ countries }: HomeProps) {
  const [keyword, setKeyword] = useState('')
  const results = countries

  const searchedCountries = results.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword)
  )    
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }
  
  return (
    <>
      <Header/>
      <input
        type='text'
        placeholder='Search'
        onChange={handleInputChange}/>
      <HomeContainer>     
      
      <ul>
         {searchedCountries.map((country) => (
          <li key={country.alpha3Code}>
            <Link href={`/country/${country.alpha3Code}`}>
              <a>
                <div>
                  <h3>
                    <span>Name</span>
                    <br/>
                    {country.name}
                 </h3>
                <h3>
                 <span>Population</span>
                 <br/>
                 {country.population}
                </h3>
               </div>
              </a>
            </Link>
          </li>
        ))}
       </ul>
     </HomeContainer>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://restcountries.com/v2/all");
    const countries: Country[] = await res.json();

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return {
      props: {
        countries: [],
      },
    };
  }
};
