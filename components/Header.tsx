import * as React from 'react';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

type HeaderItemProps = {
  onPress: () => void;
  id: string;
  name: string;
}

function HeaderItem({onPress, id, name}: HeaderItemProps){
  return(
    <Link href={id}>
      <a onClick={onPress} href={id} className="px-4 hover:text-white font-bold">{name}</a>
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false); 
  const onPress = React.useCallback(() => {
    setMenuOpen(false);
  }, []);
  const headerItems = (
    <>
      <HeaderItem onPress={onPress} id='#home' name='HOME'/>
      <HeaderItem onPress={onPress} id='#music' name='MUSIC'/>
      <HeaderItem onPress={onPress} id='#about-us' name='ABOUT US'/>
      <HeaderItem onPress={onPress} id='#upcoming-shows' name='SHOWS'/>
      <HeaderItem onPress={onPress} id='#contact-us' name='CONTACT US'/>
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