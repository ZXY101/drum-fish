export default function Header() {
  return (
    <div className="bg-black w-screen bg-opacity-50 h-16 fixed top-0">
      <div className="text-gray-400 align-middle  flex h-full items-center text-3xl gap-1 ">
          <a href='#' className="px-4 hover:text-white">HOME</a>
          <a href='#music' className="px-4 hover:text-white">MUSIC</a>
          <a href='#' className="px-4 hover:text-white">SHOWS</a>
      </div>
    </div>
  )
}