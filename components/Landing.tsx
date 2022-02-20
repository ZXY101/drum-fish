import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Landing({}: Props) {
  return (
    <>
      <div className='fixed h-full w-screen opacity-5 pointer-events-none'>
        <Image
          src="/images/drumfish.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1 className='text-white text-9xl text-center p-4 font-mono text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-800'>Drum Fish</h1>
      <div className='p-3 justify-center flex mix-blend-screen '>
      <Image
        src="/images/logo.jpg"
        width={500}
        height={500}
        quality={100}
      />
    </div>
    <div className='justify-center flex p-10'>
      <h1 className='text-white text-lg font-mono text-center lg:w-2/4'>
        Drumfish is in alternative rock/grunge/garage rock band (what are genres anyway?) coming at you from South Africa.
        Being a fairly new band in the scene since September 2020 they have worked tirelessly to become recognised in the local rock scene of Johannesburg, with their first nose bleed inducing single 'Demeanour' released in January 2022 they are looking to get more of their original content out too the masses.
      </h1>
    </div>
    </>
  )
}