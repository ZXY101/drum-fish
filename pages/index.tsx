import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Music from '../components/Music'
import UpcomingShows from '../components/UpcomingShows'
import Landing from '../components/Landing'
import ContactUs from '../components/ContactUs'
import Bio from '../components/Bio'

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Drum Fish</title>
      </Head>
      <div className='bg-black h-full font-matiz'>
        <Landing/>
        <Music/>
        <Bio />
        <UpcomingShows/>
        <ContactUs/>
        <Header/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
