import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getStoryblokApi, StoryblokComponent  } from "@storyblok/react"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Music from '../components/Music'
import UpcomingShows from '../components/UpcomingShows'
import Landing from '../components/Landing'
import ContactUs from '../components/ContactUs'
import Bio from '../components/Bio'

type HomeProps = {
  story: any;
  id: string | boolean;
}

const Home: NextPage<HomeProps> = ({story}: HomeProps) => {
  return (
    <>
      <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Drum Fish</title>
      </Head>
      <Landing/>
      <h1>{story ? story.name : 'TEST'}</h1>
      <StoryblokComponent blok={story?.content} />
      <Header/>
      <Footer/>
      <div className='bg-black h-full font-oswald flex flex-col gap-5 px-2 sm:px-10'>
        <Music/>
        <Bio />
        <UpcomingShows/>
        <ContactUs/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log('aaaa', data);
  

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };

}

export default Home
