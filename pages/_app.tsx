import { storyblokInit, apiPlugin } from '@storyblok/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Teaser from '../components/Teaser';
import Page from '../components/Page';
import Landing from '../components/Landing';
import Music from '../components/Music';
import UpcomingShows, { Show } from '../components/UpcomingShows'
import ContactUs from '../components/ContactUs'
import Bio from '../components/Bio'

const components = {
  teaser: Teaser,
  page: Page,
  landing: Landing,
  music: Music,
  bio: Bio,
  contactUs: ContactUs,
  upcomingShows: UpcomingShows,
  show: Show,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
