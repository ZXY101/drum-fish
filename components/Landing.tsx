import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Landing({}: Props) {
  return (
    <div className=' bg-cover bg-fixed bg-center bg-no-repeat bg-[url(/images/fish.jpg)] shadow-[0_-100px_50px_-2px_rgba(0,0,0,1)_inset]' id='home'>
      <div className=' bg-black bg-opacity-70'>
        <h1 className='text-5xl lg:text-9xl md:text-7xl text-center lg:pt-14  pt-8 p-4 font-bold text-white font-matiz'>DRUMFISH</h1>
        <div className='p-3 justify-center flex mix-blend-screen'>
          <Image
            src="/images/logo.png"
            width={700}
            height={700}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}