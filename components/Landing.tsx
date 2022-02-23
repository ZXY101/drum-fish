import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Landing({}: Props) {
  const copykek = `Drumfish is in alternative rock/grunge/garage rock band (what are genres anyway?) coming at you from South Africa.
  Being a fairly new band in the scene since September 2020 they have worked tirelessly to become recognised in the local rock scene of Johannesburg, with their first nose bleed inducing single 'Demeanour' released in January 2022 they are looking to get more of their original content out too the masses.`
  
  return (
    <div className='md:h-screen bg-cover bg-fixed bg-center bg-no-repeat bg-[url(/images/fish.jpg)] shadow-[0_-100px_50px_-2px_rgba(0,0,0,1)_inset]'>
      <div className='md:h-screen bg-black bg-opacity-70'>
        <h1 className='text-7xl md:text-9xl text-center p-4 font-bold text-white'>DRUMFISH</h1>
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