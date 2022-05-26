import * as React from 'react';
import Image from 'next/image'
import useEmblaCarousel, {EmblaOptionsType, EmblaPluginType} from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import { storyblokEditable } from "@storyblok/react";

type EmblaCarouselType = {
  slides: {filename: string}[];
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
    <div className="embla relative text-4xl ">
      <div  className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide h-[560px] justify-center flex w-full object-cover" key={index} >
              <Image
                src={slide.filename}
                quality={100}
                priority={true}
                objectFit='cover'
                layout='fill'
              />
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


export default function Bio({ blok }: {blok: any}) {
  return (
    <div {...storyblokEditable(blok)} className='text-white  flex xl:flex-row flex-col gap-5 sm:pt-16 pt-5' id='about-us'>
      <div className='flex-1 md:text-5xl whitespace-pre-line'>
        <p>{blok.bio.toUpperCase()}</p>
      </div>
      <div className='flex-1 m-auto'>
        <EmblaCarousel slides={blok.slides} options={{loop: true }} plugins={[Autoplay({delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true})]}/>
      </div>
    </div> 
  )
}