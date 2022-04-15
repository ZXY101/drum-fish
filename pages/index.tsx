import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Music from '../components/Music'
import UpcomingShows from '../components/UpcomingShows'
import Landing from '../components/Landing'
import ContactUs from '../components/ContactUs'

const Home: NextPage = () => {
  const [showBio, setShowBio]= React.useState(false);
  const bio = `Greetings! We are Drumfish - alt/grunge/garage rock band (what are genres, anyway?), coming at you from Johannesburg, South Africa.
  Since our inception in September '20 we've been making noise in the local Jozi rock scene, and are very proud to present our first nose-bleed-inducing single - 'Demeanour'.
  Give it a listen, you might get reeled in…
  Watch this space - we're aiming to get more of our original content out to the masses! `
  return (
    <>
      <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Drum Fish</title>
      </Head>
      <div className='bg-black h-full'>
        <div onClick={() => setShowBio((showBio) => !showBio)}><Landing/></div>
        {showBio ? <div className='text-white md:text-4xl text-center mx-2 pb-10 sm:px-10'>
          {bio.toUpperCase()}
        </div> : null}
        <Music/>
        <UpcomingShows/>
        <ContactUs/>
        <Header/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
