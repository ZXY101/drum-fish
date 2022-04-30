import { storyblokEditable } from "@storyblok/react";

export default function Music({ blok }: {blok: any}) {
  return (
    <div {...storyblokEditable(blok)} className='flex flex-col justify-center gap-2 md:flex-row sm:pt-16 pt-5' id="music">
      <iframe src={`https://open.spotify.com/embed/album/0S8nH0qIj2etcAucmEZiqL?utm_source=generator&theme=${blok.theme}`} className='md:w-2/3'  height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  )
}