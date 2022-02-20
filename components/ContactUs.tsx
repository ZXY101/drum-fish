export default function ContactUs() {
  return (
    <div className="text-white px-10 font-mono">
      <h1 className="text-3xl ">Contact us</h1>
      <div className="border-b-2 border-white p-1"></div>
      <ul className="text-2xl pt-2 pb-20 flex-col gap-1 flex w-2/3">
        <li className="flex">
          <h2 className="flex-1">Email:</h2>
          <h2 className="flex-1">drumfishband@gmail.com</h2>
        </li>
        <li className="flex">
          <h2 className="flex-1">Mobile:</h2>
          <h2 className="flex-1">063-311-1136</h2>
        </li>
      </ul>
    </div>
  )
}