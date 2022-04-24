import * as React from 'react';
import useEmblaCarousel, {EmblaOptionsType, EmblaPluginType} from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';


type EmblaCarouselType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  plugins: EmblaPluginType[];
}

export const EmblaCarousel = ({slides, options, plugins}: EmblaCarouselType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()}
  , [emblaApi]);
  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()}
  , [emblaApi]);

  return (
    <div className="embla relative  text-4xl">
      <div  className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 -translate-y-1/2 left-0 bg-opacity-50 px-2 bg-black h-full" onClick={scrollPrev}>
        <MdArrowBackIosNew/>
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-0 bg-opacity-50 px-2 bg-black h-full" onClick={scrollNext}>
        <MdArrowForwardIos/>
      </button>
    </div>
  )
}


export default function Bio() {
  const bio = `Greetings! We are Drumfish - alt/grunge/garage rock band (what are genres, anyway?), coming at you from Johannesburg, South Africa.
  Since our inception in September '20 we've been making noise in the local Jozi rock scene, and are very proud to present our first nose-bleed-inducing single - 'Demeanour'.
  Give it a listen, you might get reeled in…
  Watch this space - we're aiming to get more of our original content out to the masses! `
  return (
    <div className='text-white  text-center mx-2 pt-10 sm:px-10 flex sm:flex-row flex-col gap-5'>
      <div className='flex-1 md:text-4xl'>
        {bio.toUpperCase()}
      </div>
      <div className='flex-1'>
        <EmblaCarousel slides={[<img className='h-[500px] justify-center flex w-full object-cover' src='/images/char.jpg'/>, <img className='h-[500px] justify-center flex w-full object-cover' src='/images/fish.jpg'/>]} options={{loop: true }} plugins={[Autoplay({delay: 5000})]}/>
      </div>
    </div> 
  )
}