import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/aboutus'
import Skills from '../components/skill'
import VidHeader from '../components/vidHeader'
import Works from '../components/works'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Recto Verso</title>
        <meta name="description" content="Recto Verso built by Anish Kanna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <VidHeader /> 
    <AboutUs />
    <Skills />  
    <Works />  
     <AboutUs />  
    
    </main>
  )
}

export default Home
