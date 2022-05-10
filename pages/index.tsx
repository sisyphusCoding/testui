import type { NextPage } from 'next'
import Head from 'next/head'

import {Flex} from '@chakra-ui/react'

import UberHead from '../components/uberhead'

import AboutUs from '../components/aboutus'

const Home: NextPage = () => {
  return (

      <Flex gap={20} flexDir='column' justifyContent='start' alignItems='center'  color='whiteAlpha.800'  bg='blackAlpha.800' >   
      <Head>
        <title>anish testing UI</title>
      </Head>
          
      
        <UberHead / >
        
        <AboutUs / >


      </Flex>
            
            
  ) 
}

export default Home
