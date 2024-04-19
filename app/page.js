import Image from "next/image";
import Navbar from "./components/Navbar";
import localFont from "next/font/local"

const fabulous = localFont({
  src: '/static-fonts/fabulous.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <div>
      <div className="pt-4">
        <div className="flex flex-row justify-between">
          <img src="home_left.png" className="h-96" alt="Mesh fashion show"></img>
          <img src="home_mid.png" className="h-96" alt="Mesh representatives"></img>
          <img src="home_right.png" className="h-96"></img>
        </div>
        <div className="mt-5 text-white text-center text-xl mb-5">
        A collective of fashion designers & enthusiasts based at UW
        </div>
      </div>
      

      <div className="flex flex-col justify-center latest-events content-center items-center m">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl m-4">Upcoming Events</h1>
        </div>
        <div className="flex flex-row justify-center mb-8n space-x-2 mx-8">
          <div className="">
            <div className="line"></div>
            <img src="latest_left.png" alt="Mesh event" className="border border-solid border-white"></img>
            <p className="text-white text-center font-light">text</p>
          </div>
          <div className="">
            <div className="line"></div>
            <img src="latest_mid.png" alt="Mesh event" className="border border-solid border-white"></img>
            <p className="text-white text-center font-light">text</p>
          </div>
          <div className="">
            <div className="line"></div>
            <img src="latest_right.png" alt="Mesh event" className="border border-solid border-white"></img>
            <p className="text-white text-center font-light">text</p>
          </div>
        </div>
      </div>

      <div className="mb-40">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl">Instagram Feed</h1>
        </div>
      </div>

    </div>
  );
}
