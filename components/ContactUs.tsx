export default function ContactUs() {
  return (
    <div className="text-white px-2 md:px-10 font-mono" id="contact-us">
      <h1 className="text-3xl ">Contact us</h1>
      <div className="border-b-2 border-white p-1"></div>
      <ul className="sm:text-2xl text-xl pt-2 pb-20 flex-col gap-2 flex sm:w-2/3">
        <div className="sm:flex">
          <h2 className="flex-1">Email:</h2>
          <h2 className="flex-1">drumfishband@gmail.com</h2>
        </div>
      </ul>
    </div>
  )
}