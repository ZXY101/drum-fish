import { storyblokEditable } from "@storyblok/react";

export default function ContactUs({ blok }: {blok: any}) {
  return (
    <div {...storyblokEditable(blok)} className="text-white pt-5" id="contact-us">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <div className="border-b-2 border-white p-1"></div>
      <ul className="sm:text-2xl text-base pt-2 pb-20 flex-col gap-2 flex sm:w-2/3">
        <div className="flex">
          <h2 className="flex-1">Email:</h2>
          <h2 className="flex-1">{blok.email}</h2>
        </div>
      </ul>
    </div>
  )
}