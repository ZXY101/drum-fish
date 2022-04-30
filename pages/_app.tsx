import { storyblokInit, apiPlugin } from '@storyblok/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Teaser from '../components/Teaser';
import Page from '../components/Page';

const components = {
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
