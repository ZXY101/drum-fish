

export default function Bio() {
  const bio = `Greetings! We are Drumfish - alt/grunge/garage rock band (what are genres, anyway?), coming at you from Johannesburg, South Africa.
  Since our inception in September '20 we've been making noise in the local Jozi rock scene, and are very proud to present our first nose-bleed-inducing single - 'Demeanour'.
  Give it a listen, you might get reeled in…
  Watch this space - we're aiming to get more of our original content out to the masses! `
  return (
    <div className='text-white md:text-4xl text-center mx-2 pt-10 sm:px-10'>
      {bio.toUpperCase()}
    </div> 
  )
}