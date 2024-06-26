import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local"
import Footer from "./components/Footer";

const fabulous = localFont({
  src: '/static-fonts/fabulous.otf',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'],
})


export const metadata = {
  title: "MESH",
  description: "MESH @ University of Washington",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className={jost.className}>

        <div className="hidden banner text-center text-white p-2 flex flex-row justify-center items-center font-bold">
          <h2 className="text-lg pr-3">
            MESH Fashion Show is coming this May
          </h2>
          <button className="bg-white text-black font-light rounded-full px-4 py-1 flex flex-row items-center">
            View Event
            <img src="arrow-right.png" className="h-3 ml-2"></img>
          </button>
        </div>

        <div className={fabulous.className}>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
