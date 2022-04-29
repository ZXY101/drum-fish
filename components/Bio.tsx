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
      <button className="absolute top-1/2 -translate-y-1/2 left-0 bg-opacity-50 px-2 bg-black h-full hidden sm:block" onClick={scrollPrev}>
        <MdArrowBackIosNew/>
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-0 bg-opacity-50 px-2 bg-black h-full hidden sm:block" onClick={scrollNext}>
        <MdArrowForwardIos/>
      </button>
    </div>
  )
}


export default function Bio() {
  const bio = `Greetings, We are Drumfish.\n\n An alt/grunge/garage rock band (what are genres, anyway?), coming at you from Johannesburg, South Africa.\n
  Since our inception in September '20 we've been making noise in the local Jozi rock scene, and are very proud to present our first single - 'Demeanour'.\n `
  return (
    <div className='text-white  flex xl:flex-row flex-col gap-5' id='about-us'>
      <div className='flex-1 md:text-5xl whitespace-pre-line'>
        <p>{bio.toUpperCase()}</p>
      </div>
      <div className='flex-1 m-auto'>
        <EmblaCarousel slides={[<img className='h-[560px] justify-center flex w-full object-cover' src='/images/char.jpg'/>, <img className='h-[560px] justify-center flex w-full object-cover' src='/images/fish.jpg'/>]} options={{loop: true }} plugins={[Autoplay({delay: 5000})]}/>
      </div>
    </div> 
  )
}