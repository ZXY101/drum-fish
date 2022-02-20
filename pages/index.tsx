import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Music from '../components/Music'
import UpcomingShows from '../components/UpcomingShows'
import Landing from '../components/Landing'
import ContactUs from '../components/ContactUs'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-br from-black via-black to-slate-900 h-full'>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Drum Fish</title>
      </Head>
      <Landing/>
      <Music/>
      <UpcomingShows/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
