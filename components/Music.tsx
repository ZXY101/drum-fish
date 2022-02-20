import React from 'react'

export default function Music() {
  return (
    <div className='flex flex-col justify-center gap-2 md:flex-row px-20'>
      <iframe src="https://open.spotify.com/embed/album/0S8nH0qIj2etcAucmEZiqL?utm_source=generator&theme=0" className='w-full'  height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <iframe src="https://bandcamp.com/EmbeddedPlayer/track=8926781/size=small/bgcol=333333/linkcol=4ec5ec/transparent=true/" className='w-full' height="80" seamless><a href="https://drumfishofficial.bandcamp.com/track/down-lockdown-demo">Down (Lockdown Demo) by Drumfish</a></iframe>
    </div>
  )
}