import {AiFillYoutube, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';


export default function Footer() {
  return (
    <div className="bg-black w-screen bg-opacity-50 h-10 fixed bottom-0">
      <div className="text-gray-400 align-middle justify-center flex h-full items-center text-3xl gap-1">
          <a href='https://www.instagram.com/drumfish_official/' target="_blank"><AiOutlineInstagram className='hover:text-white'/></a>
          <a href='https://www.facebook.com/drumfishband' target="_blank"><AiFillFacebook className='hover:text-white'/></a>
          <a href='https://www.youtube.com/channel/UCaL6H5G_8ohszc9SmSOTugg/featured' target="_blank"><AiFillYoutube className='hover:text-white'/></a>
      </div>
    </div>
  )
}