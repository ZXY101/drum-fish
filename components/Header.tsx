import * as React from 'react';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false); 
  const headerItems = (
    <>
      <Link href="#home"><a onClick={() => setMenuOpen(false)} href='#' className="px-4 hover:text-white">HOME</a></Link>
      <Link href="#music"><a onClick={() => setMenuOpen(false)} href='#music' className="px-4 hover:text-white">MUSIC</a></Link>
      <Link href='#upcoming-shows'><a onClick={() => setMenuOpen(false)} href='#upc' className="px-4 hover:text-white">SHOWS</a></Link>
      <Link href='#contact-us'><a onClick={() => setMenuOpen(false)} href='#upc' className="px-4 hover:text-white">CONTACT US</a></Link>
    </>
  );

  return (
    <>
      <div className="bg-black w-screen bg-opacity-50 h-16 fixed top-0 invisible md:visible">
        <div className="text-gray-400 align-middle  flex h-full items-center text-3xl gap-1 ">
          {headerItems}
        </div>
      </div>
      {menuOpen ? (
        <>
          <div className="bg-black h-screen bg-opacity-90 w-1/2 top-0 fixed right-0 md:invisible">
            <AiOutlineClose onClick={() => setMenuOpen(menuOpen => !menuOpen)} className='top-2 right-2 text-4xl fixed hover:text-white text-gray-400'/>
            <div className="text-gray-400 align-middle flex-col flex h-full items-center text-2xl gap-1 pt-6">
              {headerItems}
            </div>
          </div>
        </>
      ) : <GiHamburgerMenu onClick={() => setMenuOpen(menuOpen => !menuOpen)} className='md:invisible top-2 right-2 text-4xl fixed text-gray-400 hover:text-white'/>}
    </>
  )
}