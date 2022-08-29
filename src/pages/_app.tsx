import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return(
     <Component {...pageProps} />
  )
}

export default MyApp
