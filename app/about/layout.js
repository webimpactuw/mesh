import Navbar from "../components/Navbar";
import { Jost } from "next/font/google";
import "../globals.css";
import localFont from "next/font/local"
import Footer from "../components/Footer";

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Layout({ children }) {
  return <>{children}</>;
}