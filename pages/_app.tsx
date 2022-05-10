
import {ChakraProvider} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'



function MyApp({ Component, pageProps }: AppProps) {

  return (     
  
          <ScrollObserver>   
          <ChakraProvider>
              <Component {...pageProps} />

              </ChakraProvider>
      
          </ScrollObserver>
    )
}

export default MyApp
