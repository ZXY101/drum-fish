import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
type Props = {
  blok: any,
}

export function Show({ blok }: {blok: any}){
  return (
    <a {...storyblokEditable(blok)} href={blok.link.url} target='_blank' className=" hover:text-gray-500">
      <li className="flex py-1">
        <h1 className="flex-1">{blok.title}</h1>
        <h1 className="flex-1">{blok.location}</h1>
        <h1 className="flex-1">{blok.date}</h1>
      </li>
    </a>
  );
  
}

export default function UpcomingShows({blok}: Props) {
  return (
    <div {...storyblokEditable(blok)} className="text-white  pt-5" id='upcoming-shows'>
      <h1 className="text-3xl font-bold">Upcoming shows</h1>
      <div className="border-b-2 border-white p-1"></div>
      <ul className="py-1 text-xs md:text-lg">
        {blok.shows.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  )
}