import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/aboutus'
import VidHeader from '../components/vidHeader'

const Home: NextPage = () => {
  return (
    <div className='
      scroll-smooth
      flex-col
      flex items-center justify-center
      min-h-screen min-w-full
      text-zinc-300 '>
      <Head>
        <title>Recto Verso</title>
        <meta name="description" content="Recto Verso built by Anish Kanna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <VidHeader /> 
    <AboutUs />
    </div>
  )
}

export default Home
