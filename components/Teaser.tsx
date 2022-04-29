import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }: {blok: any}) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;