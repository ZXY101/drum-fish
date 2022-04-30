import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }: {blok: any}) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    {blok.content.map((nestedBlok: any) => (
      <div className='bg-black h-full font-oswald px-2 sm:px-10'>
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      </div>
    ))}
  </main>
);
 
export default Page;