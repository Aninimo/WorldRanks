import { useState } from 'react'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { HomeContainer } from '../styles/Home'

export default function Home({countries}){
  const[keyword,setKeyword] = useState('')
  const results = countries

  const searcheredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword)
  )    
  
  function onInputChange(e){
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }
  
  return(
    <>
      <Header/>
      <input
        type='text'
        placeholder='Search'
        onChange={onInputChange}/>
      <HomeContainer>     
      
      <ul>
         {searcheredCountries.map((countries) => (
          <li>
            <Link href={`/country/${countries.alpha3Code}`}>
              <a>
                <div>
                  <h3>
                    <span>Name</span>
                    <br/>
                    {countries.name}
                 </h3>
                <h3>
                 <span>Population</span>
                 <br/>
                 {countries.population}
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
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
