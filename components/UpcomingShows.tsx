
type Props = {}

export default function UpcomingShows({}: Props) {
  return (
    <div className="text-white font-mono" id='upcoming-shows'>
      <div className="px-2 pb-2 pt-10 md:p-10">
        <h1 className="text-3xl ">Upcoming shows</h1>
        <div className="border-b-2 border-white p-1"></div>
        <ul className="py-1 text-xs md:text-lg">
          <a href="https://www.facebook.com/drumfishband/photos/a.120683756742745/324193436391775/" target='_blank' className=" hover:text-gray-500">
            <li className="flex py-1">
              <h1 className="flex-1">Battle of the bands</h1>
              <h1 className="flex-1">Sundowners - Kliprivier drive</h1>
              <h1 className="flex-1">05/03/2022</h1>
            </li>
          </a>
          <a href="https://www.facebook.com/drumfishband/photos/a.120683756742745/324193436391775/" target='_blank' className=" hover:text-gray-500">
            <li className="flex py-1">
              <h1 className="flex-1">Battle of the bands</h1>
              <h1 className="flex-1">Sundowners - Kliprivier drive</h1>
              <h1 className="flex-1">05/03/2022</h1>
            </li>
          </a>
          <a href="https://www.facebook.com/drumfishband/photos/a.120683756742745/324193436391775/" target='_blank' className=" hover:text-gray-500">
            <li className="flex py-1">
              <h1 className="flex-1">Battle of the bands</h1>
              <h1 className="flex-1">Sundowners - Kliprivier drive</h1>
              <h1 className="flex-1">05/03/2022</h1>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}