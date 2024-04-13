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
      <div>
        image image image
        <div className="mt-5 text-white text-center text-xl">
        A collective of fashion designers & enthusiasts based at UW
        </div>
      </div>
      

      <div className="latest-events content-center items-center">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl">Latest Events</h1>
        </div>
        <div>
          Image
          Image
          Image
        </div>
      </div>

      <div>
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl">Instagram Feed</h1>
        </div>
      </div>

    </div>
  );
}
